export interface InstructionSet {
  slug: string
  title: string
  description: string
  path: string
  category: "agent" | "website" | "marketing" | "workflow"
}

export const instructionSets: InstructionSet[] = [
  {
    slug: "agent-index",
    title: "Agent Index",
    description: "The front-door file agents read before working in this project.",
    path: "AGENTS.md",
    category: "agent",
  },
  {
    slug: "website-build-rules",
    title: "Website Design Rules",
    description: "Design-system rules for ShadCN, typography, reusable sections, components, and charts.",
    path: "docs/instructions/website-build-rules.md",
    category: "website",
  },
  {
    slug: "handled-brand-and-icp",
    title: "Handled Brand And ICP",
    description: "Source of truth for Handled positioning, ICP, differentiation, proof points, and messaging rules.",
    path: "docs/instructions/handled-brand-and-icp.md",
    category: "marketing",
  },
  {
    slug: "seo",
    title: "SEO Instructions",
    description: "Draft workflow for organic search strategy, metadata, schema, and indexability.",
    path: "docs/instructions/seo.md",
    category: "marketing",
  },
  {
    slug: "landing-pages",
    title: "Landing Page Instructions",
    description: "Draft workflow for landing page strategy, offer structure, section planning, and conversion flow.",
    path: "docs/instructions/landing-pages.md",
    category: "marketing",
  },
  {
    slug: "google-ads",
    title: "Google Ads Instructions",
    description: "Canonical RSA asset generation and keyword ranking workflow.",
    path: "docs/instructions/google-ads.md",
    category: "marketing",
  },
  {
    slug: "github-vercel-workflow",
    title: "GitHub And Vercel Workflow",
    description: "Local preview, build, push, and deploy process.",
    path: "docs/instructions/github-vercel-workflow.md",
    category: "workflow",
  },
]

export function getInstructionSet(slug: string) {
  return instructionSets.find((instruction) => instruction.slug === slug)
}
