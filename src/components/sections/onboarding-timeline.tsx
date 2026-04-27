"use client"

/*
 * <OnboardingTimeline
 *   label=""
 *   heading=""
 *   description=""
 *   bgColor=""
 *   steps={[
 *     { description: "", bullets: ["", "", ""] },  // Step 1: Integrate and automate (Week 1)
 *     { description: "", bullets: ["", "", ""] },  // Step 2: Make shipping part of the sale (Week 1–2)
 *     { description: "", bullets: ["", "", ""] },  // Step 3: Brand literally everything (Week 2)
 *   ]}
 * />
 */

import TimelineComponent from "@/components/shadcn-studio/blocks/timeline-component-04/timeline-component-04"
import type { TimelineItem } from "@/components/shadcn-studio/blocks/timeline-component-04/timeline-component-04"
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
import {
  OnboardingVisualIntegrate,
  OnboardingVisualShipping,
  OnboardingVisualBrand,
} from "@/components/ui/onboarding-visuals"

export interface OnboardingTimelineStep {
  description: string
  bullets: [string, string, string]
}

export interface OnboardingTimelineProps {
  label?: string
  heading?: string
  description?: string
  bgColor?: string
  steps?: [OnboardingTimelineStep, OnboardingTimelineStep, OnboardingTimelineStep]
}

const defaultSteps: [OnboardingTimelineStep, OnboardingTimelineStep, OnboardingTimelineStep] = [
  {
    description:
      "We connect your store and automate order routing, inventory sync, and fulfillment workflows in the first week.",
    bullets: [
      "Real-time order and inventory synchronization",
      "Automations configured for core fulfillment flows",
      "Fewer manual tasks for your operations team",
    ],
  },
  {
    description:
      "We activate delivery promises and shipping rules so customers see reliable ETAs and your support team handles fewer WISMO tickets.",
    bullets: [
      "Order cutoff times surfaced at checkout",
      "Delivery date visibility for better conversion",
      "Shipping policy setup aligned to SLA targets",
    ],
  },
  {
    description:
      "We finalize branded packaging and customer communication touchpoints to reinforce your brand post-purchase.",
    bullets: [
      "Branded packaging and inserts configured",
      "Tracking communication aligned to brand tone",
      "Returns workflows launched with your policies",
    ],
  },
]

export function OnboardingTimeline({
  label,
  heading = "Onboard in two weeks",
  description = "Go live quickly with a structured rollout that prioritizes speed, accuracy, and brand consistency.",
  bgColor,
  steps = defaultSteps,
}: OnboardingTimelineProps) {
  const data: TimelineItem[] = [
    {
      title: "Integrate and automate",
      date: "Week 1",
      stepLabel: "Step 1",
      description: steps[0].description,
      bullets: [
        { icon: HiOutlineArrowPath, text: steps[0].bullets[0] },
        { icon: HiOutlineBolt, text: steps[0].bullets[1] },
        { icon: HiOutlineArrowPath, text: steps[0].bullets[2] },
      ],
      visual: <OnboardingVisualIntegrate />,
    },
    {
      title: "Make shipping part of the sale",
      date: "Week 1–2",
      stepLabel: "Step 2",
      description: steps[1].description,
      bullets: [
        { icon: HiOutlineClock, text: steps[1].bullets[0] },
        { icon: HiOutlineTruck, text: steps[1].bullets[1] },
        { icon: HiOutlineShieldCheck, text: steps[1].bullets[2] },
      ],
      visual: <OnboardingVisualShipping />,
    },
    {
      title: "Brand literally everything",
      date: "Week 2",
      stepLabel: "Step 3",
      description: steps[2].description,
      bullets: [
        { icon: HiOutlineCube, text: steps[2].bullets[0] },
        { icon: HiOutlineEnvelope, text: steps[2].bullets[1] },
        { icon: HiOutlineSwatch, text: steps[2].bullets[2] },
      ],
      visual: <OnboardingVisualBrand />,
    },
  ]

  return (
    <TimelineComponent
      label={label}
      heading={heading}
      description={description}
      bgColor={bgColor}
      data={data}
    />
  )
}
