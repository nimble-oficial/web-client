"use client"

import {
  BuilderBackButton,
  BuilderFlowHeaderActions,
  BuilderFlowHeaderCommandNameSkeleton,
  BuilderFlowHeaderProvider,
} from "@/components"
import { Command } from "@/stores"

interface BuilderHeaderProps {
  command: Command | undefined
  isFetchingCommand: boolean
}

export const BuilderHeader = ({
  command,
  isFetchingCommand,
}: BuilderHeaderProps) => {
  return (
    <BuilderFlowHeaderProvider>
      <BuilderBackButton />

      {isFetchingCommand && <BuilderFlowHeaderCommandNameSkeleton />}

      {command && (
        <span className="text-sm text-slate-500">{command.name}</span>
      )}

      <BuilderFlowHeaderActions />
    </BuilderFlowHeaderProvider>
  )
}
