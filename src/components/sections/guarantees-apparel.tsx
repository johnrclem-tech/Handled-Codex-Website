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
    title: "Same-Day Apparel Shipping",
    description:
      "Every clothing order received by 12PM local time ships the same day — backed by a financial SLA. Fast delivery reduces cart abandonment and keeps your fashion brand competitive.",
    metric: "100%",
    metricLabel: "same-day shipping guarantee",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Size & Color Accuracy",
    description:
      "Barcode-verified picking ensures the right size, color, and style ships on every apparel order. In fashion, a wrong variant means a guaranteed return — our accuracy prevents it.",
    metric: "99.9%",
    metricLabel: "apparel pick accuracy",
  },
  {
    icon: HiOutlineArrowPath,
    title: "Same-Day Returns Restock",
    description:
      "Returned garments are inspected, sorted, and restocked the same day they arrive — getting popular sizes back on the shelf fast and minimizing lost revenue from out-of-stock variants.",
    metric: "Same-day",
    metricLabel: "returns restock guarantee",
  },
]

export function ApparelGuarantees() {
  return (
    <Guarantees
      label="Apparel Fulfillment SLAs"
      heading="Apparel fulfillment guarantees backed by real accountability"
      description="In apparel, a wrong size or late delivery means a guaranteed return. Handled is one of the only clothing 3PLs that backs every SLA with financial accountability."
      guarantees={guarantees}
    />
  )
}
