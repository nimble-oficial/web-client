import React from "react"

import {
  Button,
  Separator,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui"

interface CommandsSheetProviderProps {
  title: string
  description: string
  children: React.ReactNode
  isOpen: boolean
  isButtonDisabled?: boolean
  buttonLabel?: string
  handleCloseSheet: () => void
  handleSaveCommand: () => void
}

export const CommandsSheetProvider = ({
  children,
  description,
  title,
  isOpen,
  buttonLabel = "Save Changes",
  isButtonDisabled = false,
  handleCloseSheet,
  handleSaveCommand,
}: CommandsSheetProviderProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={handleCloseSheet}>
      <SheetContent position="right" size="sm">
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>

          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>

        <div className="grid gap-4 py-4">
          <Separator />
          {children}
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button
              type="submit"
              onClick={handleSaveCommand}
              disabled={isButtonDisabled}
            >
              {buttonLabel}
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
