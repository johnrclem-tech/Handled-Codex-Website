import { readFile } from "node:fs/promises"
import path from "node:path"

export interface KeywordGapMatrixRow {
  adGroup: string
  missingTerm: string
  whyItBelongs: string
  priority: string
  suggestedMatchType: string
  source: string
  avgMonthlySearches: number
  competition: string
  competitionIndex: string
  topOfPageBidRange: string
  notes: string
}

export interface KeywordGapBacklogRow {
  adGroup: string
  currentSpend: string
  nextExpansionTerms: string
}

export interface KeywordGapReportData {
  matrix: KeywordGapMatrixRow[]
  backlog: KeywordGapBacklogRow[]
  generatedOn: string | null
  metadata: {
    lastSyncTime: string | null
    reportGeneratedAt: string | null
    targetingProfile: string | null
    requestWindow: string | null
    apiVersion: string | null
    targetingConfigPath: string | null
  }
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

function parseMarkdownTableRow(line: string) {
  return line
    .split("|")
    .map((cell) => cell.trim())
    .filter((cell, index, array) => !(index === 0 || index === array.length - 1))
}

export async function getKeywordGapReportData(): Promise<KeywordGapReportData> {
  const csvPath = path.join(process.cwd(), "reports/keyword-gap-top12.csv")
  const mdPath = path.join(process.cwd(), "reports/keyword-gap-analysis.md")
  const metadataPath = path.join(process.cwd(), "reports/keyword-gap-metadata.json")

  const [csvRaw, mdRaw, metadataRaw] = await Promise.all([
    readFile(csvPath, "utf8"),
    readFile(mdPath, "utf8"),
    readFile(metadataPath, "utf8").catch(() => "{}"),
  ])
  const metadataJson = JSON.parse(metadataRaw)

  const csvLines = csvRaw
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0)

  const matrix: KeywordGapMatrixRow[] = []
  for (const line of csvLines.slice(1)) {
    const cells = parseCsvLine(line)
    if (cells.length < 11) {
      continue
    }

    matrix.push({
      adGroup: cells[0],
      missingTerm: cells[1],
      whyItBelongs: cells[2],
      priority: cells[3],
      suggestedMatchType: cells[4],
      source: cells[5],
      avgMonthlySearches: Number.parseInt(cells[6], 10) || 0,
      competition: cells[7],
      competitionIndex: cells[8],
      topOfPageBidRange: cells[9],
      notes: cells[10],
    })
  }

  const markdownLines = mdRaw.split(/\r?\n/)
  const phase2HeadingIndex = markdownLines.findIndex((line) =>
    line.startsWith("## Phase-2 Backlog")
  )

  const backlog: KeywordGapBacklogRow[] = []
  if (phase2HeadingIndex !== -1) {
    for (const line of markdownLines.slice(phase2HeadingIndex + 1)) {
      if (!line.startsWith("|")) {
        if (backlog.length > 0) {
          break
        }
        continue
      }
      if (line.includes("---") || line.includes("Ad Group | Current Spend")) {
        continue
      }

      const cells = parseMarkdownTableRow(line)
      if (cells.length < 3) {
        continue
      }

      backlog.push({
        adGroup: cells[0],
        currentSpend: cells[1],
        nextExpansionTerms: cells[2],
      })
    }
  }

  const generatedLine = markdownLines.find((line) => line.startsWith("Generated on "))
  const generatedOn = generatedLine
    ? generatedLine.replace("Generated on ", "").replace(/\.$/, "").trim()
    : null

  return {
    matrix,
    backlog,
    generatedOn,
    metadata: {
      lastSyncTime: metadataJson.lastSyncTime ?? null,
      reportGeneratedAt: metadataJson.reportGeneratedAt ?? null,
      targetingProfile: metadataJson.targetingProfile ?? null,
      requestWindow: metadataJson.requestWindow ?? null,
      apiVersion: metadataJson.apiVersion ?? null,
      targetingConfigPath: metadataJson.targetingConfigPath ?? null,
    },
  }
}
