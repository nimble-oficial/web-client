import { SidebarNavItem } from "@/types/nav"

import { siteConfig } from "./site"

interface DashboardConfig {
  title: string
  description: string
  headerNav: Partial<SidebarNavItem>[]
  sidebarNav: SidebarNavItem[]
}

export const dashboardConfig: DashboardConfig = {
  title: `${siteConfig.name} | Dashboard`,
  description: "Manage your server, view analytics, and more.",
  headerNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Support",
      href: "/support",
    },
  ],
  sidebarNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: "dashboard",
      external: false,
      enabled: true,
    },
    {
      title: "Commands",
      href: "/commands",
      icon: "workflow",
      external: false,
      enabled: true,
    },
    // {
    //   title: "Billing",
    //   href: "/billing",
    //   icon: "billing",
    //   external: false,
    //   enabled: true,
    // },
    {
      title: "Settings",
      href: "/settings",
      icon: "settings",
      external: false,
      enabled: true,
    },
  ],
}
