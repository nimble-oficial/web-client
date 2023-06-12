"use client"

import { Form, NodeSheetProvider } from "@/components"
import { useBuilderStore, useNodeSheetStore } from "@/hooks"
import { ReplyMessageNodeSchema, replyMessageNodeSchema } from "@/schemas"
import { customAPIError, updateNodeData } from "@/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { ReplyMessageNodeSheetForm } from "./forms"

export interface ReplyMessageFormData {
  replyContent: string
  enabled: boolean
  allowedChannel: string
}

export const ReplyMessageNodeSheet = () => {
  const { selectedNode, handleCloseSheet } = useNodeSheetStore()
  const { nodes, handleChangeNodes } = useBuilderStore()

  const form = useForm<ReplyMessageNodeSchema>({
    resolver: zodResolver(replyMessageNodeSchema),
    defaultValues: {
      replyContent: selectedNode?.data?.replyContent ?? "",
      enabled: selectedNode?.data?.enabled ?? true,
      // allowedChannel: selectedNode?.data?.allowedChannel ?? "all",
    },
  })

  const { handleSubmit, getValues, control, setValue } = form

  const handleSaveBuilder = () => {
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
      toast.error(customAPIError(err).message)
    }
  }

  return (
    <NodeSheetProvider handleSave={handleSubmit(handleSaveBuilder)}>
      <Form {...form}>
        <form
          onSubmit={handleSubmit(handleSaveBuilder)}
          className="grid space-y-6"
        >
          <ReplyMessageNodeSheetForm control={control} setValue={setValue} />
        </form>
      </Form>
    </NodeSheetProvider>
  )
}
