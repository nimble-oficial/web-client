"use client"

import { useEffect } from "react"
import { Form, NodeSheetProvider, SendMessageNodeSheetForm } from "@/components"
import { useBuilderStore, useNodeSheetStore } from "@/hooks"
import { SendMessageNodeSchema, sendMessageNodeSchema } from "@/schemas"
import { customAPIError, updateNodeData } from "@/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

export const SendMessageNodeSheet = () => {
  const { selectedNode, handleCloseSheet } = useNodeSheetStore()
  const { nodes, handleChangeNodes } = useBuilderStore()

  const form = useForm<SendMessageNodeSchema>({
    resolver: zodResolver(sendMessageNodeSchema),
  })

  const { handleSubmit, getValues, reset, control } = form

  useEffect(() => {
    if (selectedNode) {
      reset({
        content: selectedNode.data?.content ?? "",
        enabled: selectedNode.data?.enabled ?? true,
        name: selectedNode.data?.name ?? "",
      })
    }
  }, [selectedNode, reset])

  const handleSave = () => {
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

      toast.success("Data updated successfully!")
    } catch (err) {
      toast.error(customAPIError(err))
    }
  }

  return (
    <NodeSheetProvider handleSave={handleSubmit(handleSave)}>
      <Form {...form}>
        <form onSubmit={handleSubmit(handleSave)} className="grid space-y-6">
          <SendMessageNodeSheetForm control={control} />
        </form>
      </Form>
    </NodeSheetProvider>
  )
}
