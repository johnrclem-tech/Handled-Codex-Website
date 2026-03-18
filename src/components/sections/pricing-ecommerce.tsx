"use client"

import React from "react"
import { Warehouse, PackageCheck, Truck, Sparkles } from "lucide-react"
import { Pricing } from "@/components/sections/pricing"
import type { PricingPlan } from "@/components/sections/pricing"

const plans: PricingPlan[] = [
  {
    name: "Storage",
    icon: <Warehouse className="h-6 w-6" />,
    description:
      "Your ecommerce inventory is stored securely across our bi-coastal warehouse network. Monthly pallet-based pricing means you only pay for the space you use.",
    target: "Ecommerce Warehousing:",
    features: [
      "Bi-coastal warehouse network",
      "Real-time inventory sync",
      "Multi-channel stock management",
      "Smart bin organization",
      "Scale up/down monthly",
    ],
  },
  {
    name: "Fulfillment",
    icon: <PackageCheck className="h-6 w-6" />,
    description:
      "Every ecommerce order is picked and packed with 99.9% accuracy. Per-order pricing means your fulfillment costs scale directly with your sales.",
    target: "Order Processing:",
    features: [
      "Barcode-verified pick & pack",
      "Multi-platform order sync",
      "Same-day dispatch",
      "Dashboard transparency",
      "Peak season scalability",
    ],
  },
  {
    name: "Shipping",
    icon: <Truck className="h-6 w-6" />,
    description:
      "We optimize every ecommerce order for speed and savings with carrier rate shopping and bi-coastal distribution for 2-day ground nationwide.",
    target: "Ecommerce Shipping:",
    features: [
      "Discounted carrier rates",
      "2-day ground nationwide",
      "Carrier rate shopping",
      "Auto tracking to all channels",
      "International shipping options",
    ],
  },
  {
    name: "Projects",
    icon: <Sparkles className="h-6 w-6" />,
    description:
      "From subscription box assembly to FBA prep and branded packaging, per-project pricing covers every value-added service your online brand needs.",
    target: "Custom Workflows:",
    features: [
      "Custom kitting/assembly",
      "Branded unboxing",
      "FBA prep & labeling",
      "Returns processing",
      "Subscription box builds",
    ],
  },
]

export function EcommercePricing() {
  return (
    <Pricing
      label="Ecommerce Fulfillment Pricing"
      heading="Transparent ecommerce fulfillment pricing that scales with your brand"
      description="No surprise fees. No minimums. Usage-based pricing whether you ship 50 or 50,000 orders a month — across every ecommerce channel."
      plans={plans}
    />
  )
}
