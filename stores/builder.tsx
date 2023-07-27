"use client"

import {
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  OnConnect,
  OnEdgesChange,
  OnNodesChange,
  Viewport,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow"
import { toast } from "sonner"
import { create } from "zustand"

import { SelectedNode } from "./node-sheet"

interface BuilderStore {
  nodes: Node[]
  edges: Edge[]
  builderId: string | null
  viewport: Viewport
  showUI: boolean
  isSearchNodesDialogOpen: boolean
  focusedNode: SelectedNode | null
  handleChangeFocusedNode: (node: SelectedNode | null) => void
  handleToggleSearchNodesDialog: () => void
  handleToggleShowUI: () => void
  handleAddNode: (node: Node | SelectedNode) => void
  handleChangeViewport: (viewport: Viewport) => void
  handleChangeNodes: (nodes: Node[]) => void
  handleChangeEdges: (edges: Edge[]) => void
  handleChangeBuilderId: (builderId: string) => void
  onNodesChange: OnNodesChange
  onEdgesChange: OnEdgesChange
  onConnect: OnConnect
}

const initialStates: Pick<
  BuilderStore,
  | "nodes"
  | "edges"
  | "builderId"
  | "viewport"
  | "showUI"
  | "isSearchNodesDialogOpen"
  | "focusedNode"
> = {
  viewport: {
    zoom: 2,
    x: 0,
    y: 0,
  },
  builderId: null,
  nodes: [],
  edges: [],
  showUI: true,
  isSearchNodesDialogOpen: false,
  focusedNode: null,
}

export const builderStore = create<BuilderStore>((set, get) => ({
  ...initialStates,
  handleAddNode: (node) => {
    const prevNodes = get().nodes ?? []
    const newNodes = [...prevNodes, node]

    get().handleChangeNodes(newNodes)
  },
  handleChangeNodes: (nodes) => {
    set({ nodes })
  },
  handleChangeBuilderId: (builderId) => {
    set({ builderId })
  },
  handleChangeEdges: (edges) => {
    set({ edges })
  },
  onNodesChange: (changes: NodeChange[]) => {
    const rootNode = get().nodes?.find((node) => {
      const selectedNode = node as SelectedNode

      return selectedNode?.isRoot ?? false
    })

    const isTryingToRemoveRootNode = changes.some(
      (change) => change.type === "remove" && change.id === rootNode?.id
    )

    if (isTryingToRemoveRootNode) {
      toast.error("You can't remove root node")
      return
    }

    set({
      nodes: applyNodeChanges(changes, get().nodes),
    })
  },
  onEdgesChange: (changes: EdgeChange[]) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    })
  },
  onConnect: (connection: Connection) => {
    set({
      edges: addEdge(connection, get().edges),
    })
  },
  handleChangeViewport: (viewport) => {
    set({ viewport })
  },
  handleToggleShowUI: () => {
    set((state) => ({
      showUI: !state.showUI,
    }))
  },
  handleToggleSearchNodesDialog: () => {
    set((state) => ({
      isSearchNodesDialogOpen: !state.isSearchNodesDialogOpen,
    }))
  },
  handleChangeFocusedNode: (focusedNode) => {
    set({ focusedNode })
  },
}))
