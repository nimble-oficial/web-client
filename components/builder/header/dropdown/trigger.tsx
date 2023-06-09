import { DropdownMenuTrigger } from "@/components"

interface TriggerProps {
  children: React.ReactNode
}

export const Trigger = ({ children }: TriggerProps) => {
  return <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
}
