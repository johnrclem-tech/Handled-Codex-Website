import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { HiOutlineArrowRight, HiOutlineBolt } from "react-icons/hi2"
import { OrderDashboard } from "@/components/icons/order-dashboard"

interface HeroStat {
  value: string
  label: string
}

interface HeroProps {
  badgeText?: string
  headingPrefix?: string
  headingHighlight?: string
  description?: string
  primaryCtaText?: string
  primaryCtaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  stats?: HeroStat[]
}

const defaultStats: HeroStat[] = [
  { value: "99.9%", label: "Pick accuracy" },
  { value: "100%", label: "Same-day shipping" },
  { value: "2-day", label: "Ground delivery" },
]

export function Hero({
  badgeText = "Now offering 2-day ground nationwide",
  headingPrefix = "Fulfillment infrastructure for",
  headingHighlight = "modern brands",
  description =
    "Ship faster, scale smarter. Handled gives ecommerce brands the warehouse network, technology, and performance guarantees to deliver exceptional customer experiences.",
  primaryCtaText = "Get a Quote",
  primaryCtaHref = "#get-a-quote",
  secondaryCtaText = "See the platform",
  secondaryCtaHref = "#platform",
  stats = defaultStats,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 lg:pb-32 lg:pt-40">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute left-1/2 top-0 -z-10 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-b from-blue-50/80 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="max-w-2xl">
            <Badge variant="secondary" className="mb-6 gap-1.5 px-3 py-1 text-xs font-medium">
              <HiOutlineBolt className="h-3.5 w-3.5 text-blue-500" />
              {badgeText}
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight leading-[1.1] sm:text-5xl lg:text-6xl">
              {headingPrefix}{" "}
              <span className="gradient-text">{headingHighlight}</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href={primaryCtaHref}>
                  {primaryCtaText}
                  <HiOutlineArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href={secondaryCtaHref}>{secondaryCtaText}</Link>
              </Button>
            </div>

            <div className="mt-12 flex gap-8 border-t border-border pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <OrderDashboard />
          </div>
        </div>
      </div>
    </section>
  )
}
