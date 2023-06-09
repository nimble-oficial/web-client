import { DropdownMenu } from "@/components"
import { useDashboardStore } from "@/hooks"

interface ChildrenProps {
  selectedCommand: string
  selectedGuild: string
}

interface ProviderProps {
  children: (data: ChildrenProps) => React.ReactNode
}

export const Provider = ({ children }: ProviderProps) => {
  const { selectedCommand, selectedGuild } = useDashboardStore()

  if (!selectedCommand || !selectedGuild) return <></>

  const props: ChildrenProps = {
    selectedCommand: selectedCommand.name,
    selectedGuild: selectedGuild.name,
  }

  return <DropdownMenu>{children(props)}</DropdownMenu>
}
