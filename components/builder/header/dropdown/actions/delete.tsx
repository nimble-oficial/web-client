import { DropdownMenuItem } from "@/components"

interface DeleteCommandProps {
  handleOpenDialog: () => void
}

export const DeleteCommand = ({ handleOpenDialog }: DeleteCommandProps) => {
  return (
    <DropdownMenuItem className="cursor-pointer" onClick={handleOpenDialog}>
      Delete
    </DropdownMenuItem>
  )
}
