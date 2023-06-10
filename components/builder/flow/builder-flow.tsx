import {
  Builder,
  BuilderFlowWrapper,
  BuilderHeader,
  DefaultEdge,
  EditCommandSheet,
  NodesSheet,
  SearchNodesDialog,
} from "@/components"
import { ReactFlowProvider } from "reactflow"

import "reactflow/dist/style.css"

export interface BuilderFlowProps {
  builderId: string
}

export const EDGE_TYPES = {
  default: DefaultEdge,
}

export const BuilderFlow = () => {
  return (
    <ReactFlowProvider>
      <BuilderFlowWrapper>
        <BuilderHeader />
        <Builder />
        <NodesSheet />
        <SearchNodesDialog />
        <EditCommandSheet />
      </BuilderFlowWrapper>
    </ReactFlowProvider>
  )
}
