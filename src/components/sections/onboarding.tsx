"use client"

import React, { useState } from "react"
import { Badge } from "@/components/ui/badge"
import {
  HiOutlineBolt,
  HiOutlineArrowPath,
  HiOutlineCube,
  HiOutlineTruck,
  HiOutlineClock,
  HiOutlineShieldCheck,
  HiOutlineCheckCircle,
  HiOutlineSparkles,
  HiOutlineGift,
  HiOutlineEnvelope,
  HiOutlineSwatch,
  HiOutlineArrowRight,
} from "react-icons/hi2"
import { SiShopify } from "react-icons/si"

const steps = [
  {
    number: "1",
    badge: "Week 1",
    title: "Integrate and automate",
    description:
      "We connect your Shopify store, sync your inventory, and build Shopify Flow automations so fulfillment runs on autopilot. From the moment you go live, your ops team can focus on growth, not logistics.",
    bullets: [
      {
        icon: HiOutlineArrowPath,
        text: "Real-time Shopify orders, inventory, and tracking eliminate busywork",
      },
      {
        icon: HiOutlineBolt,
        text: "Shopify Flow automations reduce manual processes",
      },
      {
        icon: HiOutlineArrowPath,
        text: "Self-service returns portal handles refunds and exchanges seamlessly",
      },
    ],
    color: "blue" as const,
  },
  {
    number: "2",
    badge: "Week 1–2",
    title: "Make shipping part of the sale",
    description:
      "From day one, we configure real-time delivery info and order cutoffs in your Shopify checkout so your customers know exactly when to expect their order. Our same-day shipping promise goes live the moment you do.",
    bullets: [
      {
        icon: HiOutlineClock,
        text: "Order-by cutoffs give Shopify shoppers confidence their order ships today",
      },
      {
        icon: HiOutlineTruck,
        text: "Real delivery dates reduce 'Where's my order?' support tickets",
      },
      {
        icon: HiOutlineShieldCheck,
        text: "Shop Promise badges boost trust, urgency, and conversions",
      },
    ],
    color: "emerald" as const,
  },
  {
    number: "3",
    badge: "Week 2",
    title: "Brand literally everything",
    description:
      "During onboarding, we work with you to design branded packaging, inserts, and customer communications for your Shopify fulfillment that elevate your unboxing experience. Every shipment becomes a chance to reinforce your brand.",
    bullets: [
      {
        icon: HiOutlineCube,
        text: "Branded boxes, tissue, inserts, and notes turn Shopify deliveries into lasting impressions",
      },
      {
        icon: HiOutlineEnvelope,
        text: "Personalized tracking emails keep your brand in every inbox",
      },
      {
        icon: HiOutlineSwatch,
        text: "A branded self-serve returns portal reflects your standards to the very end",
      },
    ],
    color: "purple" as const,
  },
]

const colorMap = {
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-200",
    ring: "ring-blue-100",
    badgeBg: "bg-blue-100 text-blue-700",
    iconBg: "bg-blue-100",
    progressBar: "bg-blue-500",
    activeDot: "bg-blue-500",
  },
  emerald: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-200",
    ring: "ring-emerald-100",
    badgeBg: "bg-emerald-100 text-emerald-700",
    iconBg: "bg-emerald-100",
    progressBar: "bg-emerald-500",
    activeDot: "bg-emerald-500",
  },
  purple: {
    bg: "bg-purple-50",
    text: "text-purple-600",
    border: "border-purple-200",
    ring: "ring-purple-100",
    badgeBg: "bg-purple-100 text-purple-700",
    iconBg: "bg-purple-100",
    progressBar: "bg-purple-500",
    activeDot: "bg-purple-500",
  },
}

/* ── Step 1 Visual: Shopify Integration Dashboard ── */
function IntegrationVisual() {
  return (
    <div className="rounded-2xl border border-border bg-card shadow-xl overflow-hidden animate-float">
      <div className="bg-[#96bf48] px-6 py-4 flex items-center gap-2">
        <SiShopify className="h-5 w-5 text-white" />
        <span className="text-white text-sm font-medium">Shopify × Handled — Connected</span>
      </div>
      <div className="p-6 space-y-4">
        {/* Sync status indicators */}
        <div className="space-y-3">
          <SyncRow label="Orders" status="Syncing in real-time" active />
          <SyncRow label="Inventory" status="2,847 SKUs synced" active />
          <SyncRow label="Tracking" status="Auto-push enabled" active />
        </div>

        {/* Shopify Flow automations */}
        <div className="mt-4 rounded-lg border border-border bg-muted/30 p-4">
          <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
            Active Automations
          </p>
          <div className="space-y-2">
            <FlowRow icon={HiOutlineBolt} label="Auto-route orders by region" />
            <FlowRow icon={HiOutlineArrowPath} label="Restock alerts → Purchase order" />
            <FlowRow icon={HiOutlineGift} label="Free gift insert on orders $100+" />
          </div>
        </div>

        {/* Returns widget */}
        <div className="rounded-lg border border-border bg-background p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
              <HiOutlineArrowPath className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <p className="text-xs font-medium">Returns Portal</p>
              <p className="text-[11px] text-muted-foreground">Self-service enabled</p>
            </div>
          </div>
          <Badge variant="secondary" className="text-[10px] bg-emerald-100 text-emerald-700 border-0">Live</Badge>
        </div>
      </div>
    </div>
  )
}

function SyncRow({ label, status, active }: { label: string; status: string; active: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className={`h-2 w-2 rounded-full ${active ? "bg-emerald-500 animate-pulse" : "bg-muted-foreground/30"}`} />
        <span className="text-sm font-medium">{label}</span>
      </div>
      <span className="text-xs text-muted-foreground">{status}</span>
    </div>
  )
}

function FlowRow({ icon: Icon, label }: { icon: React.ComponentType<{ className?: string }>; label: string }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <Icon className="h-3.5 w-3.5 text-blue-500 shrink-0" />
      <span className="text-muted-foreground">{label}</span>
    </div>
  )
}

/* ── Step 2 Visual: Checkout / Shipping Experience ── */
function ShippingVisual() {
  return (
    <div className="rounded-2xl border border-border bg-card shadow-xl overflow-hidden animate-float">
      <div className="bg-primary px-6 py-4">
        <span className="text-primary-foreground text-sm font-medium">Checkout — Shipping Options</span>
      </div>
      <div className="p-6 space-y-4">
        {/* Order cutoff banner */}
        <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-3 flex items-center gap-2">
          <HiOutlineClock className="h-5 w-5 text-emerald-600 shrink-0" />
          <div>
            <p className="text-xs font-semibold text-emerald-800">Order by 2:00 PM ET — Ships Today!</p>
            <p className="text-[11px] text-emerald-600">Same-day fulfillment guaranteed</p>
          </div>
        </div>

        {/* Shipping options */}
        <div className="space-y-2">
          <ShippingOption
            label="Standard Shipping"
            eta="Arrives Mar 21–22"
            price="Free"
            selected
            badge="Shop Promise"
          />
          <ShippingOption
            label="Express Shipping"
            eta="Arrives Mar 19"
            price="$8.99"
            selected={false}
          />
          <ShippingOption
            label="Overnight"
            eta="Arrives Mar 18"
            price="$14.99"
            selected={false}
          />
        </div>

        {/* Trust badges */}
        <div className="flex items-center gap-3 pt-2 border-t border-border">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <HiOutlineShieldCheck className="h-3.5 w-3.5 text-blue-500" />
            <span>Shop Promise</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <HiOutlineTruck className="h-3.5 w-3.5 text-emerald-500" />
            <span>Real-time tracking</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <HiOutlineCheckCircle className="h-3.5 w-3.5 text-emerald-500" />
            <span>Delivery date</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function ShippingOption({
  label,
  eta,
  price,
  selected,
  badge,
}: {
  label: string
  eta: string
  price: string
  selected: boolean
  badge?: string
}) {
  return (
    <div
      className={`rounded-lg border p-3 flex items-center justify-between transition-all ${
        selected
          ? "border-blue-300 bg-blue-50/50 ring-1 ring-blue-100"
          : "border-border hover:border-border/80"
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`h-4 w-4 rounded-full border-2 flex items-center justify-center ${
            selected ? "border-blue-500" : "border-muted-foreground/30"
          }`}
        >
          {selected && <div className="h-2 w-2 rounded-full bg-blue-500" />}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium">{label}</p>
            {badge && (
              <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700">
                {badge}
              </span>
            )}
          </div>
          <p className="text-xs text-muted-foreground">{eta}</p>
        </div>
      </div>
      <span className={`text-sm font-medium ${price === "Free" ? "text-emerald-600" : ""}`}>{price}</span>
    </div>
  )
}

/* ── Step 3 Visual: Branded Unboxing Experience ── */
function BrandingVisual() {
  return (
    <div className="rounded-2xl border border-border bg-card shadow-xl overflow-hidden animate-float">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4">
        <span className="text-white text-sm font-medium">Your Brand — Unboxing Experience</span>
      </div>
      <div className="p-6 space-y-4">
        {/* Package mockup */}
        <div className="rounded-lg border border-border bg-muted/30 p-4">
          <div className="flex gap-3">
            <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-100 to-blue-100 border border-purple-200 flex items-center justify-center shrink-0">
              <HiOutlineCube className="h-7 w-7 text-purple-500" />
            </div>
            <div className="flex-1 space-y-1.5">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">What&apos;s inside</p>
              <BrandItem label="Custom branded box" />
              <BrandItem label="Branded tissue paper" />
              <BrandItem label="Thank-you insert card" />
              <BrandItem label="Promo sticker pack" />
            </div>
          </div>
        </div>

        {/* Tracking email preview */}
        <div className="rounded-lg border border-border bg-background p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
              <HiOutlineEnvelope className="h-4 w-4 text-purple-600" />
            </div>
            <div>
              <p className="text-xs font-medium">Branded Tracking Email</p>
              <p className="text-[11px] text-muted-foreground">Sent automatically at each milestone</p>
            </div>
          </div>
          <div className="rounded border border-border bg-muted/20 p-3 space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded bg-purple-600 flex items-center justify-center">
                <span className="text-white text-[9px] font-bold">YB</span>
              </div>
              <span className="text-xs font-medium">Your order has shipped!</span>
            </div>
            <div className="h-1.5 w-3/4 rounded bg-muted-foreground/10" />
            <div className="h-1.5 w-1/2 rounded bg-muted-foreground/10" />
            <div className="mt-2 h-7 w-24 rounded bg-purple-600 flex items-center justify-center">
              <span className="text-white text-[10px] font-medium">Track Order</span>
            </div>
          </div>
        </div>

        {/* Returns portal badge */}
        <div className="rounded-lg border border-border bg-background p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
              <HiOutlineSwatch className="h-4 w-4 text-purple-600" />
            </div>
            <div>
              <p className="text-xs font-medium">Branded Returns Portal</p>
              <p className="text-[11px] text-muted-foreground">Custom colors, logo, and messaging</p>
            </div>
          </div>
          <Badge variant="secondary" className="text-[10px] bg-purple-100 text-purple-700 border-0">
            <HiOutlineSparkles className="h-3 w-3 mr-0.5" />
            Branded
          </Badge>
        </div>
      </div>
    </div>
  )
}

function BrandItem({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <HiOutlineCheckCircle className="h-3 w-3 text-purple-500 shrink-0" />
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  )
}

/* ── Main Export ── */
export function Onboarding() {
  const [activeStep, setActiveStep] = useState(0)
  const visuals = [<IntegrationVisual key="1" />, <ShippingVisual key="2" />, <BrandingVisual key="3" />]

  return (
    <section id="onboarding" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 mb-3">Onboarding</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Onboard your Shopify fulfillment in 2&nbsp;weeks
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We make launching Shopify fulfillment predictable and fast.
          </p>
        </div>

        {/* Progress bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-between mb-3">
            {steps.map((step, i) => {
              const colors = colorMap[step.color]
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(i)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                    i === activeStep
                      ? `${colors.badgeBg}`
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span
                    className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                      i === activeStep
                        ? `${colors.activeDot} text-white`
                        : i < activeStep
                          ? "bg-emerald-500 text-white"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {i < activeStep ? "✓" : step.number}
                  </span>
                  <span className="hidden sm:inline">{step.title}</span>
                </button>
              )
            })}
          </div>
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${colorMap[steps[activeStep].color].progressBar}`}
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Content for active step */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text content */}
          <div>
            <Badge variant="secondary" className={`mb-4 ${colorMap[steps[activeStep].color].badgeBg} border-0`}>
              {steps[activeStep].badge}
            </Badge>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              {steps[activeStep].title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {steps[activeStep].description}
            </p>
            <div className="space-y-4">
              {steps[activeStep].bullets.map((bullet, i) => {
                const colors = colorMap[steps[activeStep].color]
                return (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`h-8 w-8 rounded-lg ${colors.iconBg} flex items-center justify-center shrink-0 mt-0.5`}>
                      <bullet.icon className={`h-4 w-4 ${colors.text}`} />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed pt-1">{bullet.text}</p>
                  </div>
                )
              })}
            </div>

            {/* Step navigation */}
            {activeStep < steps.length - 1 && (
              <button
                onClick={() => setActiveStep(activeStep + 1)}
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
              >
                Next: {steps[activeStep + 1].title}
                <HiOutlineArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Right: UX visual */}
          <div className="flex justify-center">
            {visuals[activeStep]}
          </div>
        </div>
      </div>
    </section>
  )
}
