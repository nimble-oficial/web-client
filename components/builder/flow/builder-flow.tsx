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
import { useInitBuilder } from "@/hooks"
import { ReactFlowProvider } from "reactflow"

import "reactflow/dist/style.css"

interface BuilderFlowProps {
  builderId: string
}

export const BuilderFlow = ({ builderId }: BuilderFlowProps) => {
  const { isLoading } = useInitBuilder({ builderId })

  return (
    <ReactFlowProvider>
      <BuilderFlowWrapper>
        {isLoading ? (
          <BuilderLoader />
        ) : (
          <>
            <BuilderHeader />
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
