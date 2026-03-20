"use client"

import React, { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { IntegrationsUI } from "@/components/ui/integrations-ui"
import { CheckoutUI } from "@/components/ui/checkout-ui"
import { BrandingUI } from "@/components/ui/branding-ui"
import {
  HiOutlineBolt,
  HiOutlineArrowPath,
  HiOutlineCube,
  HiOutlineTruck,
  HiOutlineClock,
  HiOutlineShieldCheck,
  HiOutlineEnvelope,
  HiOutlineSwatch,
  HiOutlineArrowRight,
} from "react-icons/hi2"

export type OnboardingStepColor = "blue" | "emerald" | "purple"

export interface OnboardingBullet {
  icon: React.ComponentType<{ className?: string }>
  text: string
}

export interface OnboardingStep {
  number: string
  badge: string
  title: string
  description: string
  bullets: OnboardingBullet[]
  color: OnboardingStepColor
}

export interface OnboardingProps {
  label?: string
  heading: string
  description: string
  steps: OnboardingStep[]
}

// Default steps for the homepage (Shopify-focused)
export const defaultOnboardingSteps: OnboardingStep[] = [
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
    color: "blue",
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
    color: "emerald",
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
    color: "purple",
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
    line: "bg-blue-500",
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
    line: "bg-emerald-500",
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
    line: "bg-purple-500",
  },
}

/* ── Main Export ── */
export function Onboarding({
  label = "Onboarding",
  heading,
  description,
  steps,
}: OnboardingProps) {
  const [activeStep, setActiveStep] = useState(0)
  const visuals = [<IntegrationsUI key="1" />, <CheckoutUI key="2" />, <BrandingUI key="3" />]

  return (
    <section id="onboarding" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="section-label mb-3">{label}</p>
          <h2 className="section-heading">{heading}</h2>
          <p className="section-description">{description}</p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {steps.map((step, i) => {
            const colors = colorMap[step.color]
            const isActive = i === activeStep
            const isPast = i < activeStep
            const isLast = i === steps.length - 1

            return (
              <div key={step.number} className="relative pl-12 lg:pl-16">
                {/* Vertical line segment */}
                {!isLast && (
                  <div
                    className={`absolute left-[1.1875rem] lg:left-[1.4375rem] top-10 bottom-0 w-0.5 transition-colors duration-500 ${
                      isPast ? colors.line : "bg-border"
                    }`}
                  />
                )}

                {/* Timeline node */}
                <button
                  onClick={() => setActiveStep(i)}
                  className="absolute left-0 lg:left-1 top-0 z-10"
                >
                  <div
                    className={`h-10 w-10 rounded-full border-4 border-background flex items-center justify-center text-sm font-bold transition-all duration-300 shadow-sm ${
                      isActive
                        ? `${colors.activeDot} text-white scale-110`
                        : isPast
                          ? "bg-emerald-500 text-white"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {isPast ? "✓" : step.number}
                  </div>
                </button>

                {/* Step content */}
                <div className={`pb-12 ${isLast ? "pb-0" : ""}`}>
                  {/* Collapsed state */}
                  {!isActive && (
                    <button
                      onClick={() => setActiveStep(i)}
                      className="group flex items-center gap-3 pt-1.5 text-left"
                    >
                      <Badge
                        variant="secondary"
                        className={`${isPast ? "bg-emerald-100 text-emerald-700" : "bg-muted text-muted-foreground"} border-0 text-xs`}
                      >
                        {step.badge}
                      </Badge>
                      <span className="text-lg font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                        {step.title}
                      </span>
                    </button>
                  )}

                  {/* Expanded state */}
                  {isActive && (
                    <div className="pt-1">
                      <Badge
                        variant="secondary"
                        className={`mb-4 ${colors.badgeBg} border-0`}
                      >
                        {step.badge}
                      </Badge>

                      <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
                        {/* Text content */}
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed mb-8">
                            {step.description}
                          </p>
                          <div className="space-y-4">
                            {step.bullets.map((bullet, j) => (
                              <div key={j} className="flex items-start gap-3">
                                <div
                                  className={`h-8 w-8 rounded-lg ${colors.iconBg} flex items-center justify-center shrink-0 mt-0.5`}
                                >
                                  <bullet.icon className={`h-4 w-4 ${colors.text}`} />
                                </div>
                                <p className="feature-text leading-relaxed pt-1">
                                  {bullet.text}
                                </p>
                              </div>
                            ))}
                          </div>

                          {/* Step navigation */}
                          {activeStep < steps.length - 1 && (
                            <button
                              onClick={() => setActiveStep(activeStep + 1)}
                              className={`mt-8 inline-flex items-center gap-2 text-sm font-medium ${colors.text} hover:opacity-80 transition-opacity`}
                            >
                              Next: {steps[activeStep + 1].title}
                              <HiOutlineArrowRight className="h-4 w-4" />
                            </button>
                          )}
                        </div>

                        {/* Visual */}
                        <div className="flex justify-center">
                          {visuals[i]}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
