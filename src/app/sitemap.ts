import type { MetadataRoute } from "next"
import { canonicalForPath, indexableRoutes } from "@/lib/site-routes"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return indexableRoutes.map((route) => ({
    url: canonicalForPath(route.path),
    lastModified: now,
    changeFrequency: route.path === "/" ? "weekly" : "monthly",
    priority: route.path === "/" ? 1 : 0.8,
  }))
}
