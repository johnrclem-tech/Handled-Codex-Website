import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HiOutlineArrowRight } from "react-icons/hi2"

export function CTA() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative rounded-2xl bg-primary overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative px-8 py-16 lg:px-16 lg:py-20 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground tracking-tight">
              Ready to scale your fulfillment?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              Join the brands that trust Handled to ship faster, smarter, and with
              performance guarantees that put your business first.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                asChild
              >
                <Link href="/contact-sales">
                  Talk to sales
                  <HiOutlineArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                asChild
              >
                <Link href="#pricing">View pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
