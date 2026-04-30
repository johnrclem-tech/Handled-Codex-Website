import type { Metadata } from "next"
import { KeywordBubbleChart } from "@/components/internal/keyword-bubble-chart"
import { KeywordGapReportTable } from "@/components/internal/keyword-gap-report-table"
import ApplicationShell from "@/components/shadcn-studio/blocks/application-shell-11"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { getKeywordAdGroupPerformance } from "@/lib/keyword-performance"
import { getKeywordGapReportData } from "@/lib/keyword-gap-report"
import { canonicalForPath } from "@/lib/site-routes"

export const metadata: Metadata = {
  title: "Internal Keyword Performance Analysis | Handled",
  description:
    "Internal dashboard for ad-group keyword quality and available impression analysis.",
  alternates: {
    canonical: canonicalForPath("/internal/keyword-analysis"),
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default async function InternalKeywordAnalysisPage() {
  const [keywordPerformance, gapReport] = await Promise.all([
    getKeywordAdGroupPerformance(),
    getKeywordGapReportData(),
  ])

  return (
    <ApplicationShell
      eyebrow="Google Ads"
      title="Keyword Analysis"
      description="Analyze raw keyword CSV data by ad group, quality score, search impression share, spend, and calculated total available impressions."
    >
      <div className="space-y-10">
        <section>
          <KeywordBubbleChart
            groups={keywordPerformance.groups}
            rawKeywords={keywordPerformance.rawKeywords}
            excludedFromChartCount={keywordPerformance.excludedFromChartCount}
          />
        </section>

        <section className="space-y-6">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-semibold tracking-tight">
              Keyword Gap Report
            </h2>
            <p className="mt-2 text-muted-foreground">
              Planner-enriched recommendation matrix generated from the latest sync.
            </p>
            <div className="mt-3 grid gap-1 text-sm text-muted-foreground sm:grid-cols-2 xl:grid-cols-5">
              <p>Report generated: {gapReport.generatedOn ?? "n/a"}</p>
              <p>Last planner sync: {gapReport.metadata.lastSyncTime ?? "n/a"}</p>
              <p>Targeting profile: {gapReport.metadata.targetingProfile ?? "n/a"}</p>
              <p>Request window: {gapReport.metadata.requestWindow ?? "n/a"}</p>
              <p>API version: {gapReport.metadata.apiVersion ?? "n/a"}</p>
            </div>
          </div>

          <KeywordGapReportTable rows={gapReport.matrix} />
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight">Phase-2 Backlog</h2>
          <div className="mt-3 overflow-x-auto rounded-md border bg-card">
            <Table className="min-w-[900px]">
              <TableHeader className="bg-muted/70">
                <TableRow>
                  <TableHead>Ad Group</TableHead>
                  <TableHead>Current Spend</TableHead>
                  <TableHead>Next Expansion Terms</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {gapReport.backlog.map((row, index) => (
                  <TableRow key={`${row.adGroup}-${index}`}>
                    <TableCell className="align-top font-medium">{row.adGroup}</TableCell>
                    <TableCell className="align-top">{row.currentSpend}</TableCell>
                    <TableCell className="align-top">{row.nextExpansionTerms}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>
      </div>
    </ApplicationShell>
  )
}
