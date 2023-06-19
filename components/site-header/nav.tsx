"use client"

import { Logo, ThemeToggle, UserNav } from "@/components"
import { dashboardConfig } from "@/config"

export const Nav = () => {
  return (
    <div className="flex h-16 items-center justify-between py-6">
      <div className="flex gap-6 md:gap-10">
        <Logo />

        <nav className="hidden gap-6 md:flex">
          {dashboardConfig.headerNav.map((item, index) => (
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

      <div className="ml-auto flex items-center gap-2">
        <ThemeToggle />
        <UserNav />
      </div>
    </div>
  )
}
