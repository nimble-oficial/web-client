import { useCallback } from "react"
import { DeleteCommandDialogProps } from "@/components"
import { customAPIError } from "@/utils"
import { toast } from "sonner"

import { useDeleteCommandMutation } from "../mutations"
import { useBuilderStore, useDashboardStore } from "../stores"

export const useDeleteCommand = ({
  onClose,
  onDeleteConfirm,
}: Omit<DeleteCommandDialogProps, "isOpen">) => {
  const { builderId } = useBuilderStore()
  const { selectedCommand, handleDeleteCommand } = useDashboardStore()
  const { mutateAsync, isLoading } = useDeleteCommandMutation()

  const handleDelete = useCallback(async () => {
    try {
      await mutateAsync({
        commandId: selectedCommand._id,
        builderId: builderId || selectedCommand?.builderId,
      })

      handleDeleteCommand(selectedCommand._id)

      typeof onDeleteConfirm === "function" && onDeleteConfirm()
      onClose()

      toast.success("Command deleted successfully.")
    } catch (err) {
      toast.error(customAPIError(err).message)
    }
  }, [
    builderId,
    handleDeleteCommand,
    mutateAsync,
    onClose,
    onDeleteConfirm,
    selectedCommand._id,
    selectedCommand?.builderId,
  ])

  return { handleDelete, isLoading }
}
