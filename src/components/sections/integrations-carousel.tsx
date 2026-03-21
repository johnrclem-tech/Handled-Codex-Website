import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Marquee } from "@/components/ui/marquee"
import { MotionPreset } from "@/components/ui/motion-preset"
import { cn } from "@/lib/utils"
import {
  SiShopify,
  SiWoo,
  SiBigcommerce,
  SiWix,
  SiEtsy,
  SiEbay,
  SiWalmart,
  SiSquare,
  SiSquarespace,
  SiTarget,
  SiAftership,
  SiUsps,
  SiUps,
  SiFedex,
  SiTiktok,
  SiDhl,
} from "react-icons/si"
import { FaAmazon, FaMagento } from "react-icons/fa6"
import { HiOutlineTruck } from "react-icons/hi2"

export interface IntegrationLogo {
  name: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  iconClassName?: string
  cardClassName?: string
}

export interface IntegrationsCarouselProps {
  label?: string
  heading: string
  description: string
  bgColor?: string
  integrations?: IntegrationLogo[]
}

export const defaultCarouselIntegrations: IntegrationLogo[] = [
  { name: "Shopify", icon: SiShopify, color: "text-[#96BF48]" },
  { name: "Amazon", icon: FaAmazon, color: "text-[#FF9900]" },
  { name: "WooCommerce", icon: SiWoo, color: "text-[#96588A]" },
  { name: "BigCommerce", icon: SiBigcommerce, color: "text-[#121118]" },
  { name: "Magento", icon: FaMagento, color: "text-[#EE672F]" },
  { name: "Wix", icon: SiWix, color: "text-[#0C6EFC]" },
  { name: "Squarespace", icon: SiSquarespace, color: "text-[#000000]" },
  { name: "Square", icon: SiSquare, color: "text-[#006AFF]" },
  { name: "Etsy", icon: SiEtsy, color: "text-[#F1641E]" },
  { name: "eBay", icon: SiEbay, color: "text-[#E53238]", iconClassName: "h-18 w-auto", cardClassName: "px-6 py-6" },
  { name: "Walmart", icon: SiWalmart, color: "text-[#0071DC]", iconClassName: "h-18 w-auto", cardClassName: "px-6 py-6" },
  { name: "Target", icon: SiTarget, color: "text-[#CC0000]" },
  { name: "TikTok Shop", icon: SiTiktok, color: "text-[#000000]" },
  { name: "USPS", icon: SiUsps, color: "text-[#333366]" },
  { name: "UPS", icon: SiUps, color: "text-[#351C15]" },
  { name: "FedEx", icon: SiFedex, color: "text-[#4D148C]", iconClassName: "h-18 w-auto", cardClassName: "px-6 py-6" },
  { name: "DHL", icon: SiDhl, color: "text-[#FFCC00]", iconClassName: "h-18 w-auto", cardClassName: "px-6 py-6" },
  { name: "Royal Mail", icon: HiOutlineTruck, color: "text-[#E2001A]" },
  { name: "AfterShip", icon: SiAftership, color: "text-[#9B59B6]" },
]

export function IntegrationsCarousel({
  label = "Integrations",
  heading,
  description,
  bgColor,
  integrations = defaultCarouselIntegrations,
}: IntegrationsCarouselProps) {
  const midpoint = Math.ceil(integrations.length / 2)
  const topRow = integrations.slice(0, midpoint)
  const bottomRow = integrations.slice(midpoint)

  return (
    <section id="integrations" className={cn("py-8 sm:py-16 lg:py-24", bgColor)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 space-y-4 text-center sm:mb-16 lg:mb-24">
          <MotionPreset fade slide={{ direction: "down", offset: 50 }} blur transition={{ duration: 0.5 }}>
            <p className="section-label">{label}</p>
          </MotionPreset>
          <MotionPreset
            component="h2"
            className="section-heading"
            fade
            slide={{ direction: "down", offset: 50 }}
            blur
            transition={{ duration: 0.5 }}
            delay={0.3}
          >
            {heading}
          </MotionPreset>
          <MotionPreset
            component="p"
            className="section-description"
            fade
            blur
            slide={{ direction: "down", offset: 50 }}
            transition={{ duration: 0.5 }}
            delay={0.6}
          >
            {description}
          </MotionPreset>
        </div>
        <div className="relative">
          <div className="from-background pointer-events-none absolute inset-y-0 left-0 z-1 w-35 bg-gradient-to-r to-transparent" />
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 z-1 w-35 bg-gradient-to-l to-transparent" />
          <div className="w-full overflow-hidden">
            <Marquee pauseOnHover duration={20} gap={1.5}>
              {topRow.map((logo, index) => (
                <Card key={index} className="rounded-lg border-none shadow-md">
                  <CardContent className={cn("flex h-24 items-center justify-center px-9 py-6", logo.cardClassName)}>
                    <logo.icon className={cn(logo.iconClassName || "max-h-12 max-w-24 h-12 w-auto", logo.color)} />
                  </CardContent>
                </Card>
              ))}
            </Marquee>
          </div>
          <div className="w-full overflow-hidden">
            <Marquee pauseOnHover duration={20} gap={1.5} reverse>
              {bottomRow.map((logo, index) => (
                <Card key={index} className="rounded-lg border-none shadow-md">
                  <CardContent className={cn("flex h-24 items-center justify-center px-9 py-6", logo.cardClassName)}>
                    <logo.icon className={cn(logo.iconClassName || "max-h-12 max-w-24 h-12 w-auto", logo.color)} />
                  </CardContent>
                </Card>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  )
}
