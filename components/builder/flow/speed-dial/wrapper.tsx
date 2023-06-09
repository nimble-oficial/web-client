import React from "react"
import { DropdownMenu } from "@/components"

interface BuilderSpeedDialWrapperProps {
  children: React.ReactNode
}

export const BuilderSpeedDialWrapper = ({
  children,
}: BuilderSpeedDialWrapperProps) => {
  return (
    <div className="fixed bottom-2/4 left-14 z-10">
      <DropdownMenu>{children}</DropdownMenu>
    </div>
  )
}
