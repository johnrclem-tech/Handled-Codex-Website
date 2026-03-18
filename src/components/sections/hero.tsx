import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { HiOutlineArrowRight, HiOutlineBolt } from "react-icons/hi2"
import { OrderDashboard } from "@/components/icons/order-dashboard"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-blue-50/80 to-transparent rounded-full blur-3xl -z-10" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Copy */}
          <div className="max-w-2xl">
            <Badge variant="secondary" className="mb-6 gap-1.5 px-3 py-1 text-xs font-medium">
              <HiOutlineBolt className="h-3.5 w-3.5 text-blue-500" />
              Now offering 2-day ground nationwide
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Fulfillment infrastructure for{" "}
              <span className="gradient-text">modern brands</span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg">
              Ship faster, scale smarter. Handled gives ecommerce brands the warehouse network,
              technology, and performance guarantees to deliver exceptional customer experiences.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button size="lg" asChild>
                <Link href="/contact-sales">
                  Start shipping
                  <HiOutlineArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#platform">See the platform</Link>
              </Button>
            </div>

            {/* Social proof stats */}
            <div className="mt-12 flex gap-8 border-t border-border pt-8">
              <div>
                <p className="text-2xl font-bold">99.9%</p>
                <p className="text-sm text-muted-foreground">Pick accuracy</p>
              </div>
              <div>
                <p className="text-2xl font-bold">100%</p>
                <p className="text-sm text-muted-foreground">Same-day shipping</p>
              </div>
              <div>
                <p className="text-2xl font-bold">2-day</p>
                <p className="text-sm text-muted-foreground">Ground delivery</p>
              </div>
            </div>
          </div>

          {/* Right - Dashboard visualization */}
          <div className="hidden lg:block">
            <OrderDashboard />
          </div>
        </div>
      </div>
    </section>
  )
}
