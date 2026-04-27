import { readdir, readFile, stat } from "node:fs/promises"
import path from "node:path"

const projectRoot = process.cwd()
const appDir = path.join(projectRoot, "src", "app")
const siteRoutesPath = path.join(projectRoot, "src", "lib", "site-routes.ts")
const navPath = path.join(projectRoot, "src", "components", "sections", "navbar.tsx")
const footerPath = path.join(projectRoot, "src", "components", "sections", "footer.tsx")

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = await Promise.all(
    entries.map(async (entry) => {
      const resolved = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        return walk(resolved)
      }

      return [resolved]
    })
  )

  return files.flat()
}

function normalizeRoute(routePath) {
  if (routePath === "") {
    return "/"
  }

  return routePath.startsWith("/") ? routePath : `/${routePath}`
}

async function getExistingAppRoutes() {
  const allFiles = await walk(appDir)
  const pageFiles = allFiles.filter((file) => file.endsWith(`${path.sep}page.tsx`))

  return new Set(
    pageFiles.map((file) => {
      const relative = path.relative(appDir, file)
      const route = relative.replace(new RegExp(`${path.sep}page\\.tsx$`), "")
      return route === "page.tsx" ? "/" : normalizeRoute(route.split(path.sep).join("/"))
    })
  )
}

function parseSiteRoutes(source) {
  const routePattern =
    /path:\s*"([^"]+)"[\s\S]*?type:\s*"([^"]+)"[\s\S]*?published:\s*(true|false)[\s\S]*?indexable:\s*(true|false)/g
  const routes = []
  let match = routePattern.exec(source)

  while (match) {
    routes.push({
      path: match[1],
      type: match[2],
      published: match[3] === "true",
      indexable: match[4] === "true",
    })
    match = routePattern.exec(source)
  }

  return routes
}

function extractInternalLinks(source) {
  const links = new Set()
  const hrefJsxPattern = /href="([^"]+)"/g

  let match = hrefJsxPattern.exec(source)
  while (match) {
    const href = match[1]
    if (href.startsWith("/") && !href.startsWith("//")) {
      links.add(href)
    }
    match = hrefJsxPattern.exec(source)
  }

  return links
}

async function ensureFile(filePath) {
  try {
    await stat(filePath)
    return true
  } catch {
    return false
  }
}

async function main() {
  const missingFiles = []
  for (const requiredPath of [siteRoutesPath, navPath, footerPath]) {
    const exists = await ensureFile(requiredPath)
    if (!exists) {
      missingFiles.push(requiredPath)
    }
  }

  if (missingFiles.length > 0) {
    console.error("Missing required files:")
    for (const missing of missingFiles) {
      console.error(`- ${missing}`)
    }
    process.exit(1)
  }

  const [siteRoutesSource, navSource, footerSource] = await Promise.all([
    readFile(siteRoutesPath, "utf8"),
    readFile(navPath, "utf8"),
    readFile(footerPath, "utf8"),
  ])

  const existingRoutes = await getExistingAppRoutes()
  const siteRoutes = parseSiteRoutes(siteRoutesSource)
  const publishedRoutes = siteRoutes.filter((route) => route.published)

  const publishedRouteErrors = publishedRoutes
    .map((route) => route.path)
    .filter((routePath) => !existingRoutes.has(routePath))

  const navAndFooterLinks = new Set([
    ...extractInternalLinks(navSource),
    ...extractInternalLinks(footerSource),
  ])

  const linkErrors = Array.from(navAndFooterLinks).filter((href) => !existingRoutes.has(href))

  if (publishedRouteErrors.length > 0 || linkErrors.length > 0) {
    if (publishedRouteErrors.length > 0) {
      console.error("Published routes missing page files:")
      for (const routePath of publishedRouteErrors) {
        console.error(`- ${routePath}`)
      }
    }

    if (linkErrors.length > 0) {
      console.error("Navbar/Footer links resolving to missing routes:")
      for (const href of linkErrors) {
        console.error(`- ${href}`)
      }
    }

    process.exit(1)
  }

  console.log("Route integrity check passed.")
  console.log(`Published routes checked: ${publishedRoutes.length}`)
  console.log(`Navbar/Footer internal links checked: ${navAndFooterLinks.size}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
