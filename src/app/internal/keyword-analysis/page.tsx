import type { Metadata } from "next"
import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"
import { KeywordBubbleChart } from "@/components/internal/keyword-bubble-chart"
import { KeywordGapReportTable } from "@/components/internal/keyword-gap-report-table"
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
  const [groups, gapReport] = await Promise.all([
    getKeywordAdGroupPerformance(),
    getKeywordGapReportData(),
  ])

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-24 sm:pt-28 lg:px-8">
        <div className="max-w-3xl">
          <p className="section-label">Internal Use</p>
          <h1 className="section-heading mt-2">
            Keyword Performance Bubble Analysis by Ad Group
          </h1>
          <p className="section-description mt-3">
            X-axis: weighted average Quality Score by ad group. Y-axis: total
            available impressions (impressions / search impression share). Bubble
            size: total spend.
          </p>
        </div>

        <div className="mt-10">
          <KeywordBubbleChart groups={groups} />
        </div>

        <div className="mt-14 space-y-6">
          <div className="max-w-4xl">
            <h2 className="section-heading">Keyword Gap Report (Top-Spend Ad Groups)</h2>
            <p className="section-description mt-3">
              Planner-enriched recommendation matrix generated from the latest sync.
            </p>
            <div className="mt-3 grid gap-1 text-sm text-muted-foreground">
              <p>Report generated: {gapReport.generatedOn ?? "n/a"}</p>
              <p>Last planner sync: {gapReport.metadata.lastSyncTime ?? "n/a"}</p>
              <p>Targeting profile: {gapReport.metadata.targetingProfile ?? "n/a"}</p>
              <p>Request window: {gapReport.metadata.requestWindow ?? "n/a"}</p>
              <p>API version: {gapReport.metadata.apiVersion ?? "n/a"}</p>
            </div>
          </div>

          <KeywordGapReportTable rows={gapReport.matrix} />

          <div>
            <h3 className="text-xl font-semibold tracking-tight">Phase-2 Backlog</h3>
            <div className="mt-3 overflow-x-auto rounded-xl border border-border bg-card">
              <table className="min-w-[900px] w-full text-left text-sm">
                <thead className="bg-muted/70 text-xs uppercase tracking-wide text-muted-foreground">
                  <tr>
                    <th className="px-4 py-3">Ad Group</th>
                    <th className="px-4 py-3">Current Spend</th>
                    <th className="px-4 py-3">Next Expansion Terms</th>
                  </tr>
                </thead>
                <tbody>
                  {gapReport.backlog.map((row, index) => (
                    <tr key={`${row.adGroup}-${index}`} className="border-t border-border">
                      <td className="px-4 py-3 align-top font-medium">{row.adGroup}</td>
                      <td className="px-4 py-3 align-top">{row.currentSpend}</td>
                      <td className="px-4 py-3 align-top">{row.nextExpansionTerms}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
