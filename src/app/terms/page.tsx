import type { Metadata } from "next"
import { readFile } from "node:fs/promises"
import path from "node:path"
import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"

export const metadata: Metadata = {
  title: "Terms of Service | Handled",
  description:
    "Terms of Service for Handled, including account terms, fees, service levels, liability limitations, and dispute resolution.",
  alternates: {
    canonical: "https://www.handledcommerce.com/terms",
  },
}

async function getTermsHtml() {
  const filePath = path.join(process.cwd(), "src/content/terms-of-service.html")
  return readFile(filePath, "utf8")
}

export default async function TermsPage() {
  const termsHtml = await getTermsHtml()

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="legal-shell">
        <div className="mx-auto max-w-5xl px-6 pb-16 pt-24 sm:pt-28 lg:px-8">
          <article className="legal-card">
            <div
              className="legal-document is-terms"
              dangerouslySetInnerHTML={{ __html: termsHtml }}
            />
          </article>
        </div>
      </section>

      <Footer />
    </main>
  )
}
