"use client"

import {
  DashboardOverviewCards,
  Heading,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components"
import { dashboardConfig } from "@/config"

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 px-4">
      <div className="flex items-center justify-between space-y-2">
        <Heading heading="Dashboard" text={dashboardConfig.description} />
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics" disabled>
            Analytics
          </TabsTrigger>
          <TabsTrigger value="reports" disabled>
            Reports
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <DashboardOverviewCards />
        </TabsContent>
      </Tabs>
    </div>
  )
}
