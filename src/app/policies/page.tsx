import type { Metadata } from "next"
import { readFile } from "node:fs/promises"
import path from "node:path"
import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"

export const metadata: Metadata = {
  title: "Policies | Handled",
  description:
    "Handled policy library, including prohibited and restricted inventory rules and other operational policies.",
  alternates: {
    canonical: "https://www.handledcommerce.com/policies",
  },
}

async function getPolicyHtml(fileName: string) {
  const filePath = path.join(process.cwd(), "src/content", fileName)
  return readFile(filePath, "utf8")
}

export default async function PoliciesPage() {
  const [prohibitedPolicyHtml, receivingPolicyHtml, dpaHtml] = await Promise.all([
    getPolicyHtml("policy-prohibited-restricted.html"),
    getPolicyHtml("policy-standard-receiving.html"),
    getPolicyHtml("policy-data-processing-agreement.html"),
  ])

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="legal-shell">
        <div className="mx-auto max-w-5xl px-6 pb-16 pt-24 sm:pt-28 lg:px-8">
          <section className="policy-entry">
            <article
              className="legal-document is-policy"
              dangerouslySetInnerHTML={{ __html: prohibitedPolicyHtml }}
            />
          </section>

          <section className="policy-entry">
            <article
              className="legal-document is-policy"
              dangerouslySetInnerHTML={{ __html: receivingPolicyHtml }}
            />
          </section>

          <section className="policy-entry">
            <article
              className="legal-document is-policy"
              dangerouslySetInnerHTML={{ __html: dpaHtml }}
            />
          </section>
        </div>
      </section>

      <Footer />
    </main>
  )
}
