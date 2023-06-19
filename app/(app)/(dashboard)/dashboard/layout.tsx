import { Metadata } from "next"
import { dashboardConfig } from "@/config"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = dashboardConfig

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return <>{children}</>
}
