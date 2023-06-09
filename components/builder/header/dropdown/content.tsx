import { useState } from "react"
import { useRouter } from "next/router"
import {
  DeleteCommand,
  DeleteCommandDialog,
  DropdownMenuContent,
  EditCommand,
} from "@/components"
import { createPortal } from "react-dom"

export const Content = () => {
  const { replace } = useRouter()
  const [showDialog, setShowDialog] = useState(false)

  return (
    <>
      <DropdownMenuContent className="w-56">
        <EditCommand />
        <DeleteCommand handleOpenDialog={() => setShowDialog(true)} />
      </DropdownMenuContent>

      {showDialog &&
        createPortal(
          <DeleteCommandDialog
            isOpen={showDialog}
            onDeleteConfirm={() => replace("/dashboard")}
            onClose={() => setShowDialog(false)}
          />,
          document.body
        )}
    </>
  )
}
