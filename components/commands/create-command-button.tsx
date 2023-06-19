"use client"

import { useState } from "react"
import { Button, CreateCommandDialog, Icons } from "@/components"

export const CreateCommandDashboardButton = () => {
  const [isCreateCommandDialogOpen, setIsCreateCommandDialogOpen] =
    useState(false)

  return (
    <>
      <CreateCommandDialog
        onClose={() => setIsCreateCommandDialogOpen(false)}
        isOpen={isCreateCommandDialogOpen}
      />

      <Button
        onClick={() => {
          setIsCreateCommandDialogOpen(true)
        }}
        data-testid="create-command-button"
      >
        <Icons.plus size={17} className="mr-1.5" />
        New Command
      </Button>
    </>
  )
}
