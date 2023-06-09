import {
  DropdownMenuTrigger,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components"
import { SpeedDialGroup } from "@/data/speed-dial"

interface ParentProps {
  group: SpeedDialGroup
}

export const Parent = ({ group }: ParentProps) => {
  return (
    <DropdownMenuTrigger>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <group.Icon />
          </TooltipTrigger>
          <TooltipContent className="text-base" side="bottom">
            <p>{group.label}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </DropdownMenuTrigger>
  )
}
