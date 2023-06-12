import { Metadata } from "next"
import {
  Guildwitcher,
  MainNav,
  Search,
  ThemeToggle,
  UserNav,
} from "@/components"
import { dashboardConfig } from "@/config"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = dashboardConfig

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="container">
      <div className="flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <Guildwitcher />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <div className="ml-auto flex items-center gap-2">
                <ThemeToggle />
                <UserNav />
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}
