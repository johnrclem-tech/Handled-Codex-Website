import { readFile } from "node:fs/promises"
import path from "node:path"

export const KEYWORDS_CSV_PATH = path.join(process.cwd(), "src/content/keywords-clem.csv")

export function parseCsvLine(line) {
  const values = []
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
      values.push(current)
      current = ""
      continue
    }

    current += character
  }

  values.push(current)
  return values
}

export function parseNumber(value) {
  if (!value) {
    return 0
  }

  const normalized = String(value).replace(/[$,%\s,]/g, "")
  const parsed = Number.parseFloat(normalized)
  return Number.isFinite(parsed) ? parsed : 0
}

export function normalizeKeyword(keyword) {
  return keyword
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

export async function readKeywordRows() {
  const raw = await readFile(KEYWORDS_CSV_PATH, "utf8")
  const lines = raw
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0)

  const headerIndex = lines.findIndex((line) => line.startsWith("Search keyword,"))
  if (headerIndex === -1) {
    throw new Error("Could not find keyword header row in src/content/keywords-clem.csv")
  }

  const headers = parseCsvLine(lines[headerIndex])
  const idx = {
    keyword: headers.indexOf("Search keyword"),
    campaign: headers.indexOf("Campaign"),
    adGroup: headers.indexOf("Ad group"),
    cost: headers.indexOf("Cost"),
  }
  if (Object.values(idx).some((position) => position < 0)) {
    throw new Error("Missing one or more required columns: Search keyword/Campaign/Ad group/Cost")
  }

  return lines.slice(headerIndex + 1).map((line) => {
    const cells = parseCsvLine(line)
    return {
      keyword: cells[idx.keyword]?.trim() ?? "",
      keywordNormalized: normalizeKeyword(cells[idx.keyword]?.trim() ?? ""),
      campaign: cells[idx.campaign]?.trim() ?? "",
      adGroup: cells[idx.adGroup]?.trim() ?? "",
      cost: parseNumber(cells[idx.cost] ?? "0"),
    }
  })
}
