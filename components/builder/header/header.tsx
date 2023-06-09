import { useEffect } from "react"
import Head from "next/head"
import {
  BuilderBackButton,
  BuilderFlowHeaderActions,
  BuilderFlowHeaderCommandName,
  BuilderFlowHeaderProvider,
} from "@/components"
import { useDashboardStore, useGetCommandByGuildQuery } from "@/hooks"

interface BuilderHeaderProps {
  builderId: string
}

export const BuilderHeader = ({ builderId }: BuilderHeaderProps) => {
  const { handleSelectCommand } = useDashboardStore()

  const { data, isLoading } = useGetCommandByGuildQuery({
    builderId,
  })

  const commandData = data?.data?.data
  const commandName = commandData?.name

  useEffect(() => {
    if (!commandData || !builderId) {
      return
    }

    handleSelectCommand({
      ...commandData,
      builderId,
    })
  }, [handleSelectCommand, builderId, commandData])

  return (
    <>
      <Head>
        <title>{!!commandName ? `${commandName} | Builder` : "Builder"}</title>
      </Head>

      <BuilderFlowHeaderProvider>
        <BuilderBackButton />
        <BuilderFlowHeaderCommandName isLoading={isLoading} />
        <BuilderFlowHeaderActions builderId={builderId} />
      </BuilderFlowHeaderProvider>
    </>
  )
}
