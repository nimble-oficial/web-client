import { SelectedNode } from "@/stores"
import { toast } from "sonner"

import { getMessageFromError } from "../get-message-from-error"

export const copyNodeToClipboard = (focusedNode: SelectedNode | null) => {
  try {
    if (!focusedNode) {
      console.log("User tried to copy a node but no node was focused")
      return
    }

    navigator.clipboard.writeText(
      JSON.stringify(
        {
          type: "node",
          node: focusedNode,
        },
        null,
        2
      )
    )

    if (!!focusedNode?.data?.name) {
      return toast.success(
        `Node "${focusedNode?.data.name}" copied to clipboard`
      )
    }

    toast.success(`Node "${focusedNode?.data.label}" copied to clipboard`)
  } catch (err) {
    toast.error(getMessageFromError(err))
  }
}
