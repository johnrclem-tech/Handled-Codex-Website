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
  heading: string
  description: string
  bgColor?: string
  steps: [OnboardingTimelineStep, OnboardingTimelineStep, OnboardingTimelineStep]
}

export function OnboardingTimeline({
  label,
  heading,
  description,
  bgColor,
  steps,
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
