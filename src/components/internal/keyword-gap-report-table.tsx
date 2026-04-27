"use client"

import { useMemo, useState } from "react"
import type { KeywordGapMatrixRow } from "@/lib/keyword-gap-report"

interface KeywordGapReportTableProps {
  rows: KeywordGapMatrixRow[]
}

type SortKey =
  | "adGroup"
  | "priority"
  | "avgMonthlySearches"
  | "competitionIndex"
  | "source"

function priorityRank(priority: string) {
  if (priority === "High") return 3
  if (priority === "Medium") return 2
  return 1
}

export function KeywordGapReportTable({ rows }: KeywordGapReportTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>("avgMonthlySearches")
  const [direction, setDirection] = useState<"asc" | "desc">("desc")
  const [priorityFilter, setPriorityFilter] = useState<"All" | "High" | "Medium" | "Watch">("All")

  const sortedRows = useMemo(() => {
    const filtered = rows.filter((row) =>
      priorityFilter === "All" ? true : row.priority === priorityFilter
    )

    const sorted = [...filtered].sort((left, right) => {
      if (sortKey === "priority") {
        return priorityRank(left.priority) - priorityRank(right.priority)
      }
      if (sortKey === "avgMonthlySearches") {
        return left.avgMonthlySearches - right.avgMonthlySearches
      }
      if (sortKey === "competitionIndex") {
        const leftValue = Number.parseInt(left.competitionIndex, 10)
        const rightValue = Number.parseInt(right.competitionIndex, 10)
        return (Number.isFinite(leftValue) ? leftValue : -1) - (Number.isFinite(rightValue) ? rightValue : -1)
      }
      return left[sortKey].localeCompare(right[sortKey])
    })

    return direction === "desc" ? sorted.reverse() : sorted
  }, [rows, sortKey, direction, priorityFilter])

  function setSort(nextKey: SortKey) {
    if (nextKey === sortKey) {
      setDirection((current) => (current === "desc" ? "asc" : "desc"))
      return
    }
    setSortKey(nextKey)
    setDirection("desc")
  }

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-3 text-sm">
        <span className="text-muted-foreground">Sort:</span>
        <button className="rounded border px-2 py-1 hover:bg-muted" onClick={() => setSort("avgMonthlySearches")}>
          Monthly Searches
        </button>
        <button className="rounded border px-2 py-1 hover:bg-muted" onClick={() => setSort("priority")}>
          Priority
        </button>
        <button className="rounded border px-2 py-1 hover:bg-muted" onClick={() => setSort("competitionIndex")}>
          Competition Index
        </button>
        <button className="rounded border px-2 py-1 hover:bg-muted" onClick={() => setSort("adGroup")}>
          Ad Group
        </button>
        <button className="rounded border px-2 py-1 hover:bg-muted" onClick={() => setSort("source")}>
          Source
        </button>
        <span className="ml-3 text-muted-foreground">Priority filter:</span>
        <select
          className="rounded border bg-background px-2 py-1"
          value={priorityFilter}
          onChange={(event) => setPriorityFilter(event.target.value as "All" | "High" | "Medium" | "Watch")}
        >
          <option value="All">All</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Watch">Watch</option>
        </select>
      </div>

      <div className="overflow-x-auto rounded-xl border border-border bg-card">
        <table className="min-w-[1500px] w-full text-left text-sm">
          <thead className="bg-muted/70 text-xs uppercase tracking-wide text-muted-foreground">
            <tr>
              <th className="px-4 py-3">Ad Group</th>
              <th className="px-4 py-3">Missing Term</th>
              <th className="px-4 py-3">Why It Belongs</th>
              <th className="px-4 py-3">Priority</th>
              <th className="px-4 py-3">Suggested Match Type</th>
              <th className="px-4 py-3">Source</th>
              <th className="px-4 py-3">Avg Monthly Searches</th>
              <th className="px-4 py-3">Competition</th>
              <th className="px-4 py-3">Competition Index</th>
              <th className="px-4 py-3">Top of Page Bid Range</th>
              <th className="px-4 py-3">Notes / Negatives</th>
            </tr>
          </thead>
          <tbody>
            {sortedRows.map((row, index) => (
              <tr key={`${row.adGroup}-${row.missingTerm}-${index}`} className="border-t border-border">
                <td className="px-4 py-3 align-top font-medium">{row.adGroup}</td>
                <td className="px-4 py-3 align-top">{row.missingTerm}</td>
                <td className="px-4 py-3 align-top">{row.whyItBelongs}</td>
                <td className="px-4 py-3 align-top">{row.priority}</td>
                <td className="px-4 py-3 align-top">{row.suggestedMatchType}</td>
                <td className="px-4 py-3 align-top">{row.source}</td>
                <td className="px-4 py-3 align-top">{row.avgMonthlySearches.toLocaleString("en-US")}</td>
                <td className="px-4 py-3 align-top">{row.competition}</td>
                <td className="px-4 py-3 align-top">{row.competitionIndex}</td>
                <td className="px-4 py-3 align-top">{row.topOfPageBidRange}</td>
                <td className="px-4 py-3 align-top">{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
