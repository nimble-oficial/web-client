"use client"

import { SpeedDialGroupChildrenKey } from "@/data"
import { Node } from "reactflow"
import { create } from "zustand"

export interface SelectedNode extends Node {
  index: number
  isRoot: boolean
  data: {
    name?: string
    label: string
    enabled: boolean
    content?: string
    replyContent?: string
    description: string
    key: SpeedDialGroupChildrenKey
  }
}

interface NodeSheetStore {
  selectedNode: SelectedNode | null
  isSheetOpen: boolean
  handleSelectNode: (node: SelectedNode) => void
  handleOpenSheet: () => void
  handleCloseSheet: () => void
}

const initialStates: Omit<
  NodeSheetStore,
  "handleSelectNode" | "handleOpenSheet" | "handleCloseSheet"
> = {
  selectedNode: null,
  isSheetOpen: false,
}

export const nodeSheetStore = create<NodeSheetStore>((set) => ({
  ...initialStates,
  handleSelectNode: (node) => {
    set({ selectedNode: node })
  },
  handleOpenSheet: () => {
    set({ isSheetOpen: true })
  },
  handleCloseSheet: () => {
    set({ isSheetOpen: false })
  },
}))
