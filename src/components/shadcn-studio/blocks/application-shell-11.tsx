"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import type { ComponentType, ReactNode, SVGProps } from "react"
import {
  ActivityIcon,
  BarChart3Icon,
  BellIcon,
  BookOpenTextIcon,
  ChevronRightIcon,
  FileTextIcon,
  HomeIcon,
  LanguagesIcon,
  LayoutDashboardIcon,
  MegaphoneIcon,
  SearchIcon,
  SettingsIcon,
  SparklesIcon,
  TargetIcon,
  UsersIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import LogoSvg from "@/assets/svg/logo"
import SearchDialog from "@/components/shadcn-studio/blocks/dialog-search"
import LanguageDropdown from "@/components/shadcn-studio/blocks/dropdown-language"
import ActivityDialog from "@/components/shadcn-studio/blocks/dialog-activity"
import NotificationDropdown from "@/components/shadcn-studio/blocks/dropdown-notification"
import ProfileDropdown from "@/components/shadcn-studio/blocks/dropdown-profile"
import { cn } from "@/lib/utils"

type MenuSubItem = {
  label: string
  href: string
  badge?: string
}

type MenuItem = {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  label: string
  href?: string
  badge?: string
  items?: MenuSubItem[]
}

const primaryMenuItems: MenuItem[] = [
  {
    icon: LayoutDashboardIcon,
    label: "Internal Home",
    href: "/internal",
  },
  {
    icon: BarChart3Icon,
    label: "Keyword Analysis",
    href: "/internal/keyword-analysis",
  },
  {
    icon: BookOpenTextIcon,
    label: "Instructions",
    href: "/internal/instructions",
    items: [
      { label: "Agent Index", href: "/internal/instructions/agent-index" },
      { label: "Website Design", href: "/internal/instructions/website-build-rules" },
      { label: "Brand And ICP", href: "/internal/instructions/handled-brand-and-icp" },
      { label: "SEO", href: "/internal/instructions/seo" },
      { label: "Landing Pages", href: "/internal/instructions/landing-pages" },
      { label: "Google Ads", href: "/internal/instructions/google-ads" },
      { label: "GitHub/Vercel", href: "/internal/instructions/github-vercel-workflow" },
    ],
  },
  {
    icon: MegaphoneIcon,
    label: "Google Ads",
    items: [
      { label: "Ad Builder", href: "#", badge: "Soon" },
      { label: "RSA Instructions", href: "/internal/instructions/google-ads" },
    ],
  },
  {
    icon: FileTextIcon,
    label: "Landing Pages",
    items: [
      { label: "PPC Pages", href: "/ppc/ecommerce-fulfillment" },
      { label: "SEO Pages", href: "/services/ecommerce-fulfillment" },
    ],
  },
]

const usefulPagesItems: MenuItem[] = [
  {
    icon: UsersIcon,
    label: "Public Website",
    href: "/",
  },
  {
    icon: SettingsIcon,
    label: "Section Library",
    href: "/section-test",
  },
]

const toolCards = [
  {
    icon: BarChart3Icon,
    title: "Keyword Analysis",
    description: "Analyze raw Google Ads keyword CSV data by ad group, quality, relevance, and available impressions.",
    href: "/internal/keyword-analysis",
  },
  {
    icon: MegaphoneIcon,
    title: "Google Ads Builder",
    description: "Use the canonical ad instructions to draft RSA assets from ranked keyword opportunities.",
    href: "#",
  },
  {
    icon: TargetIcon,
    title: "Landing Page Planner",
    description: "Plan PPC and SEO page structures using shared section rules and shadcn components.",
    href: "#",
  },
  {
    icon: BookOpenTextIcon,
    title: "Instruction Manager",
    description: "View and update the project rules that guide agents, website builds, ads, and deployment.",
    href: "/internal/instructions",
  },
]

const SidebarGroupedMenuItems = ({
  data,
  groupLabel,
  openMenuLabel,
  onOpenMenuChange,
}: {
  data: MenuItem[]
  groupLabel?: string
  openMenuLabel: string | null
  onOpenMenuChange: (label: string | null) => void
}) => {
  const pathname = usePathname()

  return (
    <SidebarGroup className="pl-0 pr-4">
      {groupLabel && <SidebarGroupLabel className="px-4">{groupLabel}</SidebarGroupLabel>}
      <SidebarGroupContent>
        <SidebarMenu>
          {data.map((item) =>
            item.items ? (
              <Collapsible
                className="group/collapsible"
                onOpenChange={(open) => onOpenMenuChange(open ? item.label : null)}
                open={openMenuLabel === item.label}
                key={item.label}
              >
                <SidebarMenuItem>
                  {item.href ? (
                    <>
                      <SidebarMenuButton
                        tooltip={item.label}
                        className={cn(
                          "rounded-l-none rounded-r-full px-4",
                          (pathname === item.href ||
                            item.items.some((subItem) => pathname === subItem.href)) &&
                            "bg-sidebar-accent text-sidebar-accent-foreground"
                        )}
                        asChild
                      >
                        <Link href={item.href} onClick={() => onOpenMenuChange(item.label)}>
                          <item.icon />
                          <span>{item.label}</span>
                        </Link>
                      </SidebarMenuButton>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuAction
                          aria-label={`${openMenuLabel === item.label ? "Close" : "Open"} ${item.label} menu`}
                          className="right-2"
                          showOnHover
                        >
                          <ChevronRightIcon className="transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuAction>
                      </CollapsibleTrigger>
                    </>
                  ) : (
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton
                        tooltip={item.label}
                        className={cn(
                          "rounded-l-none rounded-r-full px-4",
                          item.items.some((subItem) => pathname === subItem.href) &&
                            "bg-sidebar-accent text-sidebar-accent-foreground"
                        )}
                      >
                        <item.icon />
                        <span>{item.label}</span>
                        <ChevronRightIcon className="ml-auto h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                  )}
                  <CollapsibleContent>
                    <SidebarMenuSub className="ml-5">
                      {item.items.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.label}>
                          <SidebarMenuSubButton
                            className={cn(
                              "justify-between",
                              pathname === subItem.href && "bg-sidebar-accent text-sidebar-accent-foreground"
                            )}
                            asChild
                          >
                            <Link
                              href={subItem.href}
                              onClick={() => onOpenMenuChange(item.label)}
                            >
                              {subItem.label}
                              {subItem.badge && (
                                <span className="bg-primary/10 flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-xs">
                                  {subItem.badge}
                                </span>
                              )}
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ) : (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton
                  tooltip={item.label}
                  className={cn(
                    "rounded-l-none rounded-r-full px-4",
                    pathname === item.href && "bg-sidebar-accent text-sidebar-accent-foreground"
                  )}
                  asChild
                >
                  <Link href={item.href ?? "#"} onClick={() => onOpenMenuChange(null)}>
                    <item.icon />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
                {item.badge && (
                  <SidebarMenuBadge className="right-4 rounded-full bg-primary/10">
                    {item.badge}
                  </SidebarMenuBadge>
                )}
              </SidebarMenuItem>
            )
          )}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

interface ApplicationShellProps {
  eyebrow?: string
  title?: string
  description?: string
  children?: ReactNode
}

const ApplicationShell = ({
  eyebrow = "Internal Workspace",
  title = "Marketing tools for Handled",
  description = "A shared development environment for website operations, keyword analysis, Google Ads workflows, and future internal marketing tools.",
  children,
}: ApplicationShellProps) => {
  const pathname = usePathname()
  const [openMenuLabel, setOpenMenuLabel] = useState<string | null>(
    pathname.startsWith("/internal/instructions") ? "Instructions" : null
  )

  return (
    <div className="flex min-h-dvh w-full bg-muted/30">
      <SidebarProvider>
        <Sidebar collapsible="icon">
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg" className="gap-2.5 bg-transparent [&>svg]:size-8" asChild>
                  <Link href="/internal">
                    <LogoSvg className="[&_rect]:fill-sidebar [&_rect:first-child]:fill-primary" />
                    <span className="text-xl font-semibold">Handled</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroupedMenuItems
              data={primaryMenuItems}
              openMenuLabel={openMenuLabel}
              onOpenMenuChange={setOpenMenuLabel}
            />
            <SidebarGroupedMenuItems
              data={usefulPagesItems}
              groupLabel="Useful Pages"
              openMenuLabel={openMenuLabel}
              onOpenMenuChange={setOpenMenuLabel}
            />
          </SidebarContent>
          <SidebarFooter>
            <div className="relative flex flex-col gap-4 overflow-hidden rounded-md border bg-background p-4">
              <div className="z-1 flex justify-between gap-4">
                <Avatar className="rounded-sm shadow-lg">
                  <AvatarFallback className="rounded-sm bg-sidebar">
                    <SparklesIcon className="size-4" />
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="z-1">
                <p className="mb-2 text-sm">Local-first workflow</p>
                <p className="text-xl font-semibold">Build, preview, push</p>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-50 border-b bg-card">
            <div className="mx-auto flex w-full max-w-none items-center justify-between gap-6 px-3 py-2 sm:px-4 lg:px-5">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="[&_svg]:!size-5" />
                <Separator orientation="vertical" className="hidden !h-4 sm:block" />
                <SearchDialog
                  trigger={
                    <>
                      <Button variant="ghost" className="hidden bg-transparent px-1 py-0 font-normal sm:block">
                        <div className="text-muted-foreground hidden items-center gap-1.5 text-sm sm:flex">
                          <SearchIcon className="size-4" />
                          <span>Type to search...</span>
                        </div>
                      </Button>
                      <Button variant="ghost" size="icon" className="sm:hidden">
                        <SearchIcon className="size-4" />
                        <span className="sr-only">Search</span>
                      </Button>
                    </>
                  }
                />
              </div>
              <div className="flex items-center gap-1.5">
                <LanguageDropdown
                  trigger={
                    <Button variant="ghost" size="icon">
                      <LanguagesIcon className="size-4" />
                    </Button>
                  }
                />
                <ActivityDialog
                  trigger={
                    <Button variant="ghost" size="icon">
                      <ActivityIcon className="size-4" />
                    </Button>
                  }
                />
                <NotificationDropdown
                  trigger={
                    <Button variant="ghost" size="icon" className="relative">
                      <BellIcon className="size-4" />
                      <span className="absolute right-2.5 top-2 size-2 rounded-full bg-destructive" />
                    </Button>
                  }
                />
                <ProfileDropdown
                  trigger={
                    <Button variant="ghost" className="h-full p-0 font-normal sm:pr-1">
                      <Avatar className="size-9 rounded-md">
                        <AvatarFallback>JC</AvatarFallback>
                      </Avatar>
                      <div className="hidden flex-col items-start gap-0.5 sm:flex md:max-lg:hidden">
                        <span className="text-sm font-medium">John Clem</span>
                        <span className="text-muted-foreground text-xs">Admin</span>
                      </div>
                    </Button>
                  }
                />
              </div>
            </div>
          </header>

          <main className="mx-auto size-full w-full max-w-none flex-1 px-3 py-5 sm:px-4 lg:px-5">
            <div className="mb-6">
              <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                {eyebrow}
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight">
                {title}
              </h1>
              <p className="mt-2 max-w-3xl text-muted-foreground">
                {description}
              </p>
            </div>

            {children ?? (
              <>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {toolCards.map((tool) => (
                    <Card key={tool.title} className="shadow-none">
                      <CardHeader>
                        <div className="mb-2 flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                          <tool.icon className="size-5" />
                        </div>
                        <CardTitle className="text-base">{tool.title}</CardTitle>
                        <CardDescription>{tool.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button asChild variant={tool.href === "#" ? "secondary" : "default"}>
                          <Link href={tool.href}>
                            {tool.href === "#" ? "Planned" : "Open tool"}
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="mt-6 shadow-none">
                  <CardHeader>
                    <CardTitle className="text-base">Operating Rules</CardTitle>
                    <CardDescription>
                      This workspace follows the instructions in `AGENTS.md`.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-3 sm:grid-cols-3">
                    <div className="rounded-md border bg-background p-4">
                      <p className="font-medium">Local first</p>
                      <p className="mt-1 text-sm text-muted-foreground">Review changes locally before publishing.</p>
                    </div>
                    <div className="rounded-md border bg-background p-4">
                      <p className="font-medium">Build before done</p>
                      <p className="mt-1 text-sm text-muted-foreground">Run a clean build before calling work complete.</p>
                    </div>
                    <div className="rounded-md border bg-background p-4">
                      <p className="font-medium">Push on request</p>
                      <p className="mt-1 text-sm text-muted-foreground">GitHub updates happen only when you ask.</p>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </main>

          <footer>
            <div className="text-muted-foreground mx-auto flex w-full max-w-none items-center justify-between gap-3 px-3 py-3 max-sm:flex-col sm:gap-6 sm:px-4 lg:px-5">
              <p className="text-sm text-balance max-sm:text-center">
                ©{new Date().getFullYear()} Handled internal marketing workspace
              </p>
              <Link href="/" className="text-sm text-primary">
                Public website
              </Link>
            </div>
          </footer>
        </div>
      </SidebarProvider>
    </div>
  )
}

export default ApplicationShell
