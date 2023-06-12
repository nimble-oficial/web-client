"use client"

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
} from "@/components"
import { useNodeSheetStore } from "@/hooks"

export interface NodeSheetProviderProps {
  children: React.ReactNode
  handleSave: () => void
}

export const NodeSheetProvider = ({
  children,
  handleSave,
}: NodeSheetProviderProps) => {
  const { handleCloseSheet, isSheetOpen, selectedNode } = useNodeSheetStore()

  return (
    <Sheet open={isSheetOpen} onOpenChange={handleCloseSheet}>
      <SheetContent position="right" size="sm">
        <SheetHeader>
          <SheetTitle>{selectedNode?.data?.label}</SheetTitle>
          <SheetDescription>{selectedNode?.data?.description}</SheetDescription>
        </SheetHeader>

        <div className="grid gap-4 py-4">
          <Separator />
          {children}
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" onClick={handleSave}>
              Save Changes
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
