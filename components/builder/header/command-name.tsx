import { BuilderHeaderCommandDropdown, Skeleton } from "@/components"

interface BuilderFlowHeaderProviderProps {
  isLoading: boolean
}

export const BuilderFlowHeaderCommandName = ({
  isLoading,
}: BuilderFlowHeaderProviderProps) => {
  return (
    <div>
      {isLoading ? (
        <Skeleton className="h-6 w-[150px]" />
      ) : (
        <BuilderHeaderCommandDropdown />
      )}
    </div>
  )
}
