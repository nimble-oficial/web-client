import Head from "next/head"
import { useRouter } from "next/router"
import {
  DashboardCommandsCard,
  DashboardOverviewCards,
  Guildwitcher,
  MainNav,
  Search,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  ThemeToggle,
  UserNav,
} from "@/components"

interface DashboardTemplateProps {
  title: string
  selectedTab?: string
  showTabs?: boolean
}

export const DashboardTemplate = ({
  title,
  showTabs = true,
  selectedTab = "overview",
}: DashboardTemplateProps) => {
  const { push } = useRouter()

  return (
    <>
      <Head>
        <title>Dashboard - {title}</title>
      </Head>

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
          <div className="flex-1 space-y-4 px-4 pt-6">
            <div className="flex items-center justify-between space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
            </div>
            {showTabs && (
              <Tabs defaultValue={selectedTab} className="space-y-4">
                <TabsList>
                  <TabsTrigger
                    value="overview"
                    onClick={() => push("/dashboard/overview")}
                  >
                    Overview
                  </TabsTrigger>
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
            )}
          </div>
        </div>
      </div>
    </>
  )
}
