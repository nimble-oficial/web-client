import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  Button,
  DeleteCommandDialog,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
  Icons,
} from "@/components"
import { useDashboardStore } from "@/hooks"
import { Command } from "@/stores"
import { createPortal } from "react-dom"

interface DashboardCommandsCardActions extends Command {}

export const DashboardCommandsCardActions = (
  command: DashboardCommandsCardActions
) => {
  const { builderId } = command
  const { handleSelectCommand, handleOpenSheet } = useDashboardStore()
  const { push } = useRouter()

  const [showDialog, setShowDialog] = useState(false)

  return (
    <button>
      <>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
            >
              <Icons.moreHorizontal className="h-4 w-4 rotate-90" />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[160px]">
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => {
                handleOpenSheet()
                handleSelectCommand(command)
              }}
            >
              <Icons.edit className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => push(`/builder/${builderId}`)}
            >
              <Icons.workflow className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
              Builder
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => {
                handleSelectCommand(command)
                setShowDialog(true)
              }}
            >
              <Icons.trash className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
              Delete
              <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {showDialog &&
          createPortal(
            <DeleteCommandDialog
              isOpen={showDialog}
              onClose={() => setShowDialog(false)}
            />,
            document.body
          )}
      </>
    </button>
  )
}
