"use client"

import { useEffect } from "react"
import { BuilderSpeedDial, SavingLabel } from "@/components"
import { useBuilderStore, useNodeSheetStore } from "@/hooks"
import { SelectedNode } from "@/stores"
import { Background, ConnectionMode, ReactFlow, useReactFlow } from "reactflow"

export const Builder = () => {
  const { handleSelectNode, handleOpenSheet } = useNodeSheetStore()

  const { onEdgesChange, onNodesChange, onConnect, viewport, nodes, edges } =
    useBuilderStore()

  const { fitView, setViewport } = useReactFlow()

  useEffect(() => {
    if (viewport) {
      setViewport(viewport)
    } else {
      fitView()
    }
  }, [fitView, setViewport, viewport])

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
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
