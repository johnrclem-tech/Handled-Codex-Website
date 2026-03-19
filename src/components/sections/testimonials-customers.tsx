"use client"

import { useEffect, useState } from "react"
import { HiStar } from "react-icons/hi2"

const testimonials = [
  {
    name: "Mel Wygal",
    rating: 5,
    title: "Reliability",
    content:
      "If you want top notch service and reliability, Handled Commerce is for you. We have used Hook Logistics/Handled since 2020 and are so happy we made the change. What a difference a great partner makes!",
  },
  {
    name: "Tina Ong",
    rating: 5,
    title: "Transparent",
    content:
      "Fantastic team! I wanted to have a 3PL that was transparent, responsive and priced fairly. Handled Commerce covered everything I was looking for. Chris and Kevin have been very helpful, especially on moments that need a quick turn around.",
  },
  {
    name: "Lisa Selwitz",
    rating: 5,
    title: "Integrity",
    content:
      "Ive had challenging experiences with fulfillment since we started our company over a decade ago. But Handled is the first logistics company that I have been impressed with, that has provided consistent service, and has integrity.",
  },
  {
    name: "Anna Sise",
    rating: 5,
    title: "Responsive",
    content:
      "10/10 - would recommend to any of my brand friends with a fast growing DTC business! Everything from kitting projects to small parcel shipments to pallet deliveries, they have got you covered.",
  },
  {
    name: "Rita Nathani",
    rating: 5,
    title: "Personal Touch",
    content:
      "Extremely satisfied, very happy for the end to end service they provide and the personal touch by Claudia, Shawn and Kevin is always much appreciated.",
  },
]

const customers = [
  "Asamo Group",
  "SkinScience",
  "Wolaco",
  "Cleo+Coco",
  "Viv for Your V",
  "Leaked Labs",
  "HEYDOH",
  "SUPA POWER",
  "Wam! Mints",
  "Laurel's",
  "Aromatix",
  "SPOOGE",
  "Aureum Collective",
  "Infinity Surfboard",
  "Vinted Go",
  "5th Element Gear",
  "Health and Beauty Mart",
  "Strideline LLC",
  "HotPot Queen",
  "Sistersbody.com",
  "Kure Bazaar",
  "Playroom Collective",
  "Brecommerce",
  "50Hertz Tingly Foods",
  "Rookline",
  "Meet Your Staff",
  "Geem",
  "KIMIAS",
  "Rallee Gummies",
  "Custom Filtration Solutions",
]

const firstHalf = customers.slice(0, Math.ceil(customers.length / 2))
const secondHalf = customers.slice(Math.ceil(customers.length / 2))

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <HiStar key={i} className="h-5 w-5 text-amber-400" />
      ))}
    </div>
  )
}

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items]
  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex w-max gap-4 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {doubled.map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="shrink-0 text-xl font-medium text-muted-foreground/70 hover:text-foreground transition-colors duration-200"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  )
}

export function TestimonialsCustomers() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length)
        setIsAnimating(false)
      }, 300)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const activeTestimonial = testimonials[activeIndex]

  return (
    <section id="testimonials" className="py-24 lg:py-32 overflow-hidden">
      {/* Testimonials */}
      <div className="bg-muted/30 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Label */}
          <div className="flex items-center gap-4 mb-16">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              Testimonials
            </span>
            <div className="flex-1 h-px bg-border/60" />
            <span className="font-mono text-xs text-muted-foreground">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(testimonials.length).padStart(2, "0")}
            </span>
          </div>

          {/* Main Quote */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-8">
              <blockquote
                className={`transition-all duration-300 ${
                  isAnimating
                    ? "opacity-0 translate-y-4"
                    : "opacity-100 translate-y-0"
                }`}
              >
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-[1.2] text-foreground">
                  &ldquo;{activeTestimonial.content}&rdquo;
                </p>
              </blockquote>

              {/* Author */}
              <div
                className={`mt-12 flex items-center gap-5 transition-all duration-300 delay-100 ${
                  isAnimating ? "opacity-0" : "opacity-100"
                }`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 border border-blue-200">
                  <span className="text-xl font-semibold text-blue-700">
                    {activeTestimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-lg font-medium text-foreground">
                    {activeTestimonial.name}
                  </p>
                </div>
              </div>
            </div>

            {/* Metric Highlight */}
            <div className="lg:col-span-4 flex flex-col justify-center">
              <div
                className={`p-8 rounded-xl border border-border/60 bg-background transition-all duration-300 ${
                  isAnimating
                    ? "opacity-0 scale-95"
                    : "opacity-100 scale-100"
                }`}
              >
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide block mb-3">
                  {activeTestimonial.title}
                </span>
                <StarRating rating={activeTestimonial.rating} />
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  5-star Google Review
                </p>
              </div>

              {/* Navigation Dots */}
              <div className="flex gap-2 mt-8">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setIsAnimating(true)
                      setTimeout(() => {
                        setActiveIndex(idx)
                        setIsAnimating(false)
                      }, 300)
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === activeIndex
                        ? "w-8 bg-blue-600"
                        : "w-2 bg-border hover:bg-muted-foreground/40"
                    }`}
                    aria-label={`Go to testimonial from ${testimonials[idx].name}`}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* Customer Marquee Label */}
          <div className="mt-24 pt-12 border-t border-border/60">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-8 text-center">
              Trusted by growing brands everywhere
            </p>
          </div>
        </div>

        {/* Full-width marquee */}
        <div>
          <MarqueeRow items={customers} />
        </div>
      </div>
    </section>
  )
}
