import { useEffect } from "react"
import {
  BuilderCommandResponse,
  useDashboardStore,
  useGetCommandByBuilderQuery,
} from "@/hooks"

import { BuilderHeader } from "../header"
import { BuilderSpeedDial } from "./speed-dial"

interface UIProps {
  builderId: string
}

export const BuilderFlowUI = ({ builderId }: UIProps) => {
  const { data, isLoading: isFetchingCommand } = useGetCommandByBuilderQuery({
    builderId,
  })

  const { handleSelectGuild } = useDashboardStore()

  const commandData = data?.data?.data as BuilderCommandResponse

  useEffect(() => {
    if (commandData?.guildId) {
      handleSelectGuild({
        id: commandData?.guildId,
      })
    }
  }, [commandData?.guildId, handleSelectGuild])

  return (
    <>
      <BuilderSpeedDial />
      <BuilderHeader
        command={commandData}
        isFetchingCommand={isFetchingCommand}
      />
    </>
  )
}
