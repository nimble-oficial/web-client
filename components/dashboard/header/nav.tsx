"use client"

import { Logo } from "@/components"
import { siteConfig } from "@/config"

export const DashboardHeaderNav = () => {
  return (
    <div className="flex h-20 items-center justify-between py-6">
      <div className="flex gap-6 md:gap-10">
        <Logo />
        <nav className="hidden gap-6 md:flex">
          {siteConfig.navItems.map((item, index) => (
            <a
              key={index}
              className="flex items-center text-lg font-medium text-foreground/60 transition-colors hover:text-foreground/80 sm:text-sm"
              href={item.href}
            >
              {item.title}
            </a>
          ))}
        </nav>
        <button className="flex items-center space-x-2 md:hidden">
          <span className="hidden font-bold sm:inline-block">
            <Logo />
          </span>
          <span className="font-bold">Menu</span>
        </button>
      </div>
    </div>
  )
}
