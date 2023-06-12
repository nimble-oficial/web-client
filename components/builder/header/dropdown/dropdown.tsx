import {
  Button,
  Content,
  DropdownMenu,
  DropdownMenuTrigger,
  Icons,
} from "@/components"

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
          {commandName} <Icons.chevronDown size={15} />
        </Button>
      </DropdownMenuTrigger>
      <Content />
    </DropdownMenu>
  )
}
