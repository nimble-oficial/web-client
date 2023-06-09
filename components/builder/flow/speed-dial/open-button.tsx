import { Button, DropdownMenuTrigger } from "@/components"
import { Plus } from "lucide-react"

export const OpenButton = () => {
  return (
    <DropdownMenuTrigger asChild>
      <Button className="rounded-full border-[1px] border-slate-300 bg-white px-[15px] py-[26px] text-gray-950 shadow-md hover:bg-white hover:shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-white">
        <Plus />
      </Button>
    </DropdownMenuTrigger>
  )
}
