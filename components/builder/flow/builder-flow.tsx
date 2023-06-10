import {
  BuilderFlowWrapper,
  BuilderHeader,
  BuilderSpeedDial,
  DefaultEdge,
  EditCommandSheet,
  NodesSheet,
  SavingLabel,
  SearchNodesDialog,
} from "@/components"
import { useBuilderStore, useNodeSheetStore } from "@/hooks"
import { SelectedNode } from "@/stores"
import {
  Background,
  ConnectionMode,
  Edge,
  Node,
  ReactFlow as ReactFlowInstance,
  ReactFlowProvider,
  Viewport,
} from "reactflow"

import "reactflow/dist/style.css"

export interface BuilderFlowProps {
  edges: Edge[]
  nodes: Node[]
  viewport: Viewport
  builderId: string
}

export const EDGE_TYPES = {
  default: DefaultEdge,
}

export const BuilderFlow = ({ edges, builderId }: BuilderFlowProps) => {
  const { handleSelectNode, handleOpenSheet } = useNodeSheetStore()

  const { onEdgesChange, onNodesChange, onConnect, nodes } = useBuilderStore()

  return (
    <ReactFlowProvider>
      <BuilderFlowWrapper>
        <BuilderHeader builderId={builderId} />
        <ReactFlowInstance
          nodes={nodes}
          edges={edges}
          edgeTypes={EDGE_TYPES}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          proOptions={{
            hideAttribution: true,
          }}
          connectionMode={ConnectionMode.Loose}
          onNodeClick={(_, node) => {
            if (node?.data?.isRoot) {
              return
            }

            handleSelectNode(node as SelectedNode)
            handleOpenSheet()
          }}
          fitView
        >
          <BuilderSpeedDial />
          <Background />
          <SavingLabel />
        </ReactFlowInstance>
        <NodesSheet />
        <SearchNodesDialog />
        <EditCommandSheet />
      </BuilderFlowWrapper>
    </ReactFlowProvider>
  )
}
