import type { Metadata } from "next"
import { readFile } from "node:fs/promises"
import path from "node:path"
import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"

export const metadata: Metadata = {
  title: "Privacy Policy | Handled",
  description:
    "Privacy Policy for Handled, including what data we collect, how we use and share it, data retention, and your rights.",
  alternates: {
    canonical: "https://www.handledcommerce.com/privacy",
  },
}

async function getPrivacyHtml() {
  const filePath = path.join(process.cwd(), "src/content/privacy-policy.html")
  return readFile(filePath, "utf8")
}

export default async function PrivacyPage() {
  const privacyHtml = await getPrivacyHtml()

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="legal-shell">
        <div className="mx-auto max-w-5xl px-6 pb-16 pt-24 sm:pt-28 lg:px-8">
          <article
            className="legal-document is-privacy"
            dangerouslySetInnerHTML={{ __html: privacyHtml }}
          />
        </div>
      </section>

      <Footer />
    </main>
  )
}
