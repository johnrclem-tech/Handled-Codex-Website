import React from "react"
import { HiStar } from "react-icons/hi2"

const testimonials = [
  {
    name: "Mel Wygal",
    rating: 5,
    title: "Reliability",
    content:
      "If you want top notch service and reliability, Handled Commerce is for you.  We have used Hook Logistics/Handled since 2020 and are so happy we made the change.  What a difference a great partner makes!",
  },
  {
    name: "Tina Ong",
    rating: 5,
    title: "Transparent",
    content:
      "Fantastic team!  I wanted to have a 3PL that was transparent, responsive and priced fairly.  Handled Commerce covered everything I was looking for.  Chris and Kevin have been very helpful , especially on moments that need a quick turn around.",
  },
  {
    name: "Lisa Selwitz",
    rating: 5,
    title: "Integrity",
    content:
      "Ive had challenging experiences with fulfillment since we started our company over a decade ago. But Handled is the first logistics company that I have been impressed with, that has provided consistent service, and has integrity. I lost faith in finding a company that I could trust. This is the first!",
  },
  {
    name: "Anna Sise",
    rating: 5,
    title: "Responsive",
    content:
      "10/10 - would recommend to any of my brand friends with a fast growing DTC business! Everything from kitting projects to small parcel shipments to pallet deliveries, they have got you covered. Responsive, professional, and overall amazing team.",
  },
  {
    name: "Rita Nathani",
    rating: 5,
    title: "Personal Touch",
    content:
      "Extremely satisfied, very happy for the end to end service they provide and the personal touch by Claudia, Shawn and Kevin is always much appreciated",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <HiStar key={i} className="h-4 w-4 text-amber-400" />
      ))}
    </div>
  )
}

function Initials({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-semibold text-sm shrink-0">
      {initials}
    </div>
  )
}

function TestimonialCard({ t, featured = false }: { t: (typeof testimonials)[number]; featured?: boolean }) {
  return (
    <div
      className={`rounded-xl border bg-background p-6 hover:shadow-md transition-all duration-300 ${
        featured
          ? "border-blue-200 bg-gradient-to-br from-blue-50/50 to-background shadow-sm"
          : "border-border/60"
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <StarRating rating={t.rating} />
        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
          {t.title}
        </span>
      </div>
      <blockquote className={`text-muted-foreground leading-relaxed ${featured ? "text-base" : "text-sm"}`}>
        &ldquo;{t.content}&rdquo;
      </blockquote>
      <div className="mt-5 flex items-center gap-3 pt-4 border-t border-border/40">
        <Initials name={t.name} />
        <div>
          <p className="text-sm font-medium">{t.name}</p>
          <p className="text-xs text-muted-foreground">Google Review</p>
        </div>
      </div>
    </div>
  )
}

export function Testimonials() {
  // Layout: featured card on the left, 2 stacked on the right (top row)
  // Then 3 cards across the bottom — but we have 5, so: 1 featured + 2 stacked | 2 bottom centered
  const featured = testimonials[2] // Lisa — longest, most compelling review
  const topRight = [testimonials[0], testimonials[1]]
  const bottom = [testimonials[3], testimonials[4]]

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 mb-3">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Trusted by brands that demand more
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Don&apos;t take our word for it — hear from the brands that trust Handled
            with their fulfillment.
          </p>
        </div>

        {/* Top row: featured left + 2 stacked right */}
        <div className="grid lg:grid-cols-5 gap-6 mb-6">
          <div className="lg:col-span-3 flex">
            <div className="w-full flex flex-col">
              <TestimonialCard t={featured} featured />
            </div>
          </div>
          <div className="lg:col-span-2 grid gap-6">
            {topRight.map((t) => (
              <TestimonialCard key={t.name} t={t} />
            ))}
          </div>
        </div>

        {/* Bottom row: 2 cards centered */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {bottom.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
