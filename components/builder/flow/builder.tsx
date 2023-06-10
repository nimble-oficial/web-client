import { useEffect } from "react"
import { useBuilderStore, useNodeSheetStore } from "@/hooks"
import { SelectedNode } from "@/stores"
import { Background, ConnectionMode, ReactFlow, useReactFlow } from "reactflow"

import { EDGE_TYPES } from "./builder-flow"
import { SavingLabel } from "./saving-label"
import { BuilderSpeedDial } from "./speed-dial"

export const Builder = () => {
  const { handleSelectNode, handleOpenSheet } = useNodeSheetStore()

  const { onEdgesChange, onNodesChange, onConnect, viewport, nodes, edges } =
    useBuilderStore()

  const { setViewport } = useReactFlow()

  useEffect(() => {
    if (viewport) {
      setViewport(viewport)
    }
  }, [setViewport, viewport])

  return (
    <ReactFlow
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
    >
      <BuilderSpeedDial />
      <Background />
      <SavingLabel />
    </ReactFlow>
  )
}
