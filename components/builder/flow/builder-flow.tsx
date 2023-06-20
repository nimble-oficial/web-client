"use client"

import {
  Builder,
  BuilderFlowWrapper,
  BuilderHeader,
  BuilderLoader,
  EditCommandSheet,
  NodesSheet,
  SearchNodesDialog,
} from "@/components"
import { useGetCommandByBuilderQuery, useInitBuilder } from "@/hooks"
import { ReactFlowProvider } from "reactflow"

import "reactflow/dist/style.css"

interface BuilderFlowProps {
  builderId: string
}

export const BuilderFlow = ({ builderId }: BuilderFlowProps) => {
  const { data, isLoading: isFetchingCommand } = useGetCommandByBuilderQuery({
    builderId,
  })

  const { isLoading } = useInitBuilder({ builderId })

  return (
    <ReactFlowProvider>
      <BuilderFlowWrapper>
        {isLoading ? (
          <BuilderLoader />
        ) : (
          <>
            <BuilderHeader
              command={data?.data?.data}
              isFetchingCommand={isFetchingCommand}
            />

            <Builder />
            <NodesSheet />
            <SearchNodesDialog />
            <EditCommandSheet />
          </>
        )}
      </BuilderFlowWrapper>
    </ReactFlowProvider>
  )
}
