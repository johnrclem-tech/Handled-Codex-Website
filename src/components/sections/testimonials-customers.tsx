"use client"

import React, { useRef, useState, useEffect, useCallback } from "react"
import { HiStar, HiChevronLeft, HiChevronRight } from "react-icons/hi2"

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
            className="shrink-0 rounded-lg border border-border/50 bg-background px-5 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-blue-200 hover:bg-blue-50/50 transition-colors duration-200"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  )
}

export function TestimonialsCustomers() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const autoScrollTimer = useRef<ReturnType<typeof setInterval> | null>(null)

  const checkScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 4)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)

    const cardWidth = el.scrollWidth / testimonials.length
    const index = Math.round(el.scrollLeft / cardWidth)
    setActiveIndex(Math.min(index, testimonials.length - 1))
  }, [])

  const scrollToNext = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 4
    if (atEnd) {
      el.scrollTo({ left: 0, behavior: "smooth" })
    } else {
      const cardWidth = el.querySelector<HTMLElement>(":scope > div")?.offsetWidth ?? 360
      el.scrollBy({ left: cardWidth + 24, behavior: "smooth" })
    }
  }, [])

  useEffect(() => {
    if (isPaused) {
      if (autoScrollTimer.current) clearInterval(autoScrollTimer.current)
      return
    }
    autoScrollTimer.current = setInterval(scrollToNext, 4000)
    return () => {
      if (autoScrollTimer.current) clearInterval(autoScrollTimer.current)
    }
  }, [isPaused, scrollToNext])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    checkScroll()
    el.addEventListener("scroll", checkScroll, { passive: true })
    window.addEventListener("resize", checkScroll)
    return () => {
      el.removeEventListener("scroll", checkScroll)
      window.removeEventListener("resize", checkScroll)
    }
  }, [checkScroll])

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.querySelector<HTMLElement>(":scope > div")?.offsetWidth ?? 360
    const gap = 24
    el.scrollBy({
      left: direction === "left" ? -(cardWidth + gap) : cardWidth + gap,
      behavior: "smooth",
    })
  }

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current
    if (!el) return
    const card = el.children[index] as HTMLElement | undefined
    if (card) {
      el.scrollTo({ left: card.offsetLeft - 24, behavior: "smooth" })
    }
  }

  return (
    <section id="testimonials" className="py-24 lg:py-32 overflow-hidden">
      {/* Testimonials */}
      <div className="bg-muted/30 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-sm font-semibold text-blue-600 mb-3">Testimonials</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Trusted by brands that demand more
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Don&apos;t take our word for it — hear from the brands that trust Handled
              with their fulfillment.
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pl-6 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+2rem))] pr-6 pb-2 -mb-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="snap-start shrink-0 w-[min(85vw,360px)] rounded-xl border border-border/60 bg-background p-6 hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <StarRating rating={t.rating} />
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                    {t.title}
                  </span>
                </div>
                <blockquote className="text-sm text-muted-foreground leading-relaxed flex-1">
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
            ))}
            <div className="shrink-0 w-1" aria-hidden="true" />
          </div>

          {/* Fade edges */}
          {canScrollLeft && (
            <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-muted/30 to-transparent pointer-events-none" />
          )}
          {canScrollRight && (
            <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-muted/30 to-transparent pointer-events-none" />
          )}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="h-9 w-9 rounded-full border border-border/60 bg-background flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous testimonial"
          >
            <HiChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                onClick={() => scrollToIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "w-6 bg-blue-600" : "w-2 bg-border hover:bg-muted-foreground/40"
                }`}
                aria-label={`Go to testimonial from ${t.name}`}
              />
            ))}
          </div>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="h-9 w-9 rounded-full border border-border/60 bg-background flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next testimonial"
          >
            <HiChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Customers */}
      <div className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm font-semibold text-blue-600 mb-3">Our Customers</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Trusted by growing brands everywhere
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From emerging DTC startups to established brands, businesses across every
              category trust Handled with their fulfillment.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <MarqueeRow items={firstHalf} />
          <MarqueeRow items={secondHalf} reverse />
        </div>
      </div>
    </section>
  )
}
