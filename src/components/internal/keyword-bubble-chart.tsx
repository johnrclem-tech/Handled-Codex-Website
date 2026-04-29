"use client"

import { useMemo, useRef, useState } from "react"
import type {
  AdGroupPerformance,
  KeywordPerformanceRow,
} from "@/lib/keyword-performance"

interface KeywordBubbleChartProps {
  groups: AdGroupPerformance[]
  rawKeywords: KeywordPerformanceRow[]
  excludedFromChartCount: number
}

type RawKeywordSortKey =
  | "sourceOrder"
  | "keyword"
  | "status"
  | "adGroup"
  | "qualityScore"
  | "adRelevance"
  | "landingPageRelevance"
  | "cost"
  | "impressions"
  | "searchImpressionShare"
  | "totalAvailableImpressions"

type SortDirection = "asc" | "desc"

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(value)
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value)
}

function formatPercent(value: number | null) {
  if (value === null) {
    return "n/a"
  }

  return `${(value * 100).toFixed(2)}%`
}

function toLogValue(value: number) {
  return Math.log10(Math.max(value, 1))
}

function formatBubbleLabel(adGroup: string) {
  return adGroup.replace(/\s+Fulfillment\b/gi, "").trim()
}

function uniqueSorted(values: string[]) {
  return Array.from(new Set(values.filter(Boolean))).sort((left, right) =>
    left.localeCompare(right)
  )
}

function compareNullableNumbers(left: number | null, right: number | null) {
  if (left === null && right === null) return 0
  if (left === null) return -1
  if (right === null) return 1
  return left - right
}

export function KeywordBubbleChart({
  groups,
  rawKeywords,
  excludedFromChartCount,
}: KeywordBubbleChartProps) {
  const [activeGroup, setActiveGroup] = useState<AdGroupPerformance | null>(null)
  const [tooltip, setTooltip] = useState<{
    group: AdGroupPerformance
    x: number
    y: number
  } | null>(null)
  const [sortKey, setSortKey] = useState<RawKeywordSortKey>("sourceOrder")
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc")
  const [statusFilters, setStatusFilters] = useState<string[]>([])
  const [adGroupFilters, setAdGroupFilters] = useState<string[]>([])
  const [adRelevanceFilters, setAdRelevanceFilters] = useState<string[]>([])
  const [landingPageFilters, setLandingPageFilters] = useState<string[]>([])
  const [adGroupQuery, setAdGroupQuery] = useState("")
  const chartContainerRef = useRef<HTMLDivElement | null>(null)

  const chart = useMemo(() => {
    const withQuality = groups.filter(
      (group) => group.weightedAverageQualityScore !== null
    )
    const xValues = withQuality.map(
      (group) => group.weightedAverageQualityScore as number
    )
    const yValues = withQuality.map((group) => group.totalAvailableImpressions)
    const spendValues = withQuality.map((group) => group.totalSpend)

    const xMin = Math.max(1, Math.min(...xValues, 5) - 0.5)
    const xMax = Math.min(10, Math.max(...xValues, 8) + 0.5)
    const yMin = Math.max(1, Math.min(...yValues, 1))
    const yMax = Math.max(...yValues, 1)
    const yLogMin = Math.floor(toLogValue(yMin))
    const yLogMax = Math.ceil(toLogValue(yMax))
    const spendMax = Math.max(...spendValues, 1)

    return { withQuality, xMin, xMax, yMax, yLogMin, yLogMax, spendMax }
  }, [groups])

  const width = 980
  const height = 520
  const margin = { top: 20, right: 30, bottom: 60, left: 80 }
  const plotWidth = width - margin.left - margin.right
  const plotHeight = height - margin.top - margin.bottom

  const toX = (qualityScore: number) =>
    margin.left +
    ((qualityScore - chart.xMin) / Math.max(chart.xMax - chart.xMin, 0.0001)) *
      plotWidth

  const toY = (availableImpressions: number) =>
    margin.top +
    (1 -
      (toLogValue(availableImpressions) - chart.yLogMin) /
        Math.max(chart.yLogMax - chart.yLogMin, 0.0001)) *
      plotHeight

  const toRadius = (spend: number) => {
    const minRadius = 12
    const maxRadius = 42
    const normalized = Math.sqrt(spend / Math.max(chart.spendMax, 0.0001))
    return minRadius + normalized * (maxRadius - minRadius)
  }

  const yTicks = Array.from(
    { length: chart.yLogMax - chart.yLogMin + 1 },
    (_, index) => 10 ** (chart.yLogMin + index)
  )
  const xTicks = Array.from(
    { length: Math.max(2, Math.ceil(chart.xMax) - Math.floor(chart.xMin) + 1) },
    (_, index) => Math.floor(chart.xMin) + index
  ).filter((tick) => tick <= chart.xMax)

  const tooltipPosition = (() => {
    if (!tooltip || !chartContainerRef.current) {
      return null
    }

    const width = chartContainerRef.current.clientWidth
    const height = chartContainerRef.current.clientHeight
    const tooltipWidth = 640
    const tooltipHeight = 280
    const x = Math.min(Math.max(tooltip.x, 12), Math.max(12, width - tooltipWidth - 12))
    const y = Math.min(Math.max(tooltip.y, 12), Math.max(12, height - tooltipHeight - 12))

    return { x, y }
  })()

  const rawKeywordRows = useMemo(
    () =>
      rawKeywords
        .filter((keyword) =>
          statusFilters.length === 0 ? true : statusFilters.includes(keyword.status)
        )
        .filter((keyword) =>
          adGroupFilters.length === 0
            ? true
            : adGroupFilters.includes(keyword.adGroup)
        )
        .filter((keyword) =>
          adRelevanceFilters.length === 0
            ? true
            : adRelevanceFilters.includes(keyword.adRelevance)
        )
        .filter((keyword) =>
          landingPageFilters.length === 0
            ? true
            : landingPageFilters.includes(keyword.landingPageRelevance)
        )
        .sort((left, right) => {
          let result = 0

          if (sortKey === "qualityScore") {
            result = compareNullableNumbers(left.qualityScore, right.qualityScore)
          } else if (
            sortKey === "sourceOrder" ||
            sortKey === "cost" ||
            sortKey === "impressions" ||
            sortKey === "totalAvailableImpressions"
          ) {
            result = left[sortKey] - right[sortKey]
          } else if (sortKey === "searchImpressionShare") {
            result = compareNullableNumbers(
              left.searchImpressionShare,
              right.searchImpressionShare
            )
          } else {
            result = left[sortKey].localeCompare(right[sortKey])
          }

          if (result === 0) {
            result = left.sourceOrder - right.sourceOrder
          }

          return sortDirection === "asc" ? result : -result
        }),
    [
      rawKeywords,
      statusFilters,
      adGroupFilters,
      adRelevanceFilters,
      landingPageFilters,
      sortKey,
      sortDirection,
    ]
  )

  const filterOptions = useMemo(
    () => ({
      statuses: uniqueSorted(rawKeywords.map((keyword) => keyword.status)),
      adGroups: uniqueSorted(rawKeywords.map((keyword) => keyword.adGroup)),
      adRelevance: uniqueSorted(rawKeywords.map((keyword) => keyword.adRelevance)),
      landingPages: uniqueSorted(
        rawKeywords.map((keyword) => keyword.landingPageRelevance)
      ),
    }),
    [rawKeywords]
  )

  const adGroupComboOptions = useMemo(
    () =>
      filterOptions.adGroups
        .filter((adGroup) => !adGroupFilters.includes(adGroup))
        .filter((adGroup) =>
          adGroup.toLowerCase().includes(adGroupQuery.trim().toLowerCase())
        )
        .slice(0, 25),
    [adGroupFilters, adGroupQuery, filterOptions.adGroups]
  )

  function setRawKeywordSort(nextSortKey: RawKeywordSortKey) {
    if (nextSortKey === sortKey) {
      setSortDirection((current) => (current === "asc" ? "desc" : "asc"))
      return
    }

    setSortKey(nextSortKey)
    setSortDirection("asc")
  }

  function sortLabel(label: string, key: RawKeywordSortKey) {
    if (key !== sortKey) {
      return label
    }

    return `${label} (${sortDirection})`
  }

  function toggleFilterValue(
    value: string,
    selectedValues: string[],
    setSelectedValues: (values: string[]) => void
  ) {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((selected) => selected !== value))
      return
    }

    setSelectedValues([...selectedValues, value])
  }

  function MultiFilter({
    label,
    selectedValues,
    options,
    onChange,
  }: {
    label: string
    selectedValues: string[]
    options: string[]
    onChange: (values: string[]) => void
  }) {
    const summary =
      selectedValues.length === 0
        ? "All"
        : `${selectedValues.length} selected`

    return (
      <details className="group rounded-md border border-border bg-background text-sm">
        <summary
          className="flex min-h-9 cursor-pointer list-none items-center justify-between gap-3 px-3 py-2"
        >
          <span>
            <span className="block text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {label}
            </span>
            <span>{summary}</span>
          </span>
          <span className="text-muted-foreground">v</span>
        </summary>
        <div className="max-h-72 overflow-auto border-t border-border p-2">
          <button
            className="mb-2 w-full rounded border border-border px-2 py-1 text-left text-xs text-muted-foreground hover:bg-muted"
            onClick={() => onChange([])}
            type="button"
          >
            Clear filter
          </button>
          {options.map((option) => (
            <label
              className="flex items-start gap-2 rounded px-2 py-1.5 hover:bg-muted"
              key={`${label}-${option}`}
            >
              <input
                checked={selectedValues.includes(option)}
                className="mt-0.5"
                onChange={() =>
                  toggleFilterValue(option, selectedValues, onChange)
                }
                type="checkbox"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </details>
    )
  }

  function addAdGroupFilter(adGroup: string) {
    const trimmedAdGroup = adGroup.trim()
    if (!trimmedAdGroup || !filterOptions.adGroups.includes(trimmedAdGroup)) {
      return
    }

    if (!adGroupFilters.includes(trimmedAdGroup)) {
      setAdGroupFilters([...adGroupFilters, trimmedAdGroup])
    }
    setAdGroupQuery("")
  }

  function ComboFilter({
    label,
    query,
    selectedValues,
    options,
    onQueryChange,
    onAdd,
    onRemove,
    onClear,
  }: {
    label: string
    query: string
    selectedValues: string[]
    options: string[]
    onQueryChange: (value: string) => void
    onAdd: (value: string) => void
    onRemove: (value: string) => void
    onClear: () => void
  }) {
    return (
      <div className="rounded-md border border-border bg-background p-3 text-sm">
        <label className="grid gap-1">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {label}
          </span>
          <input
            className="h-9 rounded-md border border-border bg-background px-2 text-sm"
            list={`${label}-options`}
            onChange={(event) => onQueryChange(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault()
                onAdd(query)
              }
            }}
            placeholder="Search ad groups"
            value={query}
          />
          <datalist id={`${label}-options`}>
            {options.map((option) => (
              <option key={`${label}-${option}`} value={option} />
            ))}
          </datalist>
        </label>

        <div className="mt-2 flex gap-2">
          <button
            className="rounded border border-border px-2 py-1 text-xs hover:bg-muted"
            onClick={() => onAdd(query)}
            type="button"
          >
            Add
          </button>
          <button
            className="rounded border border-border px-2 py-1 text-xs text-muted-foreground hover:bg-muted"
            onClick={onClear}
            type="button"
          >
            Clear
          </button>
        </div>

        <div className="mt-3 flex max-h-28 flex-wrap gap-2 overflow-auto">
          {selectedValues.length === 0 ? (
            <span className="text-xs text-muted-foreground">All ad groups</span>
          ) : (
            selectedValues.map((value) => (
              <button
                className="rounded-full border border-border px-2 py-1 text-xs hover:bg-muted"
                key={`selected-${value}`}
                onClick={() => onRemove(value)}
                type="button"
              >
                {value} x
              </button>
            ))
          )}
        </div>
      </div>
    )
  }

  function SortHeader({ label, sortKey }: { label: string; sortKey: RawKeywordSortKey }) {
    return (
      <button
        className="text-left font-semibold hover:text-foreground"
        onClick={() => setRawKeywordSort(sortKey)}
        type="button"
      >
        {sortLabel(label, sortKey)}
      </button>
    )
  }

  return (
    <div className="space-y-8">
      <div
        ref={chartContainerRef}
        className="relative overflow-x-auto rounded-xl border border-border bg-card p-4"
      >
        <svg
          role="img"
          aria-label="Bubble chart of ad group quality and available impressions"
          viewBox={`0 0 ${width} ${height}`}
          className="h-auto min-w-[920px] w-full"
          onMouseLeave={() => setTooltip(null)}
        >
          <line
            x1={margin.left}
            x2={width - margin.right}
            y1={height - margin.bottom}
            y2={height - margin.bottom}
            className="stroke-border"
          />
          <line
            x1={margin.left}
            x2={margin.left}
            y1={margin.top}
            y2={height - margin.bottom}
            className="stroke-border"
          />

          {yTicks.map((tick) => {
            const y = toY(tick)
            return (
              <g key={`y-${tick}`}>
                <line
                  x1={margin.left}
                  x2={width - margin.right}
                  y1={y}
                  y2={y}
                  className="stroke-border/50"
                  strokeDasharray="4 4"
                />
                <text
                  x={margin.left - 10}
                  y={y + 4}
                  textAnchor="end"
                  className="fill-muted-foreground text-[11px]"
                >
                  {formatNumber(tick)}
                </text>
              </g>
            )
          })}

          {xTicks.map((tick) => {
            const x = toX(tick)
            return (
              <g key={`x-${tick}`}>
                <line
                  x1={x}
                  x2={x}
                  y1={margin.top}
                  y2={height - margin.bottom}
                  className="stroke-border/30"
                  strokeDasharray="4 4"
                />
                <text
                  x={x}
                  y={height - margin.bottom + 20}
                  textAnchor="middle"
                  className="fill-muted-foreground text-[11px]"
                >
                  {tick}
                </text>
              </g>
            )
          })}

          {chart.withQuality.map((group, index) => {
            const x = toX(group.weightedAverageQualityScore as number)
            const y = toY(group.totalAvailableImpressions)
            const radius = toRadius(group.totalSpend)
            const isActive = activeGroup?.adGroup === group.adGroup
            const hue = (index * 47) % 360

            return (
              <g
                key={group.adGroup}
                className="cursor-pointer"
                onMouseEnter={(event) => {
                  setActiveGroup(group)
                  if (!chartContainerRef.current) {
                    return
                  }

                  const rect = chartContainerRef.current.getBoundingClientRect()
                  setTooltip({
                    group,
                    x: event.clientX - rect.left + 14,
                    y: event.clientY - rect.top + 14,
                  })
                }}
                onMouseMove={(event) => {
                  if (!chartContainerRef.current) {
                    return
                  }

                  const rect = chartContainerRef.current.getBoundingClientRect()
                  setTooltip({
                    group,
                    x: event.clientX - rect.left + 14,
                    y: event.clientY - rect.top + 14,
                  })
                }}
                onFocus={() => setActiveGroup(group)}
              >
                <circle
                  cx={x}
                  cy={y}
                  r={radius}
                  fill={`hsl(${hue} 80% 52% / 0.38)`}
                  stroke={`hsl(${hue} 85% 40% / ${isActive ? "1" : "0.7"})`}
                  strokeWidth={isActive ? 3 : 2}
                />
                <text
                  x={x}
                  y={y + 4}
                  textAnchor="middle"
                  className="pointer-events-none fill-foreground text-[10px] font-semibold"
                >
                  {formatBubbleLabel(group.adGroup)}
                </text>
              </g>
            )
          })}

          <text
            x={width / 2}
            y={height - 14}
            textAnchor="middle"
            className="fill-muted-foreground text-xs"
          >
            Weighted Avg Quality Score (weighted by total available impressions)
          </text>
          <text
            x={20}
            y={height / 2}
            textAnchor="middle"
            transform={`rotate(-90 20 ${height / 2})`}
            className="fill-muted-foreground text-xs"
          >
            Total Available Impressions (log scale)
          </text>
        </svg>

        {tooltip && tooltipPosition ? (
          <div
            className="pointer-events-none absolute z-20 w-[640px] rounded-lg border border-border bg-background/95 p-4 shadow-xl backdrop-blur-sm"
            style={{ left: tooltipPosition.x, top: tooltipPosition.y }}
          >
            <p className="text-sm font-semibold">{tooltip.group.adGroup}</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Top 6 keywords by available impressions
            </p>

            <div className="mt-3 overflow-hidden rounded-md border border-border">
              <table className="min-w-full text-left text-xs">
                <thead className="bg-muted/70 text-muted-foreground">
                  <tr>
                    <th className="px-2 py-2">Keyword</th>
                    <th className="px-2 py-2">Avail. Impr.</th>
                    <th className="px-2 py-2">Quality</th>
                    <th className="px-2 py-2">Ad Relevance</th>
                    <th className="px-2 py-2">Landing Relevance</th>
                  </tr>
                </thead>
                <tbody>
                  {tooltip.group.keywords.slice(0, 6).map((keyword, index) => (
                    <tr
                      key={`${tooltip.group.adGroup}-${keyword.keyword}-${index}-hover`}
                      className="border-t border-border"
                    >
                      <td className="px-2 py-2">{keyword.keyword}</td>
                      <td className="px-2 py-2">
                        {formatNumber(keyword.totalAvailableImpressions)}
                      </td>
                      <td className="px-2 py-2">
                        {keyword.qualityScore !== null ? keyword.qualityScore : "n/a"}
                      </td>
                      <td className="px-2 py-2">{keyword.adRelevance}</td>
                      <td className="px-2 py-2">{keyword.landingPageRelevance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : null}
      </div>

      <div className="rounded-xl border border-border bg-card p-5">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="text-base font-semibold">Raw Keyword CSV Data</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Original keyword rows with calculated total available impressions.
              Not eligible keywords are shown here, but excluded from the chart.
            </p>
          </div>
          <div className="text-sm text-muted-foreground sm:text-right">
            <p>{rawKeywordRows.length.toLocaleString("en-US")} rows</p>
            <p>{excludedFromChartCount.toLocaleString("en-US")} excluded from chart</p>
          </div>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <MultiFilter
            label="Status"
            selectedValues={statusFilters}
            options={filterOptions.statuses}
            onChange={setStatusFilters}
          />
          <ComboFilter
            label="Ad Group"
            query={adGroupQuery}
            selectedValues={adGroupFilters}
            options={adGroupComboOptions}
            onQueryChange={setAdGroupQuery}
            onAdd={addAdGroupFilter}
            onRemove={(value) =>
              setAdGroupFilters(
                adGroupFilters.filter((adGroup) => adGroup !== value)
              )
            }
            onClear={() => {
              setAdGroupFilters([])
              setAdGroupQuery("")
            }}
          />
          <MultiFilter
            label="Ad Relevance"
            selectedValues={adRelevanceFilters}
            options={filterOptions.adRelevance}
            onChange={setAdRelevanceFilters}
          />
          <MultiFilter
            label="Landing Page Exp."
            selectedValues={landingPageFilters}
            options={filterOptions.landingPages}
            onChange={setLandingPageFilters}
          />
        </div>

        <div className="mt-4 max-h-[520px] overflow-auto rounded-md border border-border">
          <table className="min-w-[1280px] w-full text-left text-sm">
            <thead className="sticky top-0 bg-muted/90 text-xs uppercase tracking-wide text-muted-foreground">
              <tr>
                <th className="px-3 py-2">
                  <SortHeader label="Keyword" sortKey="keyword" />
                </th>
                <th className="px-3 py-2">
                  <SortHeader label="Status" sortKey="status" />
                </th>
                <th className="px-3 py-2">
                  <SortHeader label="Ad Group" sortKey="adGroup" />
                </th>
                <th className="px-3 py-2">
                  <SortHeader label="Quality Score" sortKey="qualityScore" />
                </th>
                <th className="px-3 py-2">
                  <SortHeader label="Ad Relevance" sortKey="adRelevance" />
                </th>
                <th className="px-3 py-2">
                  <SortHeader
                    label="Landing Page Exp."
                    sortKey="landingPageRelevance"
                  />
                </th>
                <th className="px-3 py-2">
                  <SortHeader label="Cost" sortKey="cost" />
                </th>
                <th className="px-3 py-2">
                  <SortHeader label="Impr." sortKey="impressions" />
                </th>
                <th className="px-3 py-2">
                  <SortHeader
                    label="Search Impr. Share"
                    sortKey="searchImpressionShare"
                  />
                </th>
                <th className="px-3 py-2">
                  <SortHeader
                    label="Total Available Impr."
                    sortKey="totalAvailableImpressions"
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              {rawKeywordRows.map((keyword) => (
                <tr
                  key={`${keyword.sourceOrder}-${keyword.adGroup}-${keyword.keyword}`}
                  className="border-t border-border"
                >
                  <td className="px-3 py-2 align-top">{keyword.keyword}</td>
                  <td className="px-3 py-2 align-top">{keyword.status}</td>
                  <td className="px-3 py-2 align-top">{keyword.adGroup}</td>
                  <td className="px-3 py-2 align-top">
                    {keyword.qualityScore ?? "n/a"}
                  </td>
                  <td className="px-3 py-2 align-top">{keyword.adRelevance}</td>
                  <td className="px-3 py-2 align-top">
                    {keyword.landingPageRelevance}
                  </td>
                  <td className="px-3 py-2 align-top">
                    {formatCurrency(keyword.cost)}
                  </td>
                  <td className="px-3 py-2 align-top">
                    {formatNumber(keyword.impressions)}
                  </td>
                  <td className="px-3 py-2 align-top">
                    {formatPercent(keyword.searchImpressionShare)}
                  </td>
                  <td className="px-3 py-2 align-top font-medium">
                    {formatNumber(keyword.totalAvailableImpressions)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.1fr_1fr]">
        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="text-base font-semibold">Ad Group Summary</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Bubble size is total spend. Hover a bubble to inspect keyword relevance.
          </p>

          {activeGroup ? (
            <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div>
                <dt className="text-muted-foreground">Ad Group</dt>
                <dd className="font-medium">{activeGroup.adGroup}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Weighted Avg QS</dt>
                <dd className="font-medium">
                  {(activeGroup.weightedAverageQualityScore ?? 0).toFixed(2)}
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Total Available Impr.</dt>
                <dd className="font-medium">
                  {formatNumber(activeGroup.totalAvailableImpressions)}
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Spend</dt>
                <dd className="font-medium">{formatCurrency(activeGroup.totalSpend)}</dd>
              </div>
            </dl>
          ) : (
            <p className="mt-5 text-sm text-muted-foreground">
              Hover over a bubble to view ad-group and keyword details.
            </p>
          )}
        </div>

        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="text-base font-semibold">Keywords and Relevance</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Showing keyword-level ad relevance and landing page relevance.
          </p>

          {activeGroup ? (
            <div className="mt-4 max-h-[360px] overflow-auto rounded-md border border-border">
              <table className="min-w-full text-left text-sm">
                <thead className="sticky top-0 bg-muted/70 text-xs uppercase tracking-wide text-muted-foreground">
                  <tr>
                    <th className="px-3 py-2">Keyword</th>
                    <th className="px-3 py-2">Ad Relevance</th>
                    <th className="px-3 py-2">Landing Relevance</th>
                    <th className="px-3 py-2">Avail. Impr.</th>
                    <th className="px-3 py-2">Impr. Share</th>
                  </tr>
                </thead>
                <tbody>
                  {activeGroup.keywords.map((keyword, index) => (
                    <tr
                      key={`${activeGroup.adGroup}-${keyword.keyword}-${index}`}
                      className="border-t border-border"
                    >
                      <td className="px-3 py-2 align-top">{keyword.keyword}</td>
                      <td className="px-3 py-2">{keyword.adRelevance}</td>
                      <td className="px-3 py-2">{keyword.landingPageRelevance}</td>
                      <td className="px-3 py-2">
                        {formatNumber(keyword.totalAvailableImpressions)}
                      </td>
                      <td className="px-3 py-2">
                        {formatPercent(keyword.searchImpressionShare)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="mt-5 text-sm text-muted-foreground">
              Hover over an ad group bubble to load its keywords.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
