import type { Metadata } from "next"
import { PPCPageTemplate } from "@/components/templates/ppc-page-template"
import { ppcEcommerceFulfillmentPage } from "@/content/pages/ppc-ecommerce-fulfillment"
import { metadataFromPageModel } from "@/lib/page-model"
import { renderPageSections } from "@/lib/section-registry"

export const metadata: Metadata = metadataFromPageModel(ppcEcommerceFulfillmentPage)

export default function PPCFulfillmentPage() {
  return (
    <PPCPageTemplate schema={ppcEcommerceFulfillmentPage.schema}>
      {renderPageSections(ppcEcommerceFulfillmentPage.sections)}
    </PPCPageTemplate>
  )
}
