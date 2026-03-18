"use client"

import React from "react"
import {
  HiOutlineClock,
  HiOutlineShieldCheck,
  HiOutlineArrowPath,
} from "react-icons/hi2"

export interface GuaranteeItem {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  metric: string
  metricLabel: string
}

export interface GuaranteesProps {
  label?: string
  heading: string
  description: string
  guarantees: GuaranteeItem[]
}

export const defaultGuarantees: GuaranteeItem[] = [
  {
    icon: HiOutlineClock,
    title: "Same-Day Shipping",
    description:
      "Every ecommerce order received by 12PM local time ships the same day — no exceptions. If we miss it, we make it right.",
    metric: "100%",
    metricLabel: "on-time guarantee",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Perfect Accuracy",
    description:
      "We guarantee pick accuracy on every order. If we make a mistake, we cover the cost to fix it — every single time.",
    metric: "99.9%",
    metricLabel: "pick accuracy",
  },
  {
    icon: HiOutlineArrowPath,
    title: "Fast Replenishment",
    description:
      "Out-of-stock items are restocked the same day they arrive. Your inventory is always up-to-date and ready to ship.",
    metric: "Same-day",
    metricLabel: "restock guarantee",
  },
]

export function Guarantees({
  label = "Performance Guarantees",
  heading,
  description,
  guarantees,
}: GuaranteesProps) {
  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-primary-foreground/70 mb-3">{label}</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {heading}
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/70">
            {description}
          </p>
        </div>

        {/* Guarantee cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {guarantees.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 hover:bg-primary-foreground/[0.08] transition-colors"
            >
              <item.icon className="h-8 w-8 text-primary-foreground/70 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed mb-6">
                {item.description}
              </p>
              <div className="pt-4 border-t border-primary-foreground/10">
                <p className="text-3xl font-bold">{item.metric}</p>
                <p className="text-sm text-primary-foreground/50">{item.metricLabel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
