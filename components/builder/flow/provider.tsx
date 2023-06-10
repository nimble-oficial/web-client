import { useEffect, useMemo } from "react"
import {
  BuilderFlowProps,
  BuilderSpeedDial,
  DefaultEdge,
  SavingLabel,
} from "@/components"
import { useBuilderStore, useNodeSheetStore } from "@/hooks"
import { SelectedNode } from "@/stores"
import {
  Background,
  ConnectionMode,
  ReactFlow as ReactFlowInstance,
} from "reactflow"

const edgeTypes = {
  default: DefaultEdge,
}

type BuilderFlowProviderProps = Omit<BuilderFlowProps, "viewport" | "builderId">

export const BuilderFlowProvider = ({
  edges,
  nodes,
  ...props
}: BuilderFlowProviderProps) => {
  const { handleSelectNode, handleOpenSheet } = useNodeSheetStore()

  const { onEdgesChange, onNodesChange, onConnect, handleChangeNodes } =
    useBuilderStore()

  // This can be helpful to find the node in array directly.
  // This decreases the complexity of finding the node in array from O(n) to O(1).
  const nodesWithIndexField = useMemo(() => {
    return nodes?.map((n, i) => ({ ...n, index: i }))
  }, [nodes])

  useEffect(() => {
    handleChangeNodes(nodesWithIndexField)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ReactFlowInstance
      nodes={nodesWithIndexField}
      edges={edges}
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
      <Background />
      <SavingLabel />
    </ReactFlowInstance>
  )
}
