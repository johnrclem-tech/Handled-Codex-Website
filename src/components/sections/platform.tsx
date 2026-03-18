import React from "react"
import { Badge } from "@/components/ui/badge"
import {
  HiOutlineChartBar,
  HiOutlineBell,
  HiOutlineCog6Tooth,
  HiOutlineShieldCheck,
} from "react-icons/hi2"
import { TrackingExperience } from "@/components/icons/tracking-experience"
import { ReturnsExperience } from "@/components/icons/returns-experience"

export function Platform() {
  return (
    <section id="platform" className="py-24 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <p className="text-sm font-semibold text-blue-600 mb-3">Platform</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Built like software. Runs like magic.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real-time visibility, automated workflows, and performance analytics
            that put you in control of your supply chain.
          </p>
        </div>

        {/* Feature row 1 - Tracking */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <Badge variant="secondary" className="mb-4">Customer Tracking</Badge>
            <h3 className="text-2xl font-bold mb-4">
              Branded tracking your customers love
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Give your customers a premium post-purchase experience with real-time tracking
              pages that match your brand. Reduce &quot;where is my order&quot; tickets by up to 60%.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <FeaturePill icon={HiOutlineBell} label="Real-time notifications" />
              <FeaturePill icon={HiOutlineChartBar} label="Delivery analytics" />
              <FeaturePill icon={HiOutlineCog6Tooth} label="Custom branding" />
              <FeaturePill icon={HiOutlineShieldCheck} label="Fraud filtering" />
            </div>
          </div>
          <div>
            <TrackingExperience />
          </div>
        </div>

        {/* Feature row 2 - Returns */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <ReturnsExperience />
          </div>
          <div className="order-1 lg:order-2">
            <Badge variant="secondary" className="mb-4">Returns Portal</Badge>
            <h3 className="text-2xl font-bold mb-4">
              Returns that feel effortless
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A seamless returns experience that keeps customers coming back.
              Branded portal, instant labels, and automatic restocking — all handled for you.
            </p>
            <div className="space-y-3">
              <ProcessStep step="1" label="Customer initiates return through branded portal" />
              <ProcessStep step="2" label="Prepaid shipping label generated automatically" />
              <ProcessStep step="3" label="Item received, inspected, and restocked same-day" />
              <ProcessStep step="4" label="Real-time inventory update across all channels" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturePill({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
}) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background border border-border/60 text-sm">
      <Icon className="h-4 w-4 text-blue-500 shrink-0" />
      <span className="text-sm">{label}</span>
    </div>
  )
}

function ProcessStep({ step, label }: { step: string; label: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
        {step}
      </div>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  )
}
