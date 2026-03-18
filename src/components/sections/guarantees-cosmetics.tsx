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
    title: "Same-Day Beauty Shipping",
    description:
      "Every cosmetics order received by 12PM local time ships the same day — backed by a financial SLA. Your beauty customers get the fast, reliable delivery premium brands demand.",
    metric: "100%",
    metricLabel: "same-day shipping guarantee",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Shade-Perfect Accuracy",
    description:
      "Barcode-verified picking ensures the right shade, size, and formula ships on every beauty order. In cosmetics, one wrong product means a guaranteed return — our accuracy eliminates that risk.",
    metric: "99.9%",
    metricLabel: "cosmetics pick accuracy",
  },
  {
    icon: HiOutlineArrowPath,
    title: "Same-Day Beauty Restock",
    description:
      "Returned and replenished beauty inventory is inspected, restocked, and available for sale the same day it arrives — with lot tracking and FIFO rotation maintained automatically.",
    metric: "Same-day",
    metricLabel: "restock & lot sync guarantee",
  },
]

export function CosmeticsGuarantees() {
  return (
    <Guarantees
      label="Cosmetics Fulfillment SLAs"
      heading="Beauty fulfillment guarantees backed by real accountability"
      description="For cosmetics brands, fulfillment errors are brand-damaging. Handled is one of the only beauty 3PLs that backs every SLA with financial accountability — from shipping speed to shade accuracy."
      guarantees={guarantees}
    />
  )
}
