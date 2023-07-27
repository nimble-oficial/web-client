import { useTimeAgo } from "@/hooks"
import { cn } from "@/lib"
import { Command } from "@/stores"
import { CalendarDays, Shield } from "lucide-react"

import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui"

import { DashboardCommandsCardActions } from "./actions"

interface DashboardCommandsCardProps extends Command {}

export const DashboardCommandsCard = (command: DashboardCommandsCardProps) => {
  const { enabled, name, description, allowedChannel, createdAt, allowedRole } =
    command

  const createdAtTime = useTimeAgo(new Date(createdAt))

  return (
    <Card
      className="flex flex-col justify-between gap-1 space-y-1.5 p-4 duration-100 hover:shadow-lg"
      data-testid="commands-card"
    >
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <CardTitle
              className={cn("line-clamp-1", enabled ? "" : "max-w-[100px]")}
            >
              {name}
            </CardTitle>

            {enabled === false && (
              <Badge variant="secondary" className="w-fit">
                Disabled
              </Badge>
            )}
          </div>

          <DashboardCommandsCardActions {...command} />
        </div>
        <CardDescription className="line-clamp-2">
          {description ?? "No description provided."}
        </CardDescription>
      </div>

      <CardContent className="px-0 pb-4">
        <div className="flex flex-col items-start gap-1">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="flex items-center gap-1.5 text-sm text-zinc-600 dark:text-zinc-400">
                  <Shield size={15} />

                  <span className="text-sm">
                    {allowedChannel.name}, {allowedRole.name}
                  </span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Allowed Channel and Allowed Role</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="flex items-center gap-1.5 text-sm text-zinc-600 dark:text-zinc-400">
                  <CalendarDays size={15} />
                  {createdAtTime}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Created {createdAtTime}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardContent>
    </Card>
  )
}
