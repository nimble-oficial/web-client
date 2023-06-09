import {
  Button,
  Content,
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components"
import { ChevronDown } from "lucide-react"

interface BuilderHeaderCommandDropdownProps {
  commandName: string
}

export const BuilderHeaderCommandDropdown = ({
  commandName,
}: BuilderHeaderCommandDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400"
        >
          {commandName} <ChevronDown size={15} />
        </Button>
      </DropdownMenuTrigger>
      <Content />
    </DropdownMenu>
  )
}
