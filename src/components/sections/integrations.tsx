import React from "react"
import * as motion from "motion/react-client"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BounceButton } from "@/components/ui/bounce-button"
import { MotionPreset } from "@/components/ui/motion-preset"
import { Magnetic } from "@/components/ui/magnet-effect"
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

export interface IntegrationItem {
  name: string
  icon: React.ComponentType<{ className?: string }>
  color: string
}

export interface IntegrationIconMotion {
  integration: IntegrationItem
  duration: number
  className: string
  sizeClass: string
}

export interface IntegrationsProps {
  label?: string
  heading: string
  description: string
  ctaText?: string
  ctaHref?: string
  integrations?: IntegrationIconMotion[]
}

export const defaultIntegrations: IntegrationItem[] = [
  { name: "Shopify", icon: SiShopify, color: "text-[#96BF48]" },
  { name: "Amazon", icon: FaAmazon, color: "text-[#FF9900]" },
  { name: "WooCommerce", icon: SiWoo, color: "text-[#96588A]" },
  { name: "BigCommerce", icon: SiBigcommerce, color: "text-[#121118]" },
  { name: "Magento", icon: FaMagento, color: "text-[#EE672F]" },
  { name: "Wix", icon: SiWix, color: "text-[#0C6EFC]" },
  { name: "Squarespace", icon: SiSquarespace, color: "text-[#000000]" },
  { name: "Square", icon: SiSquare, color: "text-[#006AFF]" },
  { name: "Etsy", icon: SiEtsy, color: "text-[#F1641E]" },
  { name: "eBay", icon: SiEbay, color: "text-[#E53238]" },
  { name: "Walmart", icon: SiWalmart, color: "text-[#0071DC]" },
  { name: "Target", icon: SiTarget, color: "text-[#CC0000]" },
  { name: "TikTok Shop", icon: SiTiktok, color: "text-[#000000]" },
  { name: "USPS", icon: SiUsps, color: "text-[#333366]" },
  { name: "UPS", icon: SiUps, color: "text-[#351C15]" },
  { name: "FedEx", icon: SiFedex, color: "text-[#4D148C]" },
  { name: "DHL", icon: SiDhl, color: "text-[#FFCC00]" },
  { name: "Royal Mail", icon: HiOutlineTruck, color: "text-[#E2001A]" },
  { name: "AfterShip", icon: SiAftership, color: "text-[#9B59B6]" },
]

const defaultIconMotion: IntegrationIconMotion[] = [
  // Left icons
  {
    integration: { name: "Shopify", icon: SiShopify, color: "text-[#96BF48]" },
    duration: 0.8,
    className: "absolute -top-14 left-50",
    sizeClass: "size-16",
  },
  {
    integration: { name: "Amazon", icon: FaAmazon, color: "text-[#FF9900]" },
    duration: 0.5,
    className: "absolute top-0 left-8",
    sizeClass: "size-20.5",
  },
  {
    integration: { name: "WooCommerce", icon: SiWoo, color: "text-[#96588A]" },
    duration: 1,
    className: "absolute top-40 left-42",
    sizeClass: "size-16",
  },
  {
    integration: { name: "BigCommerce", icon: SiBigcommerce, color: "text-[#121118]" },
    duration: 0.6,
    className: "absolute bottom-60 -left-1",
    sizeClass: "size-13",
  },
  // Right icons
  {
    integration: { name: "FedEx", icon: SiFedex, color: "text-[#4D148C]" },
    duration: 0.8,
    className: "absolute -top-14 right-50",
    sizeClass: "size-16",
  },
  {
    integration: { name: "UPS", icon: SiUps, color: "text-[#351C15]" },
    duration: 1,
    className: "absolute top-0 right-8",
    sizeClass: "size-20.5",
  },
  {
    integration: { name: "USPS", icon: SiUsps, color: "text-[#333366]" },
    duration: 0.5,
    className: "absolute top-40 right-42",
    sizeClass: "size-16",
  },
  {
    integration: { name: "DHL", icon: SiDhl, color: "text-[#FFCC00]" },
    duration: 0.7,
    className: "absolute -right-1 bottom-60",
    sizeClass: "size-13",
  },
]

function IntegrationIconBubble({
  integration,
  sizeClass,
}: {
  integration: IntegrationItem
  sizeClass: string
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full border border-border bg-card shadow-md",
        sizeClass
      )}
      title={integration.name}
    >
      <integration.icon className={cn("h-1/2 w-1/2", integration.color)} />
    </div>
  )
}

export function Integrations({
  label = "Integrations",
  heading,
  description,
  ctaText = "Get a fulfillment quote",
  ctaHref = "#get-a-quote",
  integrations = defaultIconMotion,
}: IntegrationsProps) {
  return (
    <section id="integrations" className="flex-1 overflow-hidden py-24 lg:py-32">
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 sm:gap-16 sm:px-6 lg:gap-24 lg:px-8">
        {/* Section content */}
        <div className="flex max-w-3xl flex-col items-center gap-4 text-center">
          <MotionPreset fade slide={{ direction: "down", offset: 50 }} transition={{ duration: 0.5, ease: "easeOut" }}>
            <p className="section-label">{label}</p>
          </MotionPreset>

          <MotionPreset
            component="h2"
            fade
            slide={{ direction: "down", offset: 50 }}
            delay={0.3}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="section-heading"
          >
            {heading}
          </MotionPreset>

          <MotionPreset
            component="p"
            fade
            slide={{ direction: "down", offset: 50 }}
            delay={0.6}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="section-description"
          >
            {description}
          </MotionPreset>

          <MotionPreset
            fade
            slide={{ direction: "down", offset: 50 }}
            delay={0.9}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-4"
          >
            <BounceButton className="z-10 h-10 gap-3 rounded-lg text-base has-[>svg]:px-6">
              <Link href={ctaHref} className="flex items-center gap-2">
                {ctaText} <ArrowRightIcon />
              </Link>
            </BounceButton>
            <Button size="lg" asChild className="bg-primary/10 hover:bg-primary/20 text-primary rounded-lg text-base">
              <Link href="#integrations">Learn more</Link>
            </Button>
          </MotionPreset>
        </div>

        {/* Floating integration icons */}
        <MotionPreset fade delay={1.2}>
          {integrations.map((item, index) => (
            <motion.div
              key={index}
              className={cn("max-lg:hidden", item.className)}
              initial={{ scale: 1.2 }}
              animate={{ scale: [1.2, 1.0, 1.2] }}
              transition={{
                duration: 3,
                delay: Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Magnetic strength={0.5} range={120}>
                <IntegrationIconBubble
                  integration={item.integration}
                  sizeClass={item.sizeClass}
                />
              </Magnetic>
            </motion.div>
          ))}
        </MotionPreset>
      </div>
    </section>
  )
}
