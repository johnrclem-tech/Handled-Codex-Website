import type { Metadata } from "next"

export type PageType = "seo" | "ppc" | "legal"

export interface OGConfig {
  title: string
  description: string
  type?: "website" | "article"
}

export type SchemaObject = Record<string, unknown>

export type SectionKey =
  | "hero"
  | "services"
  | "platform"
  | "integrationsFloating"
  | "onboardingTimeline"
  | "guarantees"
  | "pricing3"
  | "testimonialsCustomers"
  | "faqCardGrid"
  | "cta"

export interface SectionConfig {
  key: SectionKey
  props?: Record<string, unknown>
}

export interface PageContentModel {
  slug: string
  path: string
  pageType: PageType
  primaryKeyword: string
  secondaryKeywords: string[]
  searchIntent: string
  title: string
  description: string
  canonical: string
  og: OGConfig
  schema: SchemaObject[]
  sections: SectionConfig[]
}

export function metadataFromPageModel(page: PageContentModel): Metadata {
  return {
    title: page.title,
    description: page.description,
    keywords: [page.primaryKeyword, ...page.secondaryKeywords],
    openGraph: {
      title: page.og.title,
      description: page.og.description,
      siteName: "Handled",
      type: page.og.type ?? "website",
    },
    alternates: {
      canonical: page.canonical,
    },
  }
}
