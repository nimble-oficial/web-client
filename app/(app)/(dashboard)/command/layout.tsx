import { Metadata } from "next"
import { builderConfig } from "@/config"

export const metadata: Metadata = builderConfig

interface CommandLayoutProps {
  children: React.ReactNode
}

export default function CommandLayout({ children }: CommandLayoutProps) {
  return <>{children}</>
}
