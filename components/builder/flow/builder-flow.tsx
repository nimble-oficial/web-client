"use client"

import dynamic from "next/dynamic"
import { Builder, BuilderFlowWrapper } from "@/components"
import { useInitBuilder } from "@/hooks"
import { ReactFlowProvider } from "reactflow"

import "reactflow/dist/style.css"

interface BuilderFlowProps {
  builderId: string
}

const DynamicNodesSheet = dynamic(() =>
  import("../nodes/sheet/sheet").then((mod) => mod.NodesSheet)
)

const DynamicSearchNodesDialog = dynamic(() =>
  import("../dialogs/search-nodes").then((mod) => mod.SearchNodesDialog)
)

export const BuilderFlow = ({ builderId }: BuilderFlowProps) => {
  const { isLoading, redo, undo } = useInitBuilder({
    builderId,
  })

  return (
    <ReactFlowProvider>
      <BuilderFlowWrapper builderId={builderId} isLoading={isLoading}>
        <Builder undo={undo} redo={redo} />
        <DynamicNodesSheet />
        <DynamicSearchNodesDialog />
      </BuilderFlowWrapper>
    </ReactFlowProvider>
  )
}
