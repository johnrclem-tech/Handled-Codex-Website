import React from "react"
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
  SiAftership,
  SiUsps,
  SiUps,
  SiFedex,
  SiDhl,
} from "react-icons/si"
import { FaAmazon } from "react-icons/fa6"
import { HiOutlineTruck } from "react-icons/hi2"

export interface DiamondIcon {
  name: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  iconClassName?: string
}

export interface DiamondColumn {
  icons: DiamondIcon[]
  className?: string
}

export interface IntegrationsDiamondProps {
  heading: string
  description: string
  bgColor?: string
  columns?: DiamondColumn[]
}

const defaultColumns: DiamondColumn[] = [
  {
    icons: [
      { name: "Shopify", icon: SiShopify, color: "text-[#96BF48]" },
    ],
  },
  {
    icons: [
      { name: "Amazon", icon: FaAmazon, color: "text-[#FF9900]" },
      { name: "eBay", icon: SiEbay, color: "text-[#E53238]", iconClassName: "h-14 w-auto max-md:h-11" },
    ],
    className: "sm:flex-col",
  },
  {
    icons: [
      { name: "WooCommerce", icon: SiWoo, color: "text-[#96588A]" },
      { name: "FedEx", icon: SiFedex, color: "text-[#4D148C]", iconClassName: "h-14 w-auto max-md:h-11" },
      { name: "Walmart", icon: SiWalmart, color: "text-[#0071DC]", iconClassName: "h-14 w-auto max-md:h-11" },
    ],
    className: "sm:flex-col",
  },
  {
    icons: [
      { name: "UPS", icon: SiUps, color: "text-[#351C15]" },
      { name: "USPS", icon: SiUsps, color: "text-[#333366]" },
    ],
    className: "sm:flex-col",
  },
  {
    icons: [
      { name: "DHL", icon: SiDhl, color: "text-[#FFCC00]", iconClassName: "h-14 w-auto max-md:h-11" },
    ],
  },
]

export function IntegrationsDiamond({
  heading,
  description,
  bgColor,
  columns = defaultColumns,
}: IntegrationsDiamondProps) {
  return (
    <section id="integrations" className={cn("py-8 sm:py-16 lg:py-24", bgColor)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex gap-12 max-xl:flex-col sm:gap-16 lg:gap-24 xl:items-center">
          <div className="space-y-4">
            <h2 className="section-heading">{heading}</h2>
            <p className="section-description">{description}</p>
          </div>
          <div className="flex items-center justify-center gap-4 max-sm:flex-col">
            {columns.map((column, index) => (
              <div key={index} className={cn("flex gap-4", column.className)}>
                {column.icons.map((item, iconIndex) => (
                  <div
                    key={iconIndex}
                    className="bg-card flex w-32 items-center justify-center rounded-xl px-1.5 py-6 shadow-md max-md:w-27 max-sm:py-5"
                    title={item.name}
                  >
                    <item.icon className={cn(item.iconClassName || "max-h-12 max-w-24 h-12 w-auto max-md:max-h-10 max-md:max-w-20", "shrink-0", item.color)} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
