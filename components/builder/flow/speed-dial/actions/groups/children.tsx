import { SpeedDialGroup } from "@/data/speed-dial"
import { useAddNodeToBuilder, useBuilderStore } from "@/hooks"
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

export interface NewNodePayload
  extends Omit<SelectedNode, "id" | "position" | "isRoot"> {}

export const Children = ({ group }: ItemsProps) => {
  const { nodes } = useBuilderStore()
  const { add } = useAddNodeToBuilder()

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
                    const payload: NewNodePayload = {
                      data: {
                        enabled: true,
                        label: child.label,
                        key: child.key,
                        description: child.description,
                      },
                      index: nodes.length,
                    }

                    add(payload)
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
