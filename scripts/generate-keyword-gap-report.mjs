import { mkdir, readFile, writeFile } from "node:fs/promises"
import path from "node:path"
import { normalizeKeyword, readKeywordRows } from "./lib/keyword-csv.mjs"

const OUTPUT_DIR = path.join(process.cwd(), "reports")
const OUTPUT_MD = path.join(OUTPUT_DIR, "keyword-gap-analysis.md")
const OUTPUT_CSV = path.join(OUTPUT_DIR, "keyword-gap-top12.csv")
const OUTPUT_METADATA = path.join(OUTPUT_DIR, "keyword-gap-metadata.json")
const PLANNER_CACHE = path.join(OUTPUT_DIR, "google-ads-keyword-planner-cache.json")

const LOW_INTENT_REGEX =
  /\b(what is|definition|meaning|how to|job|jobs|career|salary|free|template|example|wiki)\b/
const WATCH_ONLY_REGEX = /\b(near me)\b/

const THEME_LIBRARY = {
  california: [
    "southern california 3pl",
    "california ecommerce fulfillment center",
    "west coast 3pl california",
    "california pick and pack fulfillment",
  ],
  new_jersey: [
    "new jersey ecommerce fulfillment center",
    "nj 3pl warehouse",
    "east coast 3pl new jersey",
    "new jersey order fulfillment company",
  ],
  new_york: [
    "new york 3pl warehouse",
    "nyc fulfillment center",
    "new york ecommerce fulfillment company",
  ],
  amazon: [
    "amazon fba prep center",
    "fba prep services",
    "amazon prep center 3pl",
    "fbm 3pl amazon",
  ],
  three_pl: [
    "3pl fulfillment company",
    "3pl provider ecommerce",
    "outsourced fulfillment services",
    "third party logistics provider",
  ],
  beauty: [
    "cosmetics 3pl",
    "beauty product fulfillment center",
    "skincare fulfillment services",
    "supplement and beauty fulfillment",
  ],
  shirt: [
    "custom t shirt fulfillment",
    "bulk t shirt fulfillment",
    "print on demand shirt fulfillment",
  ],
  clothing: [
    "fashion fulfillment services",
    "garment fulfillment center",
    "clothing 3pl services",
  ],
  apparel: [
    "apparel 3pl services",
    "fashion apparel fulfillment",
    "apparel pick and pack",
  ],
  ecommerce_services: [
    "ecommerce 3pl services",
    "shopify ecommerce fulfillment services",
    "direct to consumer fulfillment services",
  ],
  fulfillment_center: [
    "fulfillment center services",
    "3pl fulfillment center",
    "order fulfillment center",
  ],
  near_me: [
    "local ecommerce fulfillment company",
    "regional 3pl provider",
    "near me 3pl services",
  ],
  generic: [
    "ecommerce order fulfillment company",
    "3pl warehouse services",
  ],
}

function csvEscape(value) {
  const stringValue = String(value ?? "")
  if (/[",\n]/.test(stringValue)) {
    return `"${stringValue.replace(/"/g, "\"\"")}"`
  }
  return stringValue
}

function parseCompetitionWeight(competition, competitionIndex) {
  if (typeof competitionIndex === "number" && competitionIndex >= 0) {
    if (competitionIndex >= 85) return -0.9
    if (competitionIndex >= 65) return -0.4
    if (competitionIndex <= 25) return 0.5
    return 0
  }

  if (competition === "LOW") return 0.5
  if (competition === "MEDIUM") return 0
  if (competition === "HIGH") return -0.5
  return 0
}

function scoreToPriority(score) {
  if (score >= 2.8) return "High"
  if (score >= 1.6) return "Medium"
  return "Watch"
}

function normalizeAdGroupTheme(groupName) {
  const normalized = groupName.toLowerCase()
  if (normalized.includes("california")) return "california"
  if (normalized.includes("new jersey")) return "new_jersey"
  if (normalized.includes("new york")) return "new_york"
  if (normalized.includes("amazon")) return "amazon"
  if (normalized === "3pl") return "three_pl"
  if (normalized.includes("beauty")) return "beauty"
  if (normalized.includes("shirt")) return "shirt"
  if (normalized.includes("clothing")) return "clothing"
  if (normalized.includes("apparel")) return "apparel"
  if (normalized.includes("ecommerce fulfillment services")) return "ecommerce_services"
  if (normalized === "fulfillment center") return "fulfillment_center"
  if (normalized.includes("near me")) return "near_me"
  return "generic"
}

function buildDefaultCandidate(term, adGroup) {
  const normalized = normalizeKeyword(term)
  return {
    adGroup,
    term,
    normalizedTerm: normalized,
    sourceType: "rule_template",
    avgMonthlySearches: 0,
    competition: "UNKNOWN",
    competitionIndex: -1,
    lowTopOfPageBid: 0,
    highTopOfPageBid: 0,
  }
}

function buildCandidatesFromPlanner(cacheGroup, adGroup, existingNormalizedSet) {
  if (!cacheGroup) return []

  const candidates = []
  for (const idea of cacheGroup.ideas || []) {
    const normalized = normalizeKeyword(idea.text || "")
    if (!normalized || existingNormalizedSet.has(normalized)) continue

    candidates.push({
      adGroup,
      term: idea.text,
      normalizedTerm: normalized,
      sourceType: "planner_idea",
      avgMonthlySearches: Number(idea.avgMonthlySearches || 0),
      competition: idea.competition || "UNKNOWN",
      competitionIndex: Number(idea.competitionIndex ?? -1),
      lowTopOfPageBid: Number(idea.lowTopOfPageBid || 0),
      highTopOfPageBid: Number(idea.highTopOfPageBid || 0),
    })
  }
  return candidates
}

function mergeHistoricalMetrics(candidate, cacheGroup) {
  if (!cacheGroup) return candidate
  const historical = cacheGroup.historicalMetrics?.[candidate.normalizedTerm]
  if (!historical) return candidate

  return {
    ...candidate,
    avgMonthlySearches: Number(historical.avgMonthlySearches || candidate.avgMonthlySearches || 0),
    competition: historical.competition || candidate.competition || "UNKNOWN",
    competitionIndex: Number(historical.competitionIndex ?? candidate.competitionIndex ?? -1),
    lowTopOfPageBid: Number(historical.lowTopOfPageBid || candidate.lowTopOfPageBid || 0),
    highTopOfPageBid: Number(historical.highTopOfPageBid || candidate.highTopOfPageBid || 0),
  }
}

function buildReason(candidate, theme) {
  if (candidate.sourceType === "planner_idea") {
    return "Google Ads Keyword Idea surfaced this as a relevant expansion for this ad group."
  }

  if (theme === "amazon") {
    return "Transactional Amazon logistics variant aligned to fulfillment outsourcing intent."
  }
  if (theme === "california" || theme === "new_jersey" || theme === "new_york") {
    return "Geo + fulfillment intent variant aligned to regional campaign targeting."
  }
  return "Commercial service variant aligned to this ad group theme."
}

function buildNegativeGuardrails(allTopGroups, currentGroup, themeKey) {
  const negatives = new Set()
  const normalizedGroup = currentGroup.toLowerCase()

  for (const group of allTopGroups) {
    if (group === currentGroup) continue
    const token = group.toLowerCase()
    if (token.includes("california") && !normalizedGroup.includes("california")) negatives.add("california")
    if (token.includes("new jersey") && !normalizedGroup.includes("new jersey")) negatives.add("new jersey")
    if (token.includes("new york") && !normalizedGroup.includes("new york")) negatives.add("new york")
    if (token.includes("amazon") && themeKey !== "amazon") negatives.add("amazon")
    if (token.includes("apparel") && !normalizedGroup.includes("apparel")) negatives.add("apparel")
    if (token.includes("clothing") && !normalizedGroup.includes("clothing")) negatives.add("clothing")
    if (token.includes("beauty") && themeKey !== "beauty") negatives.add("beauty")
    if (token.includes("shirt") && themeKey !== "shirt") negatives.add("shirt")
  }

  return Array.from(negatives).slice(0, 4).join(", ")
}

function toMarkdownTable(rows) {
  const header = [
    "Ad Group",
    "Missing Term",
    "Why It Belongs",
    "Priority",
    "Suggested Match Type",
    "Source",
    "Avg Monthly Searches",
    "Competition",
    "Competition Index",
    "Top of Page Bid Range",
    "Notes / Negatives",
  ]
  const separator = header.map(() => "---")
  const lines = [
    `| ${header.join(" | ")} |`,
    `| ${separator.join(" | ")} |`,
  ]

  for (const row of rows) {
    lines.push(
      `| ${row.adGroup} | ${row.term} | ${row.why} | ${row.priority} | ${row.matchType} | ${row.sourceType} | ${row.avgMonthlySearches} | ${row.competition} | ${row.competitionIndex} | ${row.bidRange} | ${row.notes} |`
    )
  }
  return lines.join("\n")
}

async function main() {
  const keywordRows = await readKeywordRows()
  let plannerCache = null
  try {
    const plannerCacheRaw = await readFile(PLANNER_CACHE, "utf8")
    plannerCache = JSON.parse(plannerCacheRaw)
  } catch {
    plannerCache = {
      syncedAt: null,
      apiVersion: null,
      targetingConfigPath: null,
      topAdGroups: 12,
      adGroups: [],
    }
  }

  const byGroup = new Map()
  for (const row of keywordRows) {
    const key = `${row.campaign}|||${row.adGroup}`
    if (!byGroup.has(key)) {
      byGroup.set(key, {
        campaign: row.campaign,
        adGroup: row.adGroup,
        spend: 0,
        existingNormalizedSet: new Set(),
      })
    }
    const group = byGroup.get(key)
    group.spend += row.cost
    if (row.keywordNormalized) {
      group.existingNormalizedSet.add(row.keywordNormalized)
    }
  }

  const topLimit = plannerCache.topAdGroups || 12
  const topGroups = Array.from(byGroup.values())
    .sort((left, right) => right.spend - left.spend)
    .slice(0, topLimit)

  const spendRankMap = new Map(topGroups.map((group, index) => [group.adGroup, index + 1]))
  const allTopNames = topGroups.map((group) => group.adGroup)
  const cacheByAdGroup = new Map((plannerCache.adGroups || []).map((group) => [group.adGroup, group]))

  const candidatePool = []
  for (const group of topGroups) {
    const theme = normalizeAdGroupTheme(group.adGroup)
    const themeDefaults = THEME_LIBRARY[theme] || THEME_LIBRARY.generic
    const cacheGroup = cacheByAdGroup.get(group.adGroup)

    for (const term of themeDefaults) {
      const fallback = buildDefaultCandidate(term, group.adGroup)
      if (group.existingNormalizedSet.has(fallback.normalizedTerm)) continue
      candidatePool.push(mergeHistoricalMetrics(fallback, cacheGroup))
    }

    candidatePool.push(
      ...buildCandidatesFromPlanner(cacheGroup, group.adGroup, group.existingNormalizedSet)
    )
  }

  // ownership (one term -> one ad group)
  const ownedCandidates = new Map()
  for (const candidate of candidatePool) {
    const existing = ownedCandidates.get(candidate.normalizedTerm)
    if (!existing) {
      ownedCandidates.set(candidate.normalizedTerm, candidate)
      continue
    }
    const existingScore = (existing.avgMonthlySearches || 0) + (100 - (spendRankMap.get(existing.adGroup) || 99))
    const currentScore = (candidate.avgMonthlySearches || 0) + (100 - (spendRankMap.get(candidate.adGroup) || 99))
    if (currentScore > existingScore) {
      ownedCandidates.set(candidate.normalizedTerm, candidate)
    }
  }

  const perGroup = new Map(topGroups.map((group) => [group.adGroup, []]))
  for (const candidate of ownedCandidates.values()) {
    const normalized = candidate.normalizedTerm
    const intentBlocked = LOW_INTENT_REGEX.test(normalized)
    if (intentBlocked) continue
    perGroup.get(candidate.adGroup)?.push(candidate)
  }

  const finalRows = []
  for (const group of topGroups) {
    const theme = normalizeAdGroupTheme(group.adGroup)
    const candidates = (perGroup.get(group.adGroup) || [])
      .map((candidate) => {
        const normalized = candidate.normalizedTerm
        const isWatchOnly = WATCH_ONLY_REGEX.test(normalized)
        const volumeWeight =
          candidate.avgMonthlySearches >= 1000 ? 2.0 :
          candidate.avgMonthlySearches >= 300 ? 1.4 :
          candidate.avgMonthlySearches >= 100 ? 1.0 :
          candidate.avgMonthlySearches >= 30 ? 0.5 : 0.2
        const competitionWeight = parseCompetitionWeight(candidate.competition, candidate.competitionIndex)
        const bidMid = (candidate.lowTopOfPageBid + candidate.highTopOfPageBid) / 2
        const bidWeight = bidMid >= 10 ? -0.4 : bidMid >= 6 ? -0.2 : 0.2
        const sourceWeight = candidate.sourceType === "planner_idea" ? 0.6 : 0.2
        const intentWeight = isWatchOnly ? -1.3 : 0.8

        const score = volumeWeight + competitionWeight + bidWeight + sourceWeight + intentWeight
        const priority = scoreToPriority(score)
        const matchType = priority === "High" ? "Exact" : "Phrase"

        return {
          ...candidate,
          score,
          priority,
          matchType,
          why: buildReason(candidate, theme),
          bidRange: `$${candidate.lowTopOfPageBid.toFixed(2)}-$${candidate.highTopOfPageBid.toFixed(2)}`,
          notes: `Start with ${matchType}; add negatives: ${buildNegativeGuardrails(allTopNames, group.adGroup, theme) || "none"}`,
        }
      })
      .sort((left, right) => right.score - left.score)
      .slice(0, 6)

    if (candidates.length === 0) {
      finalRows.push({
        adGroup: group.adGroup,
        term: "No high-intent gap found",
        why: "Current ad group covers most mapped commercial variants with available planner data.",
        priority: "Watch",
        matchType: "n/a",
        sourceType: "n/a",
        avgMonthlySearches: 0,
        competition: "n/a",
        competitionIndex: "n/a",
        bidRange: "n/a",
        notes: "Monitor search terms and rerun planner sync.",
      })
    } else {
      finalRows.push(...candidates)
    }
  }

  // validations
  const dedupeFailures = []
  for (const row of finalRows) {
    if (row.term === "No high-intent gap found") continue
    const group = topGroups.find((item) => item.adGroup === row.adGroup)
    if (group?.existingNormalizedSet.has(normalizeKeyword(row.term))) {
      dedupeFailures.push(`${row.adGroup} :: ${row.term}`)
    }
  }
  if (dedupeFailures.length > 0) {
    throw new Error(`Deduplication check failed:\n${dedupeFailures.join("\n")}`)
  }

  const boundaryFailures = []
  const owners = new Map()
  for (const row of finalRows) {
    if (row.term === "No high-intent gap found") continue
    const normalized = normalizeKeyword(row.term)
    if (owners.has(normalized) && owners.get(normalized) !== row.adGroup) {
      boundaryFailures.push(`${row.term} in ${owners.get(normalized)} and ${row.adGroup}`)
    } else {
      owners.set(normalized, row.adGroup)
    }
  }
  if (boundaryFailures.length > 0) {
    throw new Error(`Boundary check failed:\n${boundaryFailures.join("\n")}`)
  }

  const intentFailures = finalRows
    .filter((row) => row.term !== "No high-intent gap found")
    .filter((row) => LOW_INTENT_REGEX.test(normalizeKeyword(row.term)))
  if (intentFailures.length > 0) {
    throw new Error(
      `Intent filter check failed:\n${intentFailures.map((row) => `${row.adGroup} :: ${row.term}`).join("\n")}`
    )
  }

  const coverageFailures = topGroups
    .filter((group) => !finalRows.some((row) => row.adGroup === group.adGroup))
    .map((group) => group.adGroup)
  if (coverageFailures.length > 0) {
    throw new Error(`Coverage check failed:\n${coverageFailures.join("\n")}`)
  }

  const phase2Groups = Array.from(byGroup.values())
    .sort((left, right) => right.spend - left.spend)
    .slice(topLimit)

  const backlog = phase2Groups.map((group) => {
    const theme = normalizeAdGroupTheme(group.adGroup)
    const sampleTerms = (THEME_LIBRARY[theme] || THEME_LIBRARY.generic).slice(0, 3)
    return {
      adGroup: group.adGroup,
      currentSpend: `$${group.spend.toFixed(2)}`,
      nextExpansionTerms: sampleTerms.join("; "),
    }
  })

  const markdown = [
    "# Keyword Gap Analysis (Top-Spend Ad Groups First)",
    "",
    "## Scope and Defaults",
    "- Source: `src/content/keywords-clem.csv`",
    `- Top-spend scope: ${topLimit} ad groups`,
    "- Planner scope: historical metrics + keyword ideas",
    "- Filters: exclude low-intent and broad geo/near-me expansion unless marked `Watch`",
    "- Priority objective: PPC efficiency with planner metrics",
    "",
    "## Decision-Ready Matrix (Top 12 Ad Groups)",
    "",
    toMarkdownTable(finalRows),
    "",
    "## Phase-2 Backlog (Remaining Ad Groups)",
    "",
    "| Ad Group | Current Spend | Next Expansion Terms |",
    "| --- | ---: | --- |",
    ...backlog.map(
      (row) =>
        `| ${row.adGroup} | ${row.currentSpend} | ${row.nextExpansionTerms} |`
    ),
    "",
    "## Validation Checks",
    "- Deduplication check: passed",
    "- Boundary check: passed",
    "- Intent filter check: passed",
    "- Coverage check: passed",
    "",
    `Generated on ${new Date().toISOString()}.`,
    "",
  ].join("\n")

  const csvRows = [
    [
      "Ad Group",
      "Missing Term",
      "Why It Belongs",
      "Priority",
      "Suggested Match Type",
      "Source",
      "Avg Monthly Searches",
      "Competition",
      "Competition Index",
      "Top of Page Bid Range",
      "Notes / Negatives",
    ],
    ...finalRows.map((row) => [
      row.adGroup,
      row.term,
      row.why,
      row.priority,
      row.matchType,
      row.sourceType,
      row.avgMonthlySearches,
      row.competition,
      row.competitionIndex,
      row.bidRange,
      row.notes,
    ]),
  ]
  const csv = csvRows.map((row) => row.map((value) => csvEscape(value)).join(",")).join("\n")

  const metadata = {
    lastSyncTime: plannerCache.syncedAt ?? null,
    reportGeneratedAt: new Date().toISOString(),
    targetingProfile: "campaign-mirrored",
    requestWindow: "historical_12_months",
    apiVersion: plannerCache.apiVersion ?? null,
    targetingConfigPath: plannerCache.targetingConfigPath ?? null,
  }

  await mkdir(OUTPUT_DIR, { recursive: true })
  await writeFile(OUTPUT_MD, markdown, "utf8")
  await writeFile(OUTPUT_CSV, csv, "utf8")
  await writeFile(OUTPUT_METADATA, JSON.stringify(metadata, null, 2), "utf8")

  console.log("Keyword gap analysis generated.")
  console.log(`Top groups: ${topGroups.length}`)
  console.log(`Matrix rows: ${finalRows.length}`)
  console.log(`Markdown: ${path.relative(process.cwd(), OUTPUT_MD)}`)
  console.log(`CSV: ${path.relative(process.cwd(), OUTPUT_CSV)}`)
  console.log(`Metadata: ${path.relative(process.cwd(), OUTPUT_METADATA)}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
