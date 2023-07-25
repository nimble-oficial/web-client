"use client"

import { Fragment, useRef } from "react"
import { Button, CommandShortcut, Icons, Separator } from "@/components"
import { useBuilderStore } from "@/hooks"
import { cn } from "@/lib"
import { useOnClickOutside } from "usehooks-ts"

interface BuilderFlowContextMenuProps {
  handleClose: () => void
  handleToggleShowUI: () => void
  contextMenuPosition: { x: number; y: number }
}

export const BuilderFlowContextMenu = ({
  handleClose,
  handleToggleShowUI,
  contextMenuPosition,
}: BuilderFlowContextMenuProps) => {
  const { handleToggleSearchNodesDialog } = useBuilderStore()

  const options = [
    [
      {
        label: "Paste here",
        onClick: () => {},
        command: "V",
      },
    ],
    [
      {
        label: "Show/Hide UI",
        onClick: handleToggleShowUI,
        command: "I",
      },
      {
        label: "Search Nodes",
        onClick: handleToggleSearchNodesDialog,
        command: "J",
      },
    ],
  ]

  const wrapperRef = useRef(null)
  useOnClickOutside(wrapperRef, handleClose)

  return (
    <div
      ref={wrapperRef}
      className={cn(
        "dark:bg-background fixed z-50 w-64 min-w-[8rem] overflow-hidden rounded-md border bg-white p-1 shadow-md"
      )}
      style={{
        top: contextMenuPosition.y,
        left: contextMenuPosition.x,
      }}
    >
      <ul className="space-y-1">
        {options.map((actions, index) => {
          const isLastOption = index === options.length - 1

          return (
            <Fragment key={`option-${index}`}>
              {actions.map((action) => (
                <Fragment key={action.label}>
                  <li>
                    <Button
                      variant="ghost"
                      className="flex h-7 w-full items-center justify-between px-2 py-0 text-left"
                      onClick={() => {
                        action.onClick()
                        handleClose()
                      }}
                    >
                      <span>{action.label}</span>

                      <CommandShortcut className="flex items-center gap-0.5">
                        <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100">
                          <Icons.command size={12} />
                          {action.command}
                        </kbd>
                      </CommandShortcut>
                    </Button>
                  </li>
                </Fragment>
              ))}

              {!isLastOption && <Separator />}
            </Fragment>
          )
        })}
      </ul>
    </div>
  )
}
