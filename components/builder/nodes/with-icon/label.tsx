import React from "react"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui"

interface LabelProps {
  children: React.ReactNode
}

export const Label = ({ children }: LabelProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <span className="mb-[-1px] text-left text-[8px] text-slate-400 line-clamp-1">
            {children}
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p>{children}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
