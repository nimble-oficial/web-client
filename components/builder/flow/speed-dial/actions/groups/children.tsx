import { NodeType, SpeedDialGroup } from "@/data/speed-dial"
import { useAddNewNodeToBuilder, useNodeSheetStore } from "@/hooks"
import { SelectedNode } from "@/stores"

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
  const { handleSelectNode, handleOpenSheet } = useNodeSheetStore()
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
                    const node = {
                      ...child,
                      description: child.description,
                      label: child.label,
                      variant: group.variant as NodeType,
                      key: child.key,
                    }

                    const createdNode = handleAddNewNodeToBuilder(node)

                    handleSelectNode(createdNode as SelectedNode)
                    handleOpenSheet()
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
