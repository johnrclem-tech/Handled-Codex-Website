import { mkdir, readFile, writeFile } from "node:fs/promises"
import path from "node:path"
import { readKeywordRows, normalizeKeyword } from "./lib/keyword-csv.mjs"
import { loadGoogleAdsConfig, resolveAdGroupTargeting } from "./lib/google-ads-config.mjs"
import { createGoogleAdsClient } from "./lib/google-ads-client.mjs"

const REPORTS_DIR = path.join(process.cwd(), "reports")
const CACHE_PATH = path.join(REPORTS_DIR, "google-ads-keyword-planner-cache.json")

function mapCompetition(rawValue) {
  if (!rawValue) return "UNKNOWN"
  return String(rawValue).replace("KEYWORD_PLAN_COMPETITION_LEVEL_", "")
}

function microsToCurrency(micros) {
  const parsed = Number.parseFloat(String(micros ?? "0"))
  if (!Number.isFinite(parsed)) return 0
  return parsed / 1_000_000
}

function toNumber(value, fallback = 0) {
  const parsed = Number.parseFloat(String(value ?? ""))
  return Number.isFinite(parsed) ? parsed : fallback
}

function formatTargetingProfile(targeting) {
  const geos = (targeting.geoTargetConstants || []).join(",")
  return `${geos || "all-geos"}|${targeting.language || "all-languages"}|${targeting.keywordPlanNetwork || "GOOGLE_SEARCH_AND_PARTNERS"}`
}

function isCacheFresh(cache, targetKey, maxAgeHours) {
  if (!cache?.fetchedAt) return false
  const fetchedAtMs = new Date(cache.fetchedAt).getTime()
  if (!Number.isFinite(fetchedAtMs)) return false
  const ageHours = (Date.now() - fetchedAtMs) / (1000 * 60 * 60)
  if (ageHours > maxAgeHours) return false
  return cache.targetingProfile === targetKey
}

function buildTopAdGroups(rows, topLimit, maxKeywordsPerAdGroup) {
  const byGroup = new Map()
  for (const row of rows) {
    const key = `${row.campaign}|||${row.adGroup}`
    if (!byGroup.has(key)) {
      byGroup.set(key, {
        campaign: row.campaign,
        adGroup: row.adGroup,
        spend: 0,
        keywords: new Map(),
      })
    }
    const group = byGroup.get(key)
    group.spend += row.cost
    if (row.keywordNormalized && !group.keywords.has(row.keywordNormalized)) {
      group.keywords.set(row.keywordNormalized, row.keyword)
    }
  }

  return Array.from(byGroup.values())
    .sort((left, right) => right.spend - left.spend)
    .slice(0, topLimit)
    .map((group) => ({
      ...group,
      keywordList: Array.from(group.keywords.values()).slice(0, maxKeywordsPerAdGroup),
      normalizedSet: new Set(Array.from(group.keywords.keys()).slice(0, maxKeywordsPerAdGroup)),
    }))
}

async function readExistingCache() {
  try {
    const raw = await readFile(CACHE_PATH, "utf8")
    return JSON.parse(raw)
  } catch {
    return null
  }
}

async function main() {
  const config = await loadGoogleAdsConfig()
  const rows = await readKeywordRows()
  const topAdGroups = buildTopAdGroups(
    rows,
    config.targeting.limits.topAdGroups,
    config.targeting.limits.maxKeywordsPerAdGroup
  )

  const existingCache = await readExistingCache()
  const client = await createGoogleAdsClient(config)
  const outputGroups = []

  for (const group of topAdGroups) {
    const targeting = resolveAdGroupTargeting(config.targeting, group.campaign, group.adGroup)
    const targetingProfile = formatTargetingProfile(targeting)
    const cacheGroup = existingCache?.adGroups?.find(
      (item) =>
        item.campaign === group.campaign &&
        item.adGroup === group.adGroup &&
        isCacheFresh(item, targetingProfile, config.targeting.limits.cacheMaxAgeHours)
    )

    if (cacheGroup) {
      outputGroups.push(cacheGroup)
      continue
    }

    const historicalResults = await client.generateKeywordHistoricalMetrics({
      keywords: group.keywordList,
      geoTargetConstants: targeting.geoTargetConstants,
      language: targeting.language,
      keywordPlanNetwork: targeting.keywordPlanNetwork,
    })

    const ideas = await client.generateKeywordIdeas({
      keywords: group.keywordList,
      landingPageUrl: targeting.landingPageUrl,
      seedStrategy: targeting.seedStrategy,
      geoTargetConstants: targeting.geoTargetConstants,
      language: targeting.language,
      keywordPlanNetwork: targeting.keywordPlanNetwork,
      pageSize: config.targeting.limits.maxIdeaResultsPerAdGroup,
    })

    const historicalByKeyword = {}
    for (const result of historicalResults) {
      const keywordText = result.text || ""
      const normalized = normalizeKeyword(keywordText)
      if (!normalized) continue
      const metrics = result.keywordMetrics || {}
      historicalByKeyword[normalized] = {
        text: keywordText,
        avgMonthlySearches: toNumber(metrics.avgMonthlySearches),
        competition: mapCompetition(metrics.competition),
        competitionIndex: toNumber(metrics.competitionIndex, -1),
        lowTopOfPageBid: microsToCurrency(metrics.lowTopOfPageBidMicros),
        highTopOfPageBid: microsToCurrency(metrics.highTopOfPageBidMicros),
      }
    }

    const ideaRows = []
    for (const idea of ideas) {
      const keywordText = idea.text || ""
      const normalized = normalizeKeyword(keywordText)
      if (!normalized) continue
      if (group.normalizedSet.has(normalized)) continue
      const metrics = idea.keywordIdeaMetrics || {}
      ideaRows.push({
        text: keywordText,
        normalized,
        avgMonthlySearches: toNumber(metrics.avgMonthlySearches),
        competition: mapCompetition(metrics.competition),
        competitionIndex: toNumber(metrics.competitionIndex, -1),
        lowTopOfPageBid: microsToCurrency(metrics.lowTopOfPageBidMicros),
        highTopOfPageBid: microsToCurrency(metrics.highTopOfPageBidMicros),
      })
    }

    outputGroups.push({
      campaign: group.campaign,
      adGroup: group.adGroup,
      spend: group.spend,
      fetchedAt: new Date().toISOString(),
      targetingProfile,
      targeting,
      apiVersion: client.apiVersion,
      requestWindow: "historical_12_months",
      historicalMetrics: historicalByKeyword,
      ideas: ideaRows,
      sampledKeywords: group.keywordList.slice(0, 25),
    })
  }

  const cache = {
    customerId: config.auth.customerId,
    loginCustomerId: config.auth.loginCustomerId,
    apiVersion: client.apiVersion,
    syncedAt: new Date().toISOString(),
    cacheMaxAgeHours: config.targeting.limits.cacheMaxAgeHours,
    topAdGroups: config.targeting.limits.topAdGroups,
    targetingConfigPath: config.targeting.targetingConfigPath,
    adGroups: outputGroups,
  }

  await mkdir(REPORTS_DIR, { recursive: true })
  await writeFile(CACHE_PATH, JSON.stringify(cache, null, 2), "utf8")

  console.log("Google Keyword Planner sync complete.")
  console.log(`Synced ad groups: ${outputGroups.length}`)
  console.log(`Cache file: ${path.relative(process.cwd(), CACHE_PATH)}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
