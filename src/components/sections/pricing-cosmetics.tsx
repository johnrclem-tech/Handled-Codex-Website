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
      "Your beauty inventory is stored in climate-controlled facilities with lot tracking and expiration management. Pay only for the space you need.",
    target: "Beauty Warehousing:",
    features: [
      "Climate-controlled storage",
      "Lot & expiration tracking",
      "FIFO inventory rotation",
      "Real-time inventory sync",
      "Scale up/down monthly",
    ],
  },
  {
    name: "Fulfillment",
    icon: <PackageCheck className="h-6 w-6" />,
    description:
      "Every cosmetics order is picked with barcode verification and packed with fragile-safe materials. Per-order pricing scales with your beauty brand.",
    target: "Order Processing:",
    features: [
      "Barcode-verified pick & pack",
      "Fragile-safe packaging",
      "Same-day dispatch",
      "Shade-accurate picking",
      "Quality inspection",
    ],
  },
  {
    name: "Shipping",
    icon: <Truck className="h-6 w-6" />,
    description:
      "We optimize every beauty order for speed and product safety. Per-shipment pricing based on carrier, service level, and special handling needs.",
    target: "Beauty Logistics:",
    features: [
      "Discounted carrier rates",
      "2-day ground nationwide",
      "Fragile item handling",
      "Auto tracking updates",
      "Temperature-safe transit",
    ],
  },
  {
    name: "Projects",
    icon: <Sparkles className="h-6 w-6" />,
    description:
      "From influencer kit assembly to subscription box builds and seasonal gift sets, per-project pricing covers all your beauty brand's custom needs.",
    target: "Custom Workflows:",
    features: [
      "Influencer & PR kits",
      "Subscription box assembly",
      "Branded unboxing design",
      "Beauty returns processing",
      "Sample & GWP insertion",
    ],
  },
]

export function CosmeticsPricing() {
  return (
    <Pricing
      label="Cosmetics Fulfillment Pricing"
      heading="Transparent cosmetics fulfillment pricing built for beauty brands"
      description="No surprise fees. No minimums. Usage-based pricing that includes climate-controlled storage, fragile-safe handling, and lot tracking at no extra cost."
      plans={plans}
    />
  )
}
