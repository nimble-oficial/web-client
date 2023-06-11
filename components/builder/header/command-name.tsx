import {
  BuilderFlowHeaderCommandNameSkeleton,
  BuilderHeaderCommandDropdown,
} from "@/components"

interface BuilderFlowHeaderProviderProps {
  isLoading: boolean
  name: string
}

export const BuilderFlowHeaderCommandName = ({
  isLoading,
  name,
}: BuilderFlowHeaderProviderProps) => {
  return (
    <div>
      {isLoading ? (
        <BuilderFlowHeaderCommandNameSkeleton />
      ) : (
        <BuilderHeaderCommandDropdown commandName={name} />
      )}
    </div>
  )
}
