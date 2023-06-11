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
} from "@/components"
import { useDashboardStore } from "@/hooks"
import { Command } from "@/stores"
import { Row } from "@tanstack/react-table"
import { Edit, MoreHorizontal, Trash, Workflow } from "lucide-react"
import { createPortal } from "react-dom"

interface DataTableRowActionsProps {
  row: Row<Command>
}

export function DataTableRowActions({ row }: DataTableRowActionsProps) {
  const { handleSelectCommand, handleOpenSheet } = useDashboardStore()
  const { push } = useRouter()

  const [showDialog, setShowDialog] = useState(false)

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <MoreHorizontal className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => {
              handleOpenSheet()
              handleSelectCommand(row.original as Command)
            }}
          >
            <Edit className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => push(`/builder/${row.original.builderId}`)}
          >
            <Workflow className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Builder
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => {
              handleSelectCommand(row.original)
              setShowDialog(true)
            }}
          >
            <Trash className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
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
