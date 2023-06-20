"use client"

import { useEffect } from "react"
import { Form, NodeSheetProvider } from "@/components"
import { useBuilderStore, useNodeSheetStore, useSaveBuilder } from "@/hooks"
import { ReplyMessageNodeSchema, replyMessageNodeSchema } from "@/schemas"
import { getMessageFromError, updateNodeData } from "@/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useViewport } from "reactflow"
import { toast } from "sonner"

import { ReplyMessageNodeSheetForm } from "./forms"

export interface ReplyMessageFormData {
  replyContent: string
  enabled: boolean
  allowedChannel: string
}

export const ReplyMessageNodeSheet = () => {
  const { handleSave: saveBuilderMutation } = useSaveBuilder()
  const { selectedNode, handleCloseSheet } = useNodeSheetStore()
  const { nodes, handleChangeNodes, builderId, edges } = useBuilderStore()
  const viewport = useViewport()

  const form = useForm<ReplyMessageNodeSchema>({
    resolver: zodResolver(replyMessageNodeSchema),
  })

  const { handleSubmit, getValues, reset, control } = form

  useEffect(() => {
    if (selectedNode) {
      reset({
        name: selectedNode.data?.name ?? "",
        replyContent: selectedNode.data?.replyContent ?? "",
        enabled: selectedNode.data?.enabled ?? true,
      })
    }
  }, [reset, selectedNode])

  const handleSaveNodeChanges = async () => {
    try {
      const updatedNodes = updateNodeData({
        nodes,
        selectedNode,
        style: {
          opacity: getValues("enabled") ? "1" : "0.5",
        },
        overrides: getValues(),
      })

      handleChangeNodes(updatedNodes)
      handleCloseSheet()

      await saveBuilderMutation({
        builderId: builderId!,
        nodes: updatedNodes,
        edges,
        viewport,
      })

      toast.success("Data updated successfully!")
    } catch (err) {
      toast.error(getMessageFromError(err))
    }
  }

  return (
    <NodeSheetProvider handleSave={handleSubmit(handleSaveNodeChanges)}>
      <Form {...form}>
        <form
          onSubmit={handleSubmit(handleSaveNodeChanges)}
          className="grid space-y-6"
        >
          <ReplyMessageNodeSheetForm control={control} />
        </form>
      </Form>
    </NodeSheetProvider>
  )
}
