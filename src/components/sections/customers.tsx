"use client"

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
  "Stanluck",
  "Narra",
  "NOMUW",
  "Shop Bazar",
  "Bachca",
  "Hua Wellness",
  "Panble",
  "Le Marké",
  "UNGLOO",
  "The Lucky Ox",
  "Lily Lark",
  "Champ",
  "Almora Botanica",
  "Haus Evolae",
  "STAED",
  "Drop Pillow",
  "House of Harlow",
  "Soto Worldwide",
  "Magdalene Gaul",
  "Kickback World",
  "CourseWorkBooks",
  "STOW Apparel",
  "Hai",
  "Erha",
  "Rosie + Raven",
  "Kavali Campanella Eyewear",
]

const firstHalf = customers.slice(0, Math.ceil(customers.length / 2))
const secondHalf = customers.slice(Math.ceil(customers.length / 2))

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

export function Customers() {
  return (
    <section id="customers" className="py-24 lg:py-32 bg-background overflow-hidden">
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
    </section>
  )
}
