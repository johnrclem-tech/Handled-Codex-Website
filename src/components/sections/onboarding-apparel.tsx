"use client"

import {
  HiOutlineBolt,
  HiOutlineArrowPath,
  HiOutlineCube,
  HiOutlineTruck,
  HiOutlineClock,
  HiOutlineShieldCheck,
  HiOutlineEnvelope,
  HiOutlineSwatch,
} from "react-icons/hi2"
import { Onboarding } from "@/components/sections/onboarding"
import type { OnboardingStep } from "@/components/sections/onboarding"

const steps: OnboardingStep[] = [
  {
    number: "1",
    badge: "Week 1",
    title: "Integrate and automate",
    description:
      "We connect your ecommerce platform, sync your entire apparel catalog — every size, color, and style variant — and configure automations so clothing fulfillment runs on autopilot from day one.",
    bullets: [
      { icon: HiOutlineArrowPath, text: "Real-time order sync, size/color variant tracking, and automatic tracking updates" },
      { icon: HiOutlineBolt, text: "Automated workflows for restock alerts, seasonal inventory, and order routing" },
      { icon: HiOutlineArrowPath, text: "Self-service returns portal handles the high return rates of fashion ecommerce" },
    ],
    color: "blue",
  },
  {
    number: "2",
    badge: "Week 1–2",
    title: "Make shipping part of the sale",
    description:
      "We configure real-time delivery dates and order cutoffs in your checkout so fashion shoppers know exactly when their clothing will arrive. Same-day shipping goes live the moment you do.",
    bullets: [
      { icon: HiOutlineClock, text: "Order-by cutoffs give shoppers confidence their apparel order ships today" },
      { icon: HiOutlineTruck, text: "Real delivery dates reduce 'Where's my order?' support tickets" },
      { icon: HiOutlineShieldCheck, text: "Delivery guarantees boost conversion and reduce cart abandonment for fashion purchases" },
    ],
    color: "emerald",
  },
  {
    number: "3",
    badge: "Week 2",
    title: "Brand literally everything",
    description:
      "During onboarding, we design branded poly mailers, tissue paper, inserts, and customer communications that match the quality of your clothing brand. Every shipment becomes a brand touchpoint.",
    bullets: [
      { icon: HiOutlineCube, text: "Custom poly mailers, branded tissue, garment bags, and inserts for every apparel order" },
      { icon: HiOutlineEnvelope, text: "Personalized tracking emails keep your fashion brand in every inbox" },
      { icon: HiOutlineSwatch, text: "A branded returns portal turns reverse logistics into a seamless brand experience" },
    ],
    color: "purple",
  },
]

export function ApparelOnboarding() {
  return (
    <Onboarding
      label="Apparel Onboarding"
      heading="Onboard your apparel fulfillment in 2&nbsp;weeks"
      description="We make launching clothing fulfillment predictable and fast — with high-SKU variant management, garment-safe handling, and branded packaging configured from the start."
      steps={steps}
    />
  )
}
