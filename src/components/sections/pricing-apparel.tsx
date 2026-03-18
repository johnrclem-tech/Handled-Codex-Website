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
      "Your apparel inventory is stored with size/color/style organization for maximum picking efficiency. Monthly pallet-based pricing scales with your catalog.",
    target: "Apparel Warehousing:",
    features: [
      "Size/color variant organization",
      "Garment rack & shelf storage",
      "Real-time inventory sync",
      "High-SKU management",
      "Scale up/down monthly",
    ],
  },
  {
    name: "Fulfillment",
    icon: <PackageCheck className="h-6 w-6" />,
    description:
      "Every clothing order is picked with barcode verification to ensure the right size, color, and style. Per-order pricing grows only when your sales do.",
    target: "Order Processing:",
    features: [
      "Barcode-verified pick & pack",
      "Size/color accuracy guarantee",
      "Same-day dispatch",
      "Garment-safe handling",
      "Flash sale scalability",
    ],
  },
  {
    name: "Shipping",
    icon: <Truck className="h-6 w-6" />,
    description:
      "We optimize every apparel order for speed and cost. Per-shipment pricing based on carrier, service level, and package dimensions.",
    target: "Apparel Shipping:",
    features: [
      "Discounted carrier rates",
      "2-day ground nationwide",
      "Poly mailer optimization",
      "Auto tracking updates",
      "B2B pallet shipping",
    ],
  },
  {
    name: "Projects",
    icon: <Sparkles className="h-6 w-6" />,
    description:
      "From seasonal collection launches to branded packaging and wholesale prep, per-project pricing covers your fashion brand's custom needs.",
    target: "Custom Workflows:",
    features: [
      "Branded poly mailers & tissue",
      "Garment bag packaging",
      "Hang tag & label application",
      "Apparel returns processing",
      "Retail-ready wholesale prep",
    ],
  },
]

export function ApparelPricing() {
  return (
    <Pricing
      label="Apparel Fulfillment Pricing"
      heading="Transparent apparel fulfillment pricing built for clothing brands"
      description="No surprise fees. No minimums. Usage-based pricing with high-SKU management, garment-safe handling, and branded packaging included."
      plans={plans}
    />
  )
}
