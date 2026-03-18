"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  HiOutlineArrowRight,
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="relative bg-primary overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left side — content + benefits */}
              <div>
                <Badge
                  variant="secondary"
                  className="mb-6 gap-1.5 px-3 py-1 text-xs font-medium bg-white/10 text-white border-white/20 hover:bg-white/15"
                >
                  {label}
                </Badge>

                <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground tracking-tight">
                  {heading}
                </h2>
                <p className="mt-4 text-lg text-primary-foreground/70">
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
                        <h3 className="font-semibold text-primary-foreground uppercase tracking-wide text-sm">
                          {benefit.title}
                        </h3>
                        <p className="mt-1 text-sm text-primary-foreground/60 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side — form */}
              <div className="rounded-xl bg-white p-8 shadow-2xl">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 mb-4">
                      <HiOutlineRocketLaunch className="h-7 w-7 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      Quote request received!
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      We&apos;ll get back to you within 1 business day with a custom quote.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      Get your free quote
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      Fill out the form and we&apos;ll be in touch within 1 business day.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label
                          htmlFor="cta-name"
                          className="block text-sm font-medium text-foreground mb-1.5"
                        >
                          Full name
                        </label>
                        <Input
                          id="cta-name"
                          name="name"
                          type="text"
                          placeholder="Jane Smith"
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="cta-email"
                          className="block text-sm font-medium text-foreground mb-1.5"
                        >
                          Work email
                        </label>
                        <Input
                          id="cta-email"
                          name="email"
                          type="email"
                          placeholder="jane@yourbrand.com"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="cta-phone"
                          className="block text-sm font-medium text-foreground mb-1.5"
                        >
                          Phone number
                        </label>
                        <Input
                          id="cta-phone"
                          name="phone"
                          type="tel"
                          placeholder="(555) 123-4567"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="cta-website"
                          className="block text-sm font-medium text-foreground mb-1.5"
                        >
                          Website
                        </label>
                        <Input
                          id="cta-website"
                          name="website"
                          type="url"
                          placeholder="https://yourbrand.com"
                          value={formData.website}
                          onChange={handleChange}
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full mt-2"
                      >
                        Get my free quote
                        <HiOutlineArrowRight className="h-4 w-4" />
                      </Button>
                    </form>

                    <p className="mt-4 text-xs text-muted-foreground text-center">
                      No commitment required. We&apos;ll never share your information.
                    </p>
                  </>
                )}
              </div>
        </div>
      </div>
    </section>
  )
}
