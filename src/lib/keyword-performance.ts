import { readFile } from "node:fs/promises"
import path from "node:path"

export interface KeywordPerformanceRow {
  sourceOrder: number
  keyword: string
  status: string
  adGroup: string
  qualityScore: number | null
  adRelevance: string
  landingPageRelevance: string
  cost: number
  impressions: number
  searchImpressionShare: number | null
  totalAvailableImpressions: number
}

export interface AdGroupPerformance {
  adGroup: string
  weightedAverageQualityScore: number | null
  totalAvailableImpressions: number
  totalSpend: number
  keywords: KeywordPerformanceRow[]
}

export interface KeywordPerformanceData {
  groups: AdGroupPerformance[]
  rawKeywords: KeywordPerformanceRow[]
  excludedFromChartCount: number
}

function parseCsvLine(line: string) {
  const result: string[] = []
  let current = ""
  let inQuotes = false

  for (let i = 0; i < line.length; i += 1) {
    const character = line[i]

    if (character === "\"") {
      if (inQuotes && line[i + 1] === "\"") {
        current += "\""
        i += 1
      } else {
        inQuotes = !inQuotes
      }
      continue
    }

    if (character === "," && !inQuotes) {
      result.push(current)
      current = ""
      continue
    }

    current += character
  }

  result.push(current)
  return result
}

function parseNumber(value: string | undefined) {
  if (!value) {
    return null
  }

  const normalized = value.trim().replace(/[$,]/g, "")
  if (!normalized || normalized === "--") {
    return null
  }

  const parsed = Number.parseFloat(normalized.replace(/^</, ""))
  return Number.isFinite(parsed) ? parsed : null
}

function parsePercent(value: string | undefined) {
  if (!value) {
    return null
  }

  const normalized = value.trim().replace(/[%,$]/g, "")
  if (!normalized || normalized === "--") {
    return null
  }

  const parsed = Number.parseFloat(normalized.replace(/^</, ""))
  return Number.isFinite(parsed) ? parsed / 100 : null
}

function roundTo(value: number, digits = 2) {
  const precision = 10 ** digits
  return Math.round(value * precision) / precision
}

function safeAvailableImpressions(
  impressions: number,
  searchImpressionShare: number | null
) {
  if (!searchImpressionShare || searchImpressionShare <= 0) {
    return impressions
  }

  return impressions / searchImpressionShare
}

export async function getKeywordAdGroupPerformance() {
  const filePath = path.join(process.cwd(), "src/content/keywords-clem.csv")
  const raw = await readFile(filePath, "utf8")

  const lines = raw
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0)

  const headerIndex = lines.findIndex((line) => line.startsWith("Search keyword,"))
  if (headerIndex === -1) {
    throw new Error("Could not find keyword report header row in keywords-clem.csv")
  }

  const headers = parseCsvLine(lines[headerIndex])
  const index = {
    keyword: headers.indexOf("Search keyword"),
    status: headers.indexOf("Search keyword status"),
    adGroup: headers.indexOf("Ad group"),
    qualityScore: headers.indexOf("Quality Score"),
    adRelevance: headers.indexOf("Ad relevance"),
    landingPageExp: headers.indexOf("Landing page exp."),
    cost: headers.indexOf("Cost"),
    impressions: headers.indexOf("Impr."),
    searchImpressionShare: headers.indexOf("Search impr. share"),
  }

  if (Object.values(index).some((value) => value === -1)) {
    throw new Error("Missing one or more required columns in keywords-clem.csv")
  }

  const rows: KeywordPerformanceRow[] = []
  for (const [sourceOrder, line] of lines.slice(headerIndex + 1).entries()) {
    const values = parseCsvLine(line)
    const status = values[index.status] ?? "Unknown"
    const impressions = parseNumber(values[index.impressions]) ?? 0
    const searchImpressionShare = parsePercent(values[index.searchImpressionShare])
    const totalAvailableImpressions = safeAvailableImpressions(
      impressions,
      searchImpressionShare
    )

    rows.push({
      sourceOrder,
      keyword: values[index.keyword] ?? "",
      status,
      adGroup: values[index.adGroup] ?? "Unassigned",
      qualityScore: parseNumber(values[index.qualityScore]),
      adRelevance: values[index.adRelevance] ?? "Unknown",
      landingPageRelevance: values[index.landingPageExp] ?? "Unknown",
      cost: parseNumber(values[index.cost]) ?? 0,
      impressions,
      searchImpressionShare,
      totalAvailableImpressions,
    })
  }

  const chartRows = rows.filter(
    (row) => row.status.trim().toLowerCase() !== "not eligible"
  )

  const grouped = new Map<string, KeywordPerformanceRow[]>()
  for (const row of chartRows) {
    const groupName = row.adGroup || "Unassigned"
    const existing = grouped.get(groupName)
    if (existing) {
      existing.push(row)
      continue
    }
    grouped.set(groupName, [row])
  }

  const groups: AdGroupPerformance[] = Array.from(grouped.entries())
    .map(([adGroup, keywords]) => {
      const totalAvailableImpressions = keywords.reduce(
        (sum, row) => sum + row.totalAvailableImpressions,
        0
      )
      const totalSpend = keywords.reduce((sum, row) => sum + row.cost, 0)

      const qualityScoreWeights = keywords.filter((row) => row.qualityScore !== null)
      const weightedDenominator = qualityScoreWeights.reduce(
        (sum, row) => sum + row.totalAvailableImpressions,
        0
      )
      const weightedNumerator = qualityScoreWeights.reduce(
        (sum, row) =>
          sum + (row.qualityScore ?? 0) * row.totalAvailableImpressions,
        0
      )

      return {
        adGroup,
        weightedAverageQualityScore:
          weightedDenominator > 0 ? weightedNumerator / weightedDenominator : null,
        totalAvailableImpressions: roundTo(totalAvailableImpressions, 2),
        totalSpend: roundTo(totalSpend, 2),
        keywords: keywords
          .map((row) => ({
            ...row,
            totalAvailableImpressions: roundTo(row.totalAvailableImpressions, 2),
          }))
          .sort(
            (left, right) =>
              right.totalAvailableImpressions - left.totalAvailableImpressions
          ),
      }
    })
    .sort((left, right) => right.totalSpend - left.totalSpend)

  return {
    groups,
    rawKeywords: rows,
    excludedFromChartCount: rows.length - chartRows.length,
  }
}
