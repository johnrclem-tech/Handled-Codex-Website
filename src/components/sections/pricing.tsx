import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  HiOutlineCube,
  HiOutlineArchiveBox,
  HiOutlineTruck,
  HiOutlineWrenchScrewdriver,
  HiOutlineCheckCircle,
  HiOutlineArrowRight,
} from "react-icons/hi2"

const pricingCategories = [
  {
    icon: HiOutlineArchiveBox,
    title: "Storage",
    description: "Pallet-based warehouse storage",
    detail: "Pay only for the space you use",
  },
  {
    icon: HiOutlineCube,
    title: "Pick & Pack",
    description: "Per-order fulfillment",
    detail: "Volume discounts available",
  },
  {
    icon: HiOutlineTruck,
    title: "Shipping",
    description: "Discounted carrier rates",
    detail: "2-day ground from $4.99",
  },
  {
    icon: HiOutlineWrenchScrewdriver,
    title: "Special Projects",
    description: "Kitting, assembly, custom work",
    detail: "Quoted per project",
  },
]

const included = [
  "No minimums or setup fees",
  "Dedicated account manager",
  "Real-time dashboard access",
  "Custom branded packaging",
  "Bi-coastal warehouse network",
  "Performance SLA guarantees",
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 mb-3">Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Transparent pricing that scales with you
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            No surprise fees. No minimums. Just clean, usage-based pricing whether you
            ship 50 or 50,000 orders a month.
          </p>
        </div>

        {/* Pricing categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pricingCategories.map((cat) => (
            <Card key={cat.title} className="border-border/60">
              <CardContent className="p-6 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-muted mb-4">
                  <cat.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="font-semibold mb-1">{cat.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{cat.description}</p>
                <p className="text-xs font-medium text-blue-600">{cat.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Included features + CTA */}
        <div className="rounded-2xl border border-border bg-muted/30 p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">Everything included</h3>
              <p className="text-muted-foreground mb-6">
                Every Handled plan comes with the tools and support you need to deliver at scale.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {included.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <HiOutlineCheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center lg:text-right">
              <p className="text-muted-foreground text-sm mb-4">
                Most brands are fully onboarded within 7–10 business days.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact-sales">
                  Get a custom quote
                  <HiOutlineArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
