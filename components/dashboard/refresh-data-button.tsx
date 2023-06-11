import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components"
import { RefreshCw } from "lucide-react"

interface RefreshDashboardCommandsDataButtonProps {
  isRefetching: boolean
  refetch: () => Promise<void>
}

export const RefreshDashboardCommandsDataButton = ({
  isRefetching,
  refetch,
}: RefreshDashboardCommandsDataButtonProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            disabled={isRefetching}
            size="sm"
            variant="outline"
            onClick={async () => {
              await refetch()
            }}
          >
            <RefreshCw
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
