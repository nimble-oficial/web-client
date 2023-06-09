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
    defaultValues: {
      content: selectedNode?.data?.content ?? "",
      enabled: selectedNode?.data?.enabled ?? true,
      // allowedChannel: selectedNode?.data?.allowedChannel ?? "all",
    },
  })

  const { handleSubmit, getValues, setValue, control } = form

  const handleSave = () => {
    try {
      const updatedNodes = updateNodeData({
        nodes,
        selectedNode,
        overrides: getValues(),
      })

      console.log(getValues())

      handleChangeNodes(updatedNodes)
      handleCloseSheet()

      toast.error("Data updated successfully!")
    } catch (err) {
      toast.error(customAPIError(err).message)
    }
  }

  return (
    <NodeSheetProvider handleSave={handleSubmit(handleSave)}>
      <Form {...form}>
        <form onSubmit={handleSubmit(handleSave)} className="grid space-y-6">
          <SendMessageNodeSheetForm setValue={setValue} control={control} />
        </form>
      </Form>
    </NodeSheetProvider>
  )
}
