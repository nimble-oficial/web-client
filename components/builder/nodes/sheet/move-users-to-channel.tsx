"use client"

import { useEffect } from "react"
import { useBuilderStore, useNodeSheetStore, useSaveBuilder } from "@/hooks"
import {
  MoveUsersToChannelNodeSchema,
  moveUsersToChannelNodeSchema,
} from "@/schemas"
import { getMessageFromError, updateNodeData } from "@/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useViewport } from "reactflow"
import { toast } from "sonner"

import { Form } from "@/components/ui"

import { MoveUsersToChannelNodeSheetForm } from "./forms"
import { NodeSheetProvider } from "./provider"

export const MoveUsersToChannelNodeSheet = () => {
  const { handleSave: saveBuilderMutation } = useSaveBuilder()
  const { selectedNode, handleCloseSheet } = useNodeSheetStore()
  const { nodes, handleChangeNodes, builderId, edges } = useBuilderStore()
  const viewport = useViewport()

  const form = useForm<MoveUsersToChannelNodeSchema>({
    resolver: zodResolver(moveUsersToChannelNodeSchema),
  })

  const { handleSubmit, getValues, reset, control, setValue } = form

  useEffect(() => {
    if (selectedNode) {
      reset({
        name: selectedNode.data?.name ?? "",
        channelToMoveUsers: selectedNode.data?.channelToMoveUsers ?? "",
        userIdToMove: selectedNode.data?.userIdToMove ?? "",
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
          className="grid space-y-6"
          onSubmit={handleSubmit(handleSaveNodeChanges)}
        >
          <MoveUsersToChannelNodeSheetForm
            setValue={setValue}
            control={control}
          />
        </form>
      </Form>
    </NodeSheetProvider>
  )
}
