import React from "react"
import { QuoteForm } from "@/components/ui/quote-form"
import {
  HiOutlineClock,
  HiOutlineCurrencyDollar,
  HiOutlineRocketLaunch,
} from "react-icons/hi2"

export interface CTABenefit {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

export interface CTAProps {
  label?: string
  heading: string
  description: string
  benefits: CTABenefit[]
}

export const defaultCTABenefits: CTABenefit[] = [
  {
    icon: HiOutlineClock,
    title: "Save Time",
    description:
      "No more tracking down tracking. We handle the busywork — so you can get back to building your brand.",
  },
  {
    icon: HiOutlineCurrencyDollar,
    title: "Save Money",
    description:
      "Smarter shipping, fewer support calls, and pricing that flexes with you. No minimums. No fixed costs. No-brainer.",
  },
  {
    icon: HiOutlineRocketLaunch,
    title: "Sell More",
    description:
      "With faster shipping and a branded delivery experience, we'll turn browsers into buyers — and buyers into brand fans.",
  },
]

export function CTA({
  label = "Get A Quote",
  heading,
  description,
  benefits,
}: CTAProps) {
  return (
    <section id="get-a-quote" className="relative bg-primary overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left side — content + benefits */}
              <div>
                <p className="section-label-light mb-6">{label}</p>

                <h2 className="section-heading text-primary-foreground">
                  {heading}
                </h2>
                <p className="section-description-light">
                  {description}
                </p>

                {/* Benefits */}
                <div className="mt-10 space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={benefit.title} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white font-bold text-sm">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                      </div>
                      <div>
                        <h3 className="card-title text-primary-foreground uppercase tracking-wide text-sm">
                          {benefit.title}
                        </h3>
                        <p className="mt-1 card-description text-primary-foreground/60">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side — form */}
              <QuoteForm />
        </div>
      </div>
    </section>
  )
}
