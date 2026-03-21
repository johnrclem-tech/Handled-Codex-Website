export { default as OnboardingTimeline } from "@/components/shadcn-studio/blocks/timeline-component-04/timeline-component-04"
export type { TimelineItem as OnboardingTimelineItem, TimelineComponentProps as OnboardingTimelineProps } from "@/components/shadcn-studio/blocks/timeline-component-04/timeline-component-04"

import type { OnboardingStep } from "@/components/sections/onboarding"

export interface OnboardingTimelineStep {
  title: string
  date: string
  employmentType: string
  period: string
  skills: string[]
  responsibilities: string[]
  headerBg?: string
}

/** Map existing OnboardingStep data to the timeline format */
export function mapOnboardingSteps(steps: OnboardingStep[]): OnboardingTimelineStep[] {
  const colorToBg: Record<string, string> = {
    blue: "bg-blue-600",
    emerald: "bg-emerald-600",
    purple: "bg-purple-600",
  }

  return steps.map((step) => ({
    title: step.title,
    date: step.badge,
    employmentType: `Step ${step.number}`,
    period: step.badge,
    skills: step.bullets.map((b) => b.text.split(" ").slice(0, 4).join(" ")),
    responsibilities: [step.description, ...step.bullets.map((b) => b.text)],
    headerBg: colorToBg[step.color] || "bg-primary",
  }))
}
