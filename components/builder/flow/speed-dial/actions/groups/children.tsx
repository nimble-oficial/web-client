import { NodeType, SpeedDialGroup } from "@/data/speed-dial"
import { useAddNewNodeToBuilder } from "@/hooks"

import { cn } from "@/lib/utils"
import {
  DropdownMenuContent,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/"

interface ItemsProps {
  group: SpeedDialGroup
}

export const Children = ({ group }: ItemsProps) => {
  const { handleAddNewNodeToBuilder } = useAddNewNodeToBuilder()

  return (
    <DropdownMenuContent className="flex flex-col items-center gap-4 border-0 bg-transparent shadow-transparent">
      {group?.children.map((child, index) => (
        <div className={cn(index === 0 ? "mt-2" : "")} key={child.label}>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  role="button"
                  onClick={() => {
                    handleAddNewNodeToBuilder({
                      ...child,
                      description: child.description,
                      label: child.label,
                      variant: group.variant as NodeType,
                      key: child.key,
                    })
                  }}
                >
                  <child.element />
                </div>
              </TooltipTrigger>

              <TooltipContent side="right" className="text-base">
                <p>{child.label}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      ))}
    </DropdownMenuContent>
  )
}
