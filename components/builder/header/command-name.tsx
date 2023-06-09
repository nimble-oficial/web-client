import { BuilderHeaderCommandDropdown, Skeleton } from "@/components"

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
        <Skeleton className="h-6 w-[150px]" />
      ) : (
        <BuilderHeaderCommandDropdown commandName={name} />
      )}
    </div>
  )
}
