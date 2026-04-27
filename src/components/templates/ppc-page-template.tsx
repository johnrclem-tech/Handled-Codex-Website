import type { ReactNode } from "react"
import Link from "next/link"
import { Layers } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PPCPageTemplateProps {
  children: ReactNode
  schema?: Record<string, unknown>[]
}

export function PPCPageTemplate({ children, schema = [] }: PPCPageTemplateProps) {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Layers className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold tracking-tight">Handled</span>
            </div>
          </Link>

          <Button asChild size="sm">
            <Link href="#get-a-quote">Get a Quote</Link>
          </Button>
        </div>
      </header>
      <main>{children}</main>
      {schema.map((schemaItem, index) => (
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaItem) }}
          key={`schema-${index}`}
          type="application/ld+json"
        />
      ))}
    </>
  )
}
