import {
  Button,
  Icons,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components"

interface RefreshDashboardDataButtonProps {
  isRefetching: boolean
  refetch: () => Promise<void>
}

export const RefreshDashboardDataButton = ({
  isRefetching,
  refetch,
}: RefreshDashboardDataButtonProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button disabled={isRefetching} variant="outline" onClick={refetch}>
            <Icons.refreshCw
              size={16}
              className={isRefetching ? "animate-spin" : ""}
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Refresh Data</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
