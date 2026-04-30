"use client"

import { useMemo, useRef, useState } from "react"
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react"
import type {
  AdGroupPerformance,
  KeywordPerformanceRow,
} from "@/lib/keyword-performance"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MultiSelectCombobox } from "@/components/ui/multi-select-combobox"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

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

  function setRawKeywordSort(nextSortKey: RawKeywordSortKey) {
    if (nextSortKey === sortKey) {
      setSortDirection((current) => (current === "asc" ? "desc" : "asc"))
      return
    }

    setSortKey(nextSortKey)
    setSortDirection("asc")
  }

  function SortHeader({
    label,
    columnKey,
  }: {
    label: string
    columnKey: RawKeywordSortKey
  }) {
    const active = columnKey === sortKey
    const Icon =
      !active
        ? ArrowUpDown
        : sortDirection === "asc"
          ? ArrowUp
          : ArrowDown

    return (
      <Button
        className="h-auto justify-start px-0 py-0 text-left text-xs font-semibold uppercase tracking-wide hover:bg-transparent"
        onClick={() => setRawKeywordSort(columnKey)}
        size="sm"
        type="button"
        variant="ghost"
      >
        {label}
        <Icon className={active ? "h-3.5 w-3.5" : "h-3.5 w-3.5 opacity-45"} />
      </Button>
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
              <Table className="text-xs">
                <TableHeader className="bg-muted/70">
                  <TableRow>
                    <TableHead className="h-8 px-2 py-2">Keyword</TableHead>
                    <TableHead className="h-8 px-2 py-2">Avail. Impr.</TableHead>
                    <TableHead className="h-8 px-2 py-2">Quality</TableHead>
                    <TableHead className="h-8 px-2 py-2">Ad Relevance</TableHead>
                    <TableHead className="h-8 px-2 py-2">
                      Landing Relevance
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tooltip.group.keywords.slice(0, 6).map((keyword, index) => (
                    <TableRow
                      key={`${tooltip.group.adGroup}-${keyword.keyword}-${index}-hover`}
                    >
                      <TableCell className="px-2 py-2">{keyword.keyword}</TableCell>
                      <TableCell className="px-2 py-2">
                        {formatNumber(keyword.totalAvailableImpressions)}
                      </TableCell>
                      <TableCell className="px-2 py-2">
                        {keyword.qualityScore !== null ? keyword.qualityScore : "n/a"}
                      </TableCell>
                      <TableCell className="px-2 py-2">
                        {keyword.adRelevance}
                      </TableCell>
                      <TableCell className="px-2 py-2">
                        {keyword.landingPageRelevance}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        ) : null}
      </div>

      <Card>
        <CardHeader className="gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <CardTitle className="text-base">Raw Keyword CSV Data</CardTitle>
            <CardDescription className="mt-1">
              Original keyword rows with calculated total available impressions.
              Not eligible keywords are shown here, but excluded from the chart.
            </CardDescription>
          </div>
          <div className="text-sm text-muted-foreground sm:text-right">
            <p>{rawKeywordRows.length.toLocaleString("en-US")} rows</p>
            <p>{excludedFromChartCount.toLocaleString("en-US")} excluded from chart</p>
          </div>
        </CardHeader>

        <CardContent>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            <MultiSelectCombobox
              label="Status"
              selectedValues={statusFilters}
              options={filterOptions.statuses}
              onChange={setStatusFilters}
              placeholder="Search statuses"
            />
            <MultiSelectCombobox
              label="Ad Group"
              selectedValues={adGroupFilters}
              options={filterOptions.adGroups}
              onChange={setAdGroupFilters}
              placeholder="Search ad groups"
            />
            <MultiSelectCombobox
              label="Ad Relevance"
              selectedValues={adRelevanceFilters}
              options={filterOptions.adRelevance}
              onChange={setAdRelevanceFilters}
              placeholder="Search relevance"
            />
            <MultiSelectCombobox
              label="Landing Page Exp."
              selectedValues={landingPageFilters}
              options={filterOptions.landingPages}
              onChange={setLandingPageFilters}
              placeholder="Search landing page exp."
            />
          </div>

          <div className="mt-4 max-h-[520px] overflow-auto rounded-md border border-border">
            <Table className="min-w-[1280px]">
              <TableHeader className="sticky top-0 z-10 bg-muted/95">
                <TableRow>
                  <TableHead>
                    <SortHeader label="Keyword" columnKey="keyword" />
                  </TableHead>
                  <TableHead>
                    <SortHeader label="Status" columnKey="status" />
                  </TableHead>
                  <TableHead>
                    <SortHeader label="Ad Group" columnKey="adGroup" />
                  </TableHead>
                  <TableHead>
                    <SortHeader label="Quality Score" columnKey="qualityScore" />
                  </TableHead>
                  <TableHead>
                    <SortHeader label="Ad Relevance" columnKey="adRelevance" />
                  </TableHead>
                  <TableHead>
                    <SortHeader
                      label="Landing Page Exp."
                      columnKey="landingPageRelevance"
                    />
                  </TableHead>
                  <TableHead>
                    <SortHeader label="Cost" columnKey="cost" />
                  </TableHead>
                  <TableHead>
                    <SortHeader label="Impr." columnKey="impressions" />
                  </TableHead>
                  <TableHead>
                    <SortHeader
                      label="Search Impr. Share"
                      columnKey="searchImpressionShare"
                    />
                  </TableHead>
                  <TableHead>
                    <SortHeader
                      label="Total Available Impr."
                      columnKey="totalAvailableImpressions"
                    />
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rawKeywordRows.map((keyword) => (
                  <TableRow
                    key={`${keyword.sourceOrder}-${keyword.adGroup}-${keyword.keyword}`}
                  >
                    <TableCell className="align-top">{keyword.keyword}</TableCell>
                    <TableCell className="align-top">{keyword.status}</TableCell>
                    <TableCell className="align-top">{keyword.adGroup}</TableCell>
                    <TableCell className="align-top">
                      {keyword.qualityScore ?? "n/a"}
                    </TableCell>
                    <TableCell className="align-top">
                      {keyword.adRelevance}
                    </TableCell>
                    <TableCell className="align-top">
                      {keyword.landingPageRelevance}
                    </TableCell>
                    <TableCell className="align-top">
                      {formatCurrency(keyword.cost)}
                    </TableCell>
                    <TableCell className="align-top">
                      {formatNumber(keyword.impressions)}
                    </TableCell>
                    <TableCell className="align-top">
                      {formatPercent(keyword.searchImpressionShare)}
                    </TableCell>
                    <TableCell className="align-top font-medium">
                      {formatNumber(keyword.totalAvailableImpressions)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 lg:grid-cols-[1.1fr_1fr]">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Ad Group Summary</CardTitle>
            <CardDescription>
            Bubble size is total spend. Hover a bubble to inspect keyword relevance.
            </CardDescription>
          </CardHeader>

          <CardContent>
            {activeGroup ? (
              <dl className="grid grid-cols-2 gap-3 text-sm">
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
              <p className="text-sm text-muted-foreground">
                Hover over a bubble to view ad-group and keyword details.
              </p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Keywords and Relevance</CardTitle>
            <CardDescription>
              Showing keyword-level ad relevance and landing page relevance.
            </CardDescription>
          </CardHeader>

          <CardContent>
            {activeGroup ? (
              <div className="max-h-[360px] overflow-auto rounded-md border border-border">
                <Table>
                  <TableHeader className="sticky top-0 z-10 bg-muted/95">
                    <TableRow>
                      <TableHead>Keyword</TableHead>
                      <TableHead>Ad Relevance</TableHead>
                      <TableHead>Landing Relevance</TableHead>
                      <TableHead>Avail. Impr.</TableHead>
                      <TableHead>Impr. Share</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {activeGroup.keywords.map((keyword, index) => (
                      <TableRow
                        key={`${activeGroup.adGroup}-${keyword.keyword}-${index}`}
                      >
                        <TableCell className="align-top">
                          {keyword.keyword}
                        </TableCell>
                        <TableCell>{keyword.adRelevance}</TableCell>
                        <TableCell>{keyword.landingPageRelevance}</TableCell>
                        <TableCell>
                          {formatNumber(keyword.totalAvailableImpressions)}
                        </TableCell>
                        <TableCell>
                          {formatPercent(keyword.searchImpressionShare)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                Hover over an ad group bubble to load its keywords.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
