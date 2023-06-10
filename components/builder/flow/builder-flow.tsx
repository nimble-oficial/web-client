import {
  BuilderFlowProvider,
  BuilderFlowWrapper,
  BuilderHeader,
  EditCommandSheet,
  NodesSheet,
  SearchNodesDialog,
} from "@/components"
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
  return (
    <ReactFlowProvider>
      <BuilderFlowWrapper>
        <BuilderHeader builderId={builderId} />
        <BuilderFlowProvider edges={edges} nodes={nodes} {...props} />
        <NodesSheet />
        <SearchNodesDialog />
        <EditCommandSheet />
      </BuilderFlowWrapper>
    </ReactFlowProvider>
  )
}
