"use client"

import { useEffect, useMemo, useState } from "react"
import {
  BuilderFlowContextMenu,
  DefaultEdge,
  SavingLabel,
  WithIcon,
} from "@/components"
import {
  COPY_NODE_TO_CLIPBOARD_KEYS,
  REDO_KEYS,
  SAVE_KEYS,
  UNDO_KEYS,
} from "@/constants"
import {
  useBuilderStore,
  useMultiKeyPress,
  useNodeSheetStore,
  usePasteContentIntoBuilder,
  useSaveBuilder,
} from "@/hooks"
import { SelectedNode } from "@/stores"
import { copyNodeToClipboard, getMessageFromError } from "@/utils"
import {
  Background,
  ConnectionMode,
  ReactFlow,
  useReactFlow,
  useViewport,
} from "reactflow"
import { toast } from "sonner"

interface BuilderProps {
  undo: () => void
  redo: () => void
}

export const Builder = ({ undo, redo }: BuilderProps) => {
  const [contextMenuPosition, setContextMenuPosition] = useState({
    x: 0,
    y: 0,
  })
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false)
  const { handleSelectNode, handleOpenSheet } = useNodeSheetStore()
  const reactflowViewport = useViewport()

  const {
    nodes,
    onEdgesChange,
    onNodesChange,
    onConnect,
    edges,
    builderId,
    handleToggleShowUI,
    handleChangeFocusedNode,
    focusedNode,
    viewport: storedViewport,
  } = useBuilderStore()

  const { handleSave } = useSaveBuilder()
  const { fitView, setViewport } = useReactFlow()

  usePasteContentIntoBuilder()
  useMultiKeyPress(UNDO_KEYS, undo)
  useMultiKeyPress(REDO_KEYS, redo)
  useMultiKeyPress(COPY_NODE_TO_CLIPBOARD_KEYS, () =>
    copyNodeToClipboard(focusedNode)
  )

  useMultiKeyPress(SAVE_KEYS, (ev) => {
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
          success: "Builder saved successfully!",
          error: "Error!",
        }
      )
    } catch (err) {
      toast.error(getMessageFromError(err))
    }
  })

  useEffect(() => {
    storedViewport ? setViewport(storedViewport) : fitView()
  }, [fitView, setViewport, storedViewport])

  const nodeTypes = useMemo(
    () => ({
      default: WithIcon,
    }),
    []
  )

  const edgeTypes = useMemo(
    () => ({
      default: DefaultEdge,
    }),
    []
  )

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      edgeTypes={edgeTypes}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onNodeDrag={(_, node) => {
        const focusedNode = node as SelectedNode

        if (focusedNode?.isRoot === false) {
          handleChangeFocusedNode(focusedNode)
        }
      }}
      onMoveStart={() => {
        setIsContextMenuOpen(false)
        handleChangeFocusedNode(null)
      }}
      onPaneContextMenu={(ev: React.MouseEvent) => {
        ev.preventDefault()
        setContextMenuPosition({
          x: ev.clientX,
          y: ev.clientY,
        })
        setIsContextMenuOpen(true)
      }}
      proOptions={{
        hideAttribution: true,
      }}
      connectionMode={ConnectionMode.Loose}
      onNodeClick={(_, node) => {
        const selectedNode = node as SelectedNode

        if (selectedNode?.isRoot === false) {
          handleSelectNode(selectedNode)
          handleOpenSheet()
        }
      }}
    >
      <Background />
      <SavingLabel />

      {isContextMenuOpen && (
        <BuilderFlowContextMenu
          handleToggleShowUI={handleToggleShowUI}
          contextMenuPosition={contextMenuPosition}
          handleClose={() => setIsContextMenuOpen(false)}
        />
      )}
    </ReactFlow>
  )
}
