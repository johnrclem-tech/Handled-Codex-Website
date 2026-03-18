"use client"

import { useEffect, useState } from "react"

const testimonials = [
  {
    quote:
      "If you want top notch service and reliability, Handled Commerce is for you. We have used Hook Logistics/Handled since 2020 and are so happy we made the change. What a difference a great partner makes!",
    author: "Mel Wygal",
    title: "Reliability",
    metric: "5-star service since 2020",
  },
  {
    quote:
      "Fantastic team! I wanted to have a 3PL that was transparent, responsive and priced fairly. Handled Commerce covered everything I was looking for. Chris and Kevin have been very helpful, especially on moments that need a quick turn around.",
    author: "Tina Ong",
    title: "Transparent",
    metric: "Transparent & fair pricing",
  },
  {
    quote:
      "Ive had challenging experiences with fulfillment since we started our company over a decade ago. But Handled is the first logistics company that I have been impressed with, that has provided consistent service, and has integrity.",
    author: "Lisa Selwitz",
    title: "Integrity",
    metric: "10+ years of trust",
  },
  {
    quote:
      "10/10 - would recommend to any of my brand friends with a fast growing DTC business! Everything from kitting projects to small parcel shipments to pallet deliveries, they have got you covered.",
    author: "Anna Sise",
    title: "Responsive",
    metric: "10/10 recommended",
  },
  {
    quote:
      "Extremely satisfied, very happy for the end to end service they provide and the personal touch by Claudia, Shawn and Kevin is always much appreciated.",
    author: "Rita Nathani",
    title: "Personal Touch",
    metric: "End-to-end service",
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

  const active = testimonials[activeIndex]

  return (
    <section className="relative py-32 lg:py-40 border-t border-foreground/10 lg:pb-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            What people say
          </span>
          <div className="flex-1 h-px bg-foreground/10" />
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
              <p className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-foreground">
                &ldquo;{active.quote}&rdquo;
              </p>
            </blockquote>

            {/* Author */}
            <div
              className={`mt-12 flex items-center gap-6 transition-all duration-300 delay-100 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="w-16 h-16 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center">
                <span className="font-display text-2xl text-foreground">
                  {active.author.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-lg font-medium text-foreground">
                  {active.author}
                </p>
                <p className="text-muted-foreground">Google Review</p>
              </div>
            </div>
          </div>

          {/* Metric Highlight */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div
              className={`p-8 border border-foreground/10 transition-all duration-300 ${
                isAnimating
                  ? "opacity-0 scale-95"
                  : "opacity-100 scale-100"
              }`}
            >
              <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-4">
                Key Result
              </span>
              <p className="font-display text-3xl md:text-4xl text-foreground">
                {active.metric}
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
                  className={`h-2 transition-all duration-300 ${
                    idx === activeIndex
                      ? "w-8 bg-foreground"
                      : "w-2 bg-foreground/20 hover:bg-foreground/40"
                  }`}
                  aria-label={`Go to testimonial from ${testimonials[idx].author}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Customers Marquee Label */}
        <div className="mt-24 pt-12 border-t border-foreground/10">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-8 text-center">
            Trusted by forward-thinking brands
          </p>
        </div>
      </div>

      {/* Full-width marquee */}
      <div className="w-full overflow-hidden">
        <div className="flex gap-16 items-center animate-marquee">
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex gap-16 items-center shrink-0">
              {customers.map((company) => (
                <span
                  key={`${setIdx}-${company}`}
                  className="font-display text-xl md:text-2xl text-foreground/30 whitespace-nowrap hover:text-foreground transition-colors duration-300"
                >
                  {company}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
