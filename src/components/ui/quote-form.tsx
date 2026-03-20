"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  HiOutlineArrowRight,
  HiOutlineRocketLaunch,
} from "react-icons/hi2"

export function QuoteForm() {
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
    <div className="rounded-xl bg-white p-8 shadow-2xl">
      {submitted ? (
        <div className="text-center py-8">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 mb-4">
            <HiOutlineRocketLaunch className="h-7 w-7 text-emerald-600" />
          </div>
          <h3 className="card-title text-foreground">
            Quote request received!
          </h3>
          <p className="mt-2 card-description">
            We&apos;ll get back to you within 1 business day with a custom quote.
          </p>
        </div>
      ) : (
        <>
          <h3 className="card-title text-foreground mb-1">
            Get your free quote
          </h3>
          <p className="card-description mb-6">
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
  )
}
