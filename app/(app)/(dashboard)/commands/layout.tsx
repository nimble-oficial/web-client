import { Metadata } from "next"
import { commandsConfig } from "@/config"

interface CommandsLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = commandsConfig

export default function CommandsLayout({ children }: CommandsLayoutProps) {
  return <>{children}</>
}
