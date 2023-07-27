import { NewNodePayload } from "@/components"
import { SelectedNode } from "@/stores"
import { toast } from "sonner"

import { useBuilderStore } from "../stores"
import { useNodeSheetStore } from "./nodes"
import { useCreateNode } from "./use-create-node"

export const useAddNodeToBuilder = () => {
  const { handleAddNode } = useBuilderStore()
  const { handleSelectNode, handleOpenSheet } = useNodeSheetStore()
  const { create } = useCreateNode()

  const add = (payload: NewNodePayload) => {
    try {
      const createdNode = create(payload)

      handleAddNode(createdNode)
      handleSelectNode(createdNode as SelectedNode)
      handleOpenSheet()

      toast.success(`"${createdNode.data.label}" added to builder!`)
    } catch {
      toast.error("Something went wrong! Please try again.")
    }
  }

  return { add }
}
