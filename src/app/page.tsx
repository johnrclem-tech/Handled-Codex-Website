import type { Metadata } from "next"
import { homeSEOPage } from "@/content/pages/home-seo"
import { metadataFromPageModel } from "@/lib/page-model"
import { renderPageSections } from "@/lib/section-registry"
import { SEOPageTemplate } from "@/components/templates/seo-page-template"

export const metadata: Metadata = metadataFromPageModel(homeSEOPage)

export default function Home() {
  return (
    <SEOPageTemplate schema={homeSEOPage.schema}>
      {renderPageSections(homeSEOPage.sections)}
    </SEOPageTemplate>
  )
}
