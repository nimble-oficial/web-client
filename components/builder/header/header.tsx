"use client"

import {
  BuilderBackButton,
  BuilderFlowHeaderActions,
  BuilderFlowHeaderCommandNameSkeleton,
  BuilderFlowHeaderProvider,
} from "@/components"
import { BuilderCommandResponse } from "@/hooks"

interface BuilderHeaderProps {
  command: BuilderCommandResponse | undefined
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
        <span className="text-sm text-zinc-500 dark:text-zinc-400">
          {command.name}
        </span>
      )}

      <BuilderFlowHeaderActions />
    </BuilderFlowHeaderProvider>
  )
}
