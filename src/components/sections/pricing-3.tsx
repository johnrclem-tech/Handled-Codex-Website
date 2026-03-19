"use client"

import { Warehouse, PackageCheck, Truck } from "lucide-react"
import Pricing from "@/components/shadcn-studio/blocks/pricing-component-15/pricing-component-15"

const plans = [
  {
    name: "Storage",
    icon: Warehouse,
    price: 25,
    description:
      "Your inventory is stored securely and efficiently, with monthly pallet-based pricing you only pay for the space you need.",
    features: [
      "Pallet-level storage",
      "Climate-controlled space",
      "Real-time inventory sync",
      "Smart bin organization",
      "Scale up/down monthly",
    ],
  },
  {
    name: "Fulfillment",
    icon: PackageCheck,
    price: 5,
    description:
      "Every order is picked and packed with care, with per-order pricing your costs rise only when your volume does.",
    features: [
      "Precision pick & pack",
      "Eco-friendly packaging",
      "Same-day dispatch",
      "Dashboard transparency",
      "High-volume scalability",
    ],
    isHighlighted: true,
  },
  {
    name: "Shipping",
    icon: Truck,
    price: 4,
    description:
      "We optimize every order for speed and savings, with per-shipment pricing based on the carrier and service level used.",
    features: [
      "Preferred carrier rates",
      "Regional & national reach",
      "Optimized routing",
      "Dynamic label generation",
      "Global shipping options",
    ],
  },
]

export function Pricing3() {
  return <Pricing plans={plans} />
}
