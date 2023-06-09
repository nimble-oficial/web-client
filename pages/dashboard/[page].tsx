import { useRouter } from "next/router"
import { DashboardTemplate } from "@/templates"

const parsedTitles = {
  overview: "Overview",
  commands: "Commands",
  settings: "Settings",
  analytics: "Analytics",
  reports: "Reports",
}

type Title = keyof typeof parsedTitles

export default function DashboardPage() {
  const { query } = useRouter()
  const page = query?.page as Title

  const title = parsedTitles[page] || "Overview"

  return <DashboardTemplate title={title} selectedTab="overview" />
}
