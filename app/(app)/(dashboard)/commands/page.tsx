"use client"

import { useEffect } from "react"
import {
  CreateCommandDashboardButton,
  DashboardCommandsCard,
  Heading,
  RefreshDashboardCommandsDataButton,
} from "@/components"
import { useDashboardStore, useGetCommandsByGuildQuery } from "@/hooks"
import { customAPIError } from "@/utils"
import { toast } from "sonner"

export default function CommandsPage() {
  const { handleSetCommands, commands, selectedGuild } = useDashboardStore()

  const { data, isLoading, refetch, isRefetching } = useGetCommandsByGuildQuery(
    {
      guildId: selectedGuild?.id!,
    }
  )

  const handleRefetchData = async () => {
    try {
      await refetch()
      toast.success("Successfully refreshed data!")
    } catch (err) {
      toast.error(customAPIError(err))
    }
  }

  useEffect(() => {
    handleSetCommands(data?.data.data ?? [])
  }, [data?.data, handleSetCommands])

  return (
    <div className="flex-1 space-y-4 px-4">
      <div className="flex items-center justify-between space-y-2">
        <Heading heading="Commands" text="Create, edit, and delete commands." />

        <div className="flex items-center gap-2">
          <CreateCommandDashboardButton />
          <RefreshDashboardCommandsDataButton
            isRefetching={isRefetching || isLoading}
            refetch={handleRefetchData}
          />
        </div>
      </div>

      <DashboardCommandsCard isLoading={isLoading} commands={commands} />
    </div>
  )
}
