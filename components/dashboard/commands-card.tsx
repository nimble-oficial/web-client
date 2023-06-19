"use client"

import {
  CommandsCardSkeleton,
  DataTable,
  EditCommandSheet,
  columns,
} from "@/components"
import { Command } from "@/stores"

interface DashboardCommandsCardProps {
  isLoading: boolean
  commands: Command[]
}

export const DashboardCommandsCard = ({
  commands,
  isLoading,
}: DashboardCommandsCardProps) => {
  return (
    <>
      {isLoading ? (
        <CommandsCardSkeleton />
      ) : (
        <DataTable data={commands} columns={columns} />
      )}

      <EditCommandSheet />
    </>
  )
}
