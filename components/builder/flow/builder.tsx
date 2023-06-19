"use client"

import { useEffect, useMemo } from "react"
import {
  BuilderSpeedDial,
  DefaultEdge,
  SavingLabel,
  WithIcon,
} from "@/components"
import {
  useBuilderStore,
  useMultiKeyPress,
  useNodeSheetStore,
  useSaveBuilder,
} from "@/hooks"
import { SelectedNode } from "@/stores"
import { customAPIError } from "@/utils"
import {
  Background,
  ConnectionMode,
  ReactFlow,
  useReactFlow,
  useViewport,
} from "reactflow"
import { toast } from "sonner"

export const Builder = () => {
  const { handleSelectNode, handleOpenSheet } = useNodeSheetStore()
  const reactflowViewport = useViewport()

  const {
    onEdgesChange,
    onNodesChange,
    onConnect,
    nodes,
    edges,
    builderId,
    viewport: storedViewport,
  } = useBuilderStore()

  const { handleSave } = useSaveBuilder()

  const { fitView, setViewport } = useReactFlow()

  useEffect(() => {
    if (storedViewport) {
      setViewport(storedViewport)
    } else {
      fitView()
    }
  }, [fitView, setViewport, storedViewport])

  useMultiKeyPress(["Control", "S"], (ev) => {
    try {
      ev.preventDefault()

      toast.promise(
        handleSave({
          nodes,
          builderId: builderId!,
          edges,
          viewport: reactflowViewport,
        }),
        {
          loading: "Saving...",
          success: "Saved!",
          error: "Error!",
        }
      )
    } catch (err) {
      toast.error(customAPIError(err))
    }
  })

  const nodeTypes = useMemo(() => {
    return {
      default: WithIcon,
    }
  }, [])

  const edgeTypes = useMemo(() => {
    return {
      default: DefaultEdge,
    }
  }, [])

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      edgeTypes={edgeTypes}
      nodeTypes={nodeTypes}
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
