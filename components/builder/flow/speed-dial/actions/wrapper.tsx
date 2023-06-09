import { DropdownMenuContent } from "@/components"

interface WrapperProps {
  children: React.ReactNode
}

export const ActionsWrapper = ({ children }: WrapperProps) => {
  return (
    <DropdownMenuContent
      side="right"
      className="ml-2 flex flex-col items-center border-0 bg-transparent shadow-transparent"
    >
      {children}
    </DropdownMenuContent>
  )
}
