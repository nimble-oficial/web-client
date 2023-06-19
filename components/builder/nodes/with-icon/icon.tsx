import React from "react"
import { cn } from "@/lib"

interface IconProps {
  children: React.ReactNode
  color: string
}

export const Icon = ({ children, color }: IconProps) => {
  return !!children ? (
    <div
      className={cn(
        "mr-[5px] flex flex-col items-center justify-center rounded-sm p-[6px]",
        color
      )}
    >
      {children}
    </div>
  ) : null
}
