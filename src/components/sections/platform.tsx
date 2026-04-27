import React from "react"
import { Badge } from "@/components/ui/badge"
import {
  HiOutlineChartBar,
  HiOutlineBell,
  HiOutlineCog6Tooth,
  HiOutlineShieldCheck,
} from "react-icons/hi2"
import { TrackingExperience } from "@/components/ui/tracking-experience"
import { ReturnsExperience } from "@/components/ui/returns-experience"

interface PlatformProps {
  label?: string
  heading?: string
  description?: string
}

export function Platform({
  label = "Platform",
  heading = "Built like software. Runs like magic.",
  description =
    "Real-time visibility, automated workflows, and performance analytics that put you in control of your supply chain.",
}: PlatformProps) {
  return (
    <section id="platform" className="bg-muted/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <p className="section-label mb-3">{label}</p>
          <h2 className="section-heading">{heading}</h2>
          <p className="section-description">{description}</p>
        </div>

        <div className="mb-24 grid items-center gap-16 lg:grid-cols-2">
          <div>
            <Badge variant="secondary" className="mb-4">Customer Tracking</Badge>
            <h3 className="mb-4 text-2xl font-bold">
              Branded tracking your customers love
            </h3>
            <p className="mb-6 leading-relaxed text-muted-foreground">
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

        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <ReturnsExperience />
          </div>
          <div className="order-1 lg:order-2">
            <Badge variant="secondary" className="mb-4">Returns Portal</Badge>
            <h3 className="mb-4 text-2xl font-bold">
              Returns that feel effortless
            </h3>
            <p className="mb-6 leading-relaxed text-muted-foreground">
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
    <div className="flex items-center gap-2 rounded-lg border border-border/60 bg-background px-3 py-2 text-sm">
      <Icon className="h-4 w-4 shrink-0 text-blue-500" />
      <span className="text-sm">{label}</span>
    </div>
  )
}

function ProcessStep({ step, label }: { step: string; label: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
        {step}
      </div>
      <p className="feature-text">{label}</p>
    </div>
  )
}
