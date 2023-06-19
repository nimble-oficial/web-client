import { Icons } from "@/components"

export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type MainNavItem = NavItem

export type SidebarNavItem = {
  title: string
  disabled?: boolean
  external?: boolean
  icon: keyof typeof Icons
  href: string
  enabled: boolean
}

export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
  }
}

export type DashboardConfig = {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}
