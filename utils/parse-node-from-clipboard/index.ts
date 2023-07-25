import { DEFAULT_NODE_WIDTH } from "@/constants"
import { SelectedNode } from "@/stores"
import { Node } from "reactflow"
import { toast } from "sonner"

export const parseNodeFromClipboard = (
  nodes: Node[],
  nodeFromClipboard: SelectedNode
): SelectedNode | undefined => {
  try {
    if (!nodeFromClipboard) {
      console.log("User tried to paste a node but no node was focused")
      return
    }

    const isTryingToPasteRootNode = nodeFromClipboard?.isRoot === true

    console.log("Pasting node from clipboard...")

    if (isTryingToPasteRootNode) {
      console.log(
        "User is trying to paste a root node from clipboard. Ignoring..."
      )

      toast.error("You can not paste root nodes.")
      return
    }

    nodeFromClipboard.selected = false
    nodeFromClipboard.id = new Date().getTime().toString()
    nodeFromClipboard.position.x +=
      nodeFromClipboard?.width || DEFAULT_NODE_WIDTH
    nodeFromClipboard.index = nodes.length + 1

    return nodeFromClipboard
  } catch (err) {
    console.log("Error while pasting node from clipboard", err)
    toast.error("Error while pasting node from clipboard")
  }
}
