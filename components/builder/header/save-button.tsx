"use client"

import { Button } from "@/components"
import { useBuilderStore, useSaveBuilder } from "@/hooks"
import { customAPIError } from "@/utils"
import { useViewport } from "reactflow"
import { toast } from "sonner"

export const SaveBuilderButton = () => {
  const viewport = useViewport()

  const { handleSave, isLoading } = useSaveBuilder()

  const { edges, nodes, builderId } = useBuilderStore()

  if (!builderId) {
    return null
  }

  return (
    <Button
      disabled={isLoading}
      size="sm"
      onClick={async () => {
        try {
          await handleSave({
            builderId,
            edges,
            nodes,
            viewport,
          })
          toast.success("Builder saved successfully!")
        } catch (err) {
          toast.error(customAPIError(err))
        }
      }}
    >
      <span className="text-sm">{isLoading ? "Saving..." : "Save"}</span>
    </Button>
  )
}
