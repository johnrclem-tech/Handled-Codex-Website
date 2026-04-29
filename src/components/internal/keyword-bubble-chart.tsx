"use client"

import { useMemo, useRef, useState } from "react"
import type { AdGroupPerformance } from "@/lib/keyword-performance"

interface KeywordBubbleChartProps {
  groups: AdGroupPerformance[]
}

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

export function KeywordBubbleChart({ groups }: KeywordBubbleChartProps) {
  const [activeGroup, setActiveGroup] = useState<AdGroupPerformance | null>(null)
  const [tooltip, setTooltip] = useState<{
    group: AdGroupPerformance
    x: number
    y: number
  } | null>(null)
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
    const yMax = Math.max(...yValues, 1)
    const spendMax = Math.max(...spendValues, 1)

    return { withQuality, xMin, xMax, yMax, spendMax }
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
    (1 - availableImpressions / Math.max(chart.yMax, 0.0001)) * plotHeight

  const toRadius = (spend: number) => {
    const minRadius = 12
    const maxRadius = 42
    const normalized = Math.sqrt(spend / Math.max(chart.spendMax, 0.0001))
    return minRadius + normalized * (maxRadius - minRadius)
  }

  const yTicks = Array.from({ length: 6 }, (_, index) => (chart.yMax / 5) * index)
  const xTicks = Array.from(
    { length: Math.max(2, Math.ceil(chart.xMax) - Math.floor(chart.xMin) + 1) },
    (_, index) => Math.floor(chart.xMin) + index
  ).filter((tick) => tick <= Math.ceil(chart.xMax))

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
      groups
        .flatMap((group) => group.keywords)
        .sort((left, right) => left.sourceOrder - right.sourceOrder),
    [groups]
  )

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
                  {group.adGroup}
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
            Total Available Impressions
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
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            {rawKeywordRows.length.toLocaleString("en-US")} rows
          </p>
        </div>

        <div className="mt-4 max-h-[520px] overflow-auto rounded-md border border-border">
          <table className="min-w-[1180px] w-full text-left text-sm">
            <thead className="sticky top-0 bg-muted/90 text-xs uppercase tracking-wide text-muted-foreground">
              <tr>
                <th className="px-3 py-2">Keyword</th>
                <th className="px-3 py-2">Ad Group</th>
                <th className="px-3 py-2">Quality Score</th>
                <th className="px-3 py-2">Ad Relevance</th>
                <th className="px-3 py-2">Landing Page Exp.</th>
                <th className="px-3 py-2">Cost</th>
                <th className="px-3 py-2">Impr.</th>
                <th className="px-3 py-2">Search Impr. Share</th>
                <th className="px-3 py-2">Total Available Impr.</th>
              </tr>
            </thead>
            <tbody>
              {rawKeywordRows.map((keyword) => (
                <tr
                  key={`${keyword.sourceOrder}-${keyword.adGroup}-${keyword.keyword}`}
                  className="border-t border-border"
                >
                  <td className="px-3 py-2 align-top">{keyword.keyword}</td>
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
