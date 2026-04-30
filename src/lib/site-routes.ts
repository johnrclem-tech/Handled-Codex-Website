export const SITE_URL = "https://www.handledcommerce.com"

export type SiteRouteType = "seo" | "ppc" | "legal" | "utility"

export interface SiteRoute {
  path: string
  type: SiteRouteType
  published: boolean
  indexable: boolean
  title?: string
  description?: string
}

export const SITE_ROUTES: SiteRoute[] = [
  {
    path: "/",
    type: "seo",
    published: true,
    indexable: true,
    title: "Handled — Fulfillment Infrastructure for Modern Brands",
    description:
      "Ship faster, scale smarter. Handled gives ecommerce brands the warehouse network, technology, and performance guarantees to deliver exceptional customer experiences.",
  },
  {
    path: "/ppc/ecommerce-fulfillment",
    type: "ppc",
    published: true,
    indexable: true,
    title: "Ecommerce Fulfillment Partner | Handled",
    description:
      "Scale ecommerce fulfillment with same-day shipping, 99.9% accuracy, and bi-coastal coverage.",
  },
  {
    path: "/services/ecommerce-fulfillment",
    type: "seo",
    published: true,
    indexable: true,
  },
  {
    path: "/industries/apparel-fulfillment",
    type: "seo",
    published: true,
    indexable: true,
  },
  {
    path: "/industries/cosmetics-fulfillment",
    type: "seo",
    published: true,
    indexable: true,
  },
  {
    path: "/integrations/shopify-fulfillment",
    type: "seo",
    published: true,
    indexable: true,
  },
  {
    path: "/terms",
    type: "legal",
    published: true,
    indexable: true,
    title: "Terms of Service | Handled",
    description:
      "Terms of Service for Handled, including account terms, fees, service levels, liability limitations, and dispute resolution.",
  },
  {
    path: "/privacy",
    type: "legal",
    published: true,
    indexable: true,
    title: "Privacy Policy | Handled",
    description:
      "Privacy Policy for Handled, including what data we collect, how we use and share it, data retention, and your rights.",
  },
  {
    path: "/policies",
    type: "legal",
    published: true,
    indexable: true,
    title: "Policies | Handled",
    description:
      "Handled policy library, including prohibited and restricted inventory rules and other operational policies.",
  },
  {
    path: "/internal",
    type: "utility",
    published: true,
    indexable: false,
    title: "Internal Marketing Workspace | Handled",
    description:
      "Internal home for Handled marketing tools and website operations.",
  },
  {
    path: "/internal/keyword-analysis",
    type: "utility",
    published: true,
    indexable: false,
    title: "Internal Keyword Analysis | Handled",
    description:
      "Internal dashboard for keyword performance grouped by ad group.",
  },
  {
    path: "/internal/instructions",
    type: "utility",
    published: true,
    indexable: false,
    title: "Internal Instructions | Handled",
    description:
      "Internal instruction manager for website, marketing, GitHub, Vercel, and Google Ads rules.",
  },
  { path: "/internal/instructions/agent-index", type: "utility", published: true, indexable: false },
  { path: "/internal/instructions/website-build-rules", type: "utility", published: true, indexable: false },
  { path: "/internal/instructions/seo", type: "utility", published: true, indexable: false },
  { path: "/internal/instructions/landing-pages", type: "utility", published: true, indexable: false },
  { path: "/internal/instructions/google-ads", type: "utility", published: true, indexable: false },
  { path: "/internal/instructions/github-vercel-workflow", type: "utility", published: true, indexable: false },
  { path: "/application-shell-11", type: "utility", published: true, indexable: false },
  { path: "/section-test", type: "utility", published: true, indexable: false },

  // Planned/unpublished routes referenced in IA
  { path: "/services/b2b-fulfillment", type: "seo", published: false, indexable: false },
  { path: "/services/omnichannel-fulfillment", type: "seo", published: false, indexable: false },
  { path: "/services/pick-and-pack", type: "seo", published: false, indexable: false },
  { path: "/services/returns", type: "seo", published: false, indexable: false },
  { path: "/integrations/amazon", type: "seo", published: false, indexable: false },
  { path: "/integrations/woocommerce", type: "seo", published: false, indexable: false },
  { path: "/integrations/bigcommerce", type: "seo", published: false, indexable: false },
  { path: "/integrations/shipstation", type: "seo", published: false, indexable: false },
  { path: "/locations/los-angeles", type: "seo", published: false, indexable: false },
  { path: "/locations/new-jersey", type: "seo", published: false, indexable: false },
  { path: "/locations/east-coast", type: "seo", published: false, indexable: false },
  { path: "/locations/west-coast", type: "seo", published: false, indexable: false },
  { path: "/contact-sales", type: "seo", published: false, indexable: false },
]

export const publishedRoutes = SITE_ROUTES.filter((route) => route.published)

export const indexableRoutes = SITE_ROUTES.filter(
  (route) => route.published && route.indexable
)

export function canonicalForPath(path: string) {
  return `${SITE_URL}${path}`
}

export function isPublishedPath(path: string) {
  return SITE_ROUTES.some((route) => route.path === path && route.published)
}

export function routeByPath(path: string) {
  return SITE_ROUTES.find((route) => route.path === path)
}
