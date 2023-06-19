import React from "react"
import { cn } from "@/lib"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui"

interface TitleProps {
  children: React.ReactNode
  className?: string
}

export const Title = ({ children, className }: TitleProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <span
            className={cn(
              "mt-[-1px] text-left text-[9px] line-clamp-1",
              className
            )}
          >
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
