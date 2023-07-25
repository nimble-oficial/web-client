import { DropdownMenuTrigger, Icons, SpeedDialButton } from "@/components"

import "lucide-react"

export const OpenButton = () => {
  return (
    <DropdownMenuTrigger>
      <SpeedDialButton>
        <Icons.plus />
      </SpeedDialButton>
    </DropdownMenuTrigger>
  )
}
