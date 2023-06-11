import {
  Builder,
  BuilderFlowWrapper,
  BuilderHeader,
  BuilderLoader,
  DefaultEdge,
  EditCommandSheet,
  NodesSheet,
  SearchNodesDialog,
} from "@/components"
import { useInitBuilder } from "@/hooks"
import { ReactFlowProvider } from "reactflow"

import "reactflow/dist/style.css"

export const EDGE_TYPES = {
  default: DefaultEdge,
}

export const BuilderFlow = () => {
  const { isLoading } = useInitBuilder()

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
