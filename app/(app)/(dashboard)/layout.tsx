"use client"

import { useEffect } from "react"
import { DashboardHeader, DashboardSidebar } from "@/components"
import {
  useAppStore,
  useDashboardStore,
  useGetGuildChannelsQuery,
  useGetGuildRoles,
} from "@/hooks"

interface AppLayoutProps {
  children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  const { selectedGuild } = useDashboardStore()
  const {
    handleSetRoles,
    handleSetIsLoadingRoles,
    handleSetChannels,
    handleSetIsChannelsLoading,
  } = useAppStore()

  const { data: roles } = useGetGuildRoles({
    guildId: selectedGuild?.id!,
  })

  const { data: channels } = useGetGuildChannelsQuery({
    guildId: selectedGuild?.id!,
  })

  useEffect(() => {
    handleSetRoles(roles?.data || [])
    handleSetIsLoadingRoles(false)
  }, [roles?.data, handleSetRoles, handleSetIsLoadingRoles])

  useEffect(() => {
    handleSetChannels(channels?.data || [])
    handleSetIsChannelsLoading(false)
  }, [channels?.data, handleSetChannels, handleSetIsChannelsLoading])

  return (
    <>
      <DashboardHeader />
      <div className="container grid flex-1 gap-12 pt-8 md:grid-cols-[200px_1fr]">
        <DashboardSidebar />
        <div className="flex-col md:flex">{children}</div>
      </div>
    </>
  )
}
