import { useMemo } from "react"
import {
  BuilderSpeedDial,
  DefaultEdge,
  EventsNode,
  SavingLabel,
} from "@/components"
import { useBuilderStore, useNodeSheetStore } from "@/hooks"
import { SelectedNode } from "@/stores"
import {
  Background,
  ConnectionMode,
  Controls,
  ReactFlow as ReactFlowInstance,
} from "reactflow"

const edgeTypes = {
  default: DefaultEdge,
}

const nodeTypes = {
  events: EventsNode,
}

export const BuilderFlowProvider = ({ ...props }) => {
  const { handleSelectNode, handleOpenSheet } = useNodeSheetStore()

  const { nodes, edges, onEdgesChange, onNodesChange, onConnect } =
    useBuilderStore()

  const nodesWithIndexField = useMemo(() => {
    return nodes?.map((n, i) => ({ ...n, index: i }))
  }, [nodes])

  return (
    <ReactFlowInstance
      nodes={nodesWithIndexField}
      edges={edges}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
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
      {...props}
    >
      <BuilderSpeedDial />
      <Controls position="bottom-right" />
      <Background />
      <SavingLabel />
    </ReactFlowInstance>
  )
}
