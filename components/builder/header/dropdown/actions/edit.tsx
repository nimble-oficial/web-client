import { DropdownMenuItem } from "@/components"
import { useNodeSheetStore } from "@/hooks"

export const EditCommand = () => {
  const { handleOpenSheet } = useNodeSheetStore()

  return (
    <DropdownMenuItem className="cursor-pointer" onClick={handleOpenSheet}>
      Edit
    </DropdownMenuItem>
  )
}
