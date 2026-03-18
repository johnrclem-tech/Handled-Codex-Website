"use client"

import {
  HiOutlineClock,
  HiOutlineShieldCheck,
  HiOutlineArrowPath,
} from "react-icons/hi2"
import { Guarantees } from "@/components/sections/guarantees"
import type { GuaranteeItem } from "@/components/sections/guarantees"

const guarantees: GuaranteeItem[] = [
  {
    icon: HiOutlineClock,
    title: "Same-Day Shopify Shipping",
    description:
      "Every Shopify order received by 12PM local time ships the same day — backed by a financial SLA. If we miss it, we cover it. Your Shopify customers get the fast delivery they expect.",
    metric: "100%",
    metricLabel: "same-day shipping guarantee",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Shopify Order Accuracy",
    description:
      "Barcode-verified picking ensures the right product ships on every Shopify order. Wrong items mean returns, refunds, and lost trust — our 99.9% accuracy rate eliminates that risk.",
    metric: "99.9%",
    metricLabel: "Shopify pick accuracy",
  },
  {
    icon: HiOutlineArrowPath,
    title: "Instant Shopify Inventory Sync",
    description:
      "Inventory updates push to your Shopify store in real time. Restocked items are available for sale the same day they arrive — no overselling, no manual updates, no delays.",
    metric: "Same-day",
    metricLabel: "restock & sync guarantee",
  },
]

export function ShopifyGuarantees() {
  return (
    <Guarantees
      label="Shopify Fulfillment SLAs"
      heading="Shopify fulfillment guarantees backed by real accountability"
      description="Most Shopify 3PLs promise fast shipping. Handled puts it in writing — with financial penalties if we don't deliver. That's the difference between a fulfillment vendor and a fulfillment partner."
      guarantees={guarantees}
    />
  )
}
