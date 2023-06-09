import { DropdownMenuItem } from "@/components"
import { useDashboardStore } from "@/hooks"

export const EditCommand = () => {
  const { handleOpenSheet } = useDashboardStore()

  return (
    <DropdownMenuItem className="cursor-pointer" onClick={handleOpenSheet}>
      Edit
    </DropdownMenuItem>
  )
}
