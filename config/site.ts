export type SiteConfig = typeof siteConfig

interface NavItem {
  title: string
  href: string
}

const ITEMS: NavItem[] = [
  {
    title: "Features",
    href: "/#features",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Documentation",
    href: "/docs",
  },
]

export const siteConfig = {
  name: "Nimble",
  description:
    "Create dynamic commands, execute commands for every server event, and more with a powerful, easy to use dashboard. Easy. Open source.",
  navItems: ITEMS,
  links: {
    github: "https://github.com/nimble-oficial",
  },
}
