import { dashboardConfig } from "@/config"

import { GuildSwitcher } from "../guild-switcher"
import { DashboardNav } from "./nav"

export const DashboardSidebar = () => {
  return (
    <aside className="hidden w-[200px] flex-col md:flex">
      <div className="flex h-[89vh] w-full flex-col justify-between">
        <DashboardNav items={dashboardConfig.sidebarNav} />
        <GuildSwitcher />
      </div>
    </aside>
  )
}
