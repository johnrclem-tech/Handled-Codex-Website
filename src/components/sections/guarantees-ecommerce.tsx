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
    title: "Same-Day Order Shipping",
    description:
      "Every ecommerce order received by 12PM local time ships the same day — backed by a financial SLA. If we miss the cutoff, we cover it. Your online customers get the delivery speed they expect.",
    metric: "100%",
    metricLabel: "same-day shipping guarantee",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Ecommerce Order Accuracy",
    description:
      "Barcode-verified picking ensures the right products in the right quantities ship on every ecommerce order. Wrong items cost you returns, refunds, and customer trust — our accuracy prevents it.",
    metric: "99.9%",
    metricLabel: "ecommerce order accuracy",
  },
  {
    icon: HiOutlineArrowPath,
    title: "Same-Day Inventory Restock",
    description:
      "Returned and replenished inventory is received, inspected, and restocked the same day it arrives — updating your ecommerce channels in real time so products are back on sale immediately.",
    metric: "Same-day",
    metricLabel: "restock guarantee",
  },
]

export function EcommerceGuarantees() {
  return (
    <Guarantees
      label="Ecommerce Fulfillment SLAs"
      heading="Ecommerce fulfillment guarantees backed by real accountability"
      description="Handled is one of the only ecommerce 3PLs that backs every fulfillment SLA with financial penalties. If we miss a guarantee, we pay — not you."
      guarantees={guarantees}
    />
  )
}
