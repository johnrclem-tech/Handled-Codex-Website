import type { ReactNode } from "react"
import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"

interface SEOPageTemplateProps {
  children: ReactNode
  schema?: Record<string, unknown>[]
}

export function SEOPageTemplate({ children, schema = [] }: SEOPageTemplateProps) {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      {schema.map((schemaItem, index) => (
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaItem) }}
          key={`schema-${index}`}
          type="application/ld+json"
        />
      ))}
      <Footer />
    </>
  )
}
