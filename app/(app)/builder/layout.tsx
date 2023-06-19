import { Metadata } from "next"
import { builderConfig } from "@/config"

export const metadata: Metadata = builderConfig

interface BuilderLayoutProps {
  children: React.ReactNode
}

export default function BuilderLayout({ children }: BuilderLayoutProps) {
  return <>{children}</>
}
