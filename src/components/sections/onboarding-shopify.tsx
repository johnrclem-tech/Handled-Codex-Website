"use client"

import {
  HiOutlineBolt,
  HiOutlineArrowPath,
  HiOutlineCube,
  HiOutlineTruck,
  HiOutlineClock,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
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
      "We connect your Shopify store, sync your inventory, and build Shopify Flow automations so fulfillment runs on autopilot. From the moment you go live, your ops team can focus on growth, not logistics.",
    bullets: [
      { icon: HiOutlineArrowPath, text: "Real-time Shopify orders, inventory, and tracking eliminate busywork" },
      { icon: HiOutlineBolt, text: "Shopify Flow automations reduce manual processes" },
      { icon: HiOutlineArrowPath, text: "Self-service returns portal handles refunds and exchanges seamlessly" },
    ],
    color: "blue",
  },
  {
    number: "2",
    badge: "Week 1–2",
    title: "Make shipping part of the sale",
    description:
      "From day one, we configure real-time delivery info and order cutoffs in your Shopify checkout so your customers know exactly when to expect their order. Our same-day shipping promise goes live the moment you do.",
    bullets: [
      { icon: HiOutlineClock, text: "Order-by cutoffs give Shopify shoppers confidence their order ships today" },
      { icon: HiOutlineTruck, text: "Real delivery dates reduce 'Where's my order?' support tickets" },
      { icon: HiOutlineShieldCheck, text: "Shop Promise badges boost trust, urgency, and conversions" },
    ],
    color: "emerald",
  },
  {
    number: "3",
    badge: "Week 2",
    title: "Brand literally everything",
    description:
      "During onboarding, we work with you to design branded packaging, inserts, and customer communications for your Shopify fulfillment that elevate your unboxing experience. Every shipment becomes a chance to reinforce your brand.",
    bullets: [
      { icon: HiOutlineCube, text: "Branded boxes, tissue, inserts, and notes turn Shopify deliveries into lasting impressions" },
      { icon: HiOutlineSparkles, text: "Personalized tracking emails keep your brand in every inbox" },
      { icon: HiOutlineShieldCheck, text: "A branded self-serve returns portal reflects your standards to the very end" },
    ],
    color: "purple",
  },
]

export function ShopifyOnboarding() {
  return (
    <Onboarding
      label="Shopify Onboarding"
      heading="Onboard your Shopify fulfillment in 2&nbsp;weeks"
      description="We make launching Shopify fulfillment predictable and fast. Our dedicated onboarding team handles every detail so your store ships on schedule."
      steps={steps}
    />
  )
}
