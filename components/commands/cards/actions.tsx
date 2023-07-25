"use client"

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
  const { handleSelectCommand } = useDashboardStore()
  const { push } = useRouter()

  const [showDialog, setShowDialog] = useState(false)

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            data-testid="commands-card-actions-button"
            variant="ghost"
            className="data-[state=open]:bg-muted flex h-8 w-8 p-0"
          >
            <Icons.moreHorizontal className="h-4 w-4 rotate-90" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => {
              push(`/command/${command._id}/edit`)
            }}
          >
            <Icons.edit className="text-muted-foreground/70 mr-2 h-3.5 w-3.5" />
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => push(`/builder/${builderId}`)}
          >
            <Icons.workflow className="text-muted-foreground/70 mr-2 h-3.5 w-3.5" />
            Builder
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem
            className="cursor-pointer"
            data-testid="commands-card-actions-delete-button"
            onClick={() => {
              handleSelectCommand(command)
              setShowDialog(true)
            }}
          >
            <Icons.trash className="text-muted-foreground/70 mr-2 h-3.5 w-3.5" />
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
  )
}
