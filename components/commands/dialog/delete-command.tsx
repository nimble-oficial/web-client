import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components"
import { useDeleteCommand } from "@/hooks"

export interface DeleteCommandDialogProps {
  isOpen: boolean
  onClose: () => void
  onDeleteConfirm?: () => void
}

export function DeleteCommandDialog({
  isOpen,
  onDeleteConfirm,
  onClose,
}: DeleteCommandDialogProps) {
  const { handleDelete, isLoading } = useDeleteCommand({
    onClose,
    onDeleteConfirm,
  })

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>

          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            command and remove data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel disabled={isLoading}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete} disabled={isLoading}>
            {isLoading ? "Deleting..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
