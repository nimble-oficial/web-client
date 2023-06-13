"use client"

import { useEffect, useState } from "react"
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CommandsCardSkeleton,
  CreateCommandDialog,
  DataTable,
  EditCommandSheet,
  Icons,
  RefreshDashboardCommandsDataButton,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  columns,
} from "@/components"
import { useDashboardStore, useGetCommandsByGuildQuery } from "@/hooks"
import { customAPIError } from "@/utils"
import { toast } from "sonner"

export const DashboardCommandsCard = () => {
  const [isCreateCommandDialogOpen, setIsCreateCommandDialogOpen] =
    useState(false)

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
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div className="flex flex-col space-y-1.5 ">
            <CardTitle className="text-lg font-semibold leading-none tracking-tight">
              Commands
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              All commands that are available for your server
            </p>
          </div>

          <div className="flex items-center gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="sm"
                    className="text-xs"
                    onClick={() => {
                      setIsCreateCommandDialogOpen(true)
                    }}
                  >
                    <Icons.plus size={16} className="mr-1.5" />
                    Create
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Create Command</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <RefreshDashboardCommandsDataButton
              isRefetching={isRefetching}
              refetch={handleRefetchData}
            />
          </div>
        </CardHeader>

        <CardContent>
          {isLoading ? (
            <CommandsCardSkeleton />
          ) : (
            <DataTable data={commands} columns={columns} />
          )}
        </CardContent>
      </Card>

      <CreateCommandDialog
        onClose={() => setIsCreateCommandDialogOpen(false)}
        isOpen={isCreateCommandDialogOpen}
      />
      <EditCommandSheet />
    </>
  )
}
