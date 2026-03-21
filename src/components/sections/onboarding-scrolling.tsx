"use client"

/*
 * <OnboardingScrolling
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

import FeaturesSection24 from "@/components/shadcn-studio/blocks/features-section-24/features-section-24"
import type { ScrollingFeature } from "@/components/shadcn-studio/blocks/features-section-24/features-section-24"
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

export interface OnboardingScrollingStep {
  description: string
  bullets: [string, string, string]
}

export interface OnboardingScrollingProps {
  label?: string
  heading: string
  description: string
  bgColor?: string
  steps: [OnboardingScrollingStep, OnboardingScrollingStep, OnboardingScrollingStep]
}

export function OnboardingScrolling({
  label,
  heading,
  description,
  bgColor,
  steps,
}: OnboardingScrollingProps) {
  const features: ScrollingFeature[] = [
    {
      stepLabel: "Step 1",
      badge: "Week 1",
      title: "Integrate and automate",
      description: steps[0].description,
      bullets: [
        { icon: HiOutlineArrowPath, text: steps[0].bullets[0] },
        { icon: HiOutlineBolt, text: steps[0].bullets[1] },
        { icon: HiOutlineArrowPath, text: steps[0].bullets[2] },
      ],
    },
    {
      stepLabel: "Step 2",
      badge: "Week 1–2",
      title: "Make shipping part of the sale",
      description: steps[1].description,
      bullets: [
        { icon: HiOutlineClock, text: steps[1].bullets[0] },
        { icon: HiOutlineTruck, text: steps[1].bullets[1] },
        { icon: HiOutlineShieldCheck, text: steps[1].bullets[2] },
      ],
    },
    {
      stepLabel: "Step 3",
      badge: "Week 2",
      title: "Brand literally everything",
      description: steps[2].description,
      bullets: [
        { icon: HiOutlineCube, text: steps[2].bullets[0] },
        { icon: HiOutlineEnvelope, text: steps[2].bullets[1] },
        { icon: HiOutlineSwatch, text: steps[2].bullets[2] },
      ],
    },
  ]

  return (
    <FeaturesSection24
      label={label}
      heading={heading}
      description={description}
      bgColor={bgColor}
      features={features}
    />
  )
}
