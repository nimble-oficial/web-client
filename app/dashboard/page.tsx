"use client"

import {
  DashboardCommandsCard,
  DashboardOverviewCards,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components"

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 px-4 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold capitalize tracking-tight">
          Dashboard
        </h2>
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
          <DashboardCommandsCard />
        </TabsContent>

        <TabsContent value="commands">
          <DashboardCommandsCard />
        </TabsContent>
      </Tabs>
    </div>
  )
}
