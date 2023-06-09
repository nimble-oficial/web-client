import { useEffect } from "react"
import {
  BuilderFlowProvider,
  BuilderFlowWrapper,
  BuilderHeader,
  EditCommandSheet,
  NodesSheet,
} from "@/components"
import { useBuilderStore } from "@/hooks"
import { Edge, Node, ReactFlowProvider, Viewport } from "reactflow"

import "reactflow/dist/style.css"

export interface BuilderFlowProps {
  edges: Edge[]
  nodes: Node[]
  viewport: Viewport
  builderId: string
}

export const BuilderFlow = ({
  nodes,
  edges,
  viewport,
  builderId,
  ...props
}: BuilderFlowProps) => {
  const { handleChangeEdges, handleChangeNodes } = useBuilderStore()

  useEffect(() => {
    handleChangeEdges(edges)
    handleChangeNodes(nodes)
  }, [edges, nodes, handleChangeEdges, handleChangeNodes])

  return (
    <ReactFlowProvider>
      <BuilderFlowWrapper>
        <BuilderHeader builderId={builderId} />
        <BuilderFlowProvider {...props} />
        <NodesSheet />
        <EditCommandSheet />
      </BuilderFlowWrapper>
    </ReactFlowProvider>
  )
}
