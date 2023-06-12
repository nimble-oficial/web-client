import { Metadata } from "next"
import { SiteHeader } from "@/components"
import { marketingConfig } from "@/config"

interface MarketingLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = marketingConfig

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <>
      <SiteHeader />
      {children}
    </>
  )
}
