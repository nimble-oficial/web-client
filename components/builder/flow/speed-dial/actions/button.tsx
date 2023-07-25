import React from "react"
import { Button } from "@/components"

interface SpeedDialButtonProps {
  children: React.ReactNode
}

export const SpeedDialButton = ({ children }: SpeedDialButtonProps) => {
  return (
    <Button className="dark:bg-background rounded-full border-[1px] border-slate-300 bg-white px-[15px] py-[26px] text-gray-950 shadow-md hover:bg-white hover:shadow-sm dark:border-zinc-700 dark:text-white">
      {children}
    </Button>
  )
}
