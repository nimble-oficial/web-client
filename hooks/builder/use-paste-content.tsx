import { PASTE_NODE_FROM_CLIPBOARD_KEYS } from "@/constants"
import { useBuilderStore, useMultiKeyPress } from "@/hooks"
import { SelectedNode } from "@/stores"
import { parseNodeFromClipboard } from "@/utils"

export const usePasteContentIntoBuilder = () => {
  const { handleAddNode, nodes } = useBuilderStore()

  const addNode = (node: SelectedNode) => {
    if (!node) {
      return
    }

    const nodeFromClipboard = parseNodeFromClipboard(nodes, node)
    nodeFromClipboard && handleAddNode(nodeFromClipboard)
  }

  useMultiKeyPress(PASTE_NODE_FROM_CLIPBOARD_KEYS, async () => {
    const clipboardContent = await navigator.clipboard.readText()
    const parsedContent = JSON.parse(clipboardContent)

    const contentKey = parsedContent?.type

    if (!parsedContent || !contentKey) {
      return
    }

    if (contentKey === "node") {
      addNode(parsedContent?.node)
    }
  })
}
