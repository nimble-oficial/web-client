import {
  NodeSheetProvider,
  ReplyMessageWithChatGptNodeForm,
} from "@/components"
import { useBuilderStore, useNodeSheetStore } from "@/hooks"
import {
  ReplyMessageWithChatGptNodeSchema,
  replyMessageWithChatGptNodeSchema,
} from "@/schemas"
import { customAPIError, updateNodeData } from "@/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

export const ReplyMessageWithChatGptNodeSheet = () => {
  const { selectedNode, handleCloseSheet } = useNodeSheetStore()
  const { nodes, handleChangeNodes } = useBuilderStore()

  const { handleSubmit, getValues, control } =
    useForm<ReplyMessageWithChatGptNodeSchema>({
      resolver: zodResolver(replyMessageWithChatGptNodeSchema),
      defaultValues: {
        enabled: selectedNode?.data?.enabled ?? true,
      },
    })

  const handleSave = () => {
    try {
      const updatedNodes = updateNodeData({
        nodes,
        selectedNode,
        overrides: {
          ...getValues(),
        },
      })

      handleChangeNodes(updatedNodes)
      handleCloseSheet()

      toast.success("Data updated successfully!")
    } catch (err) {
      toast.error(customAPIError(err).message)
    }
  }

  return (
    <NodeSheetProvider handleSave={handleSubmit(handleSave)}>
      <ReplyMessageWithChatGptNodeForm control={control} />
    </NodeSheetProvider>
  )
}
