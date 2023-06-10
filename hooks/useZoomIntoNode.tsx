import { FIT_ZOOM_DURATION } from "@/constants"
import { SelectedNode } from "@/stores"
import { Node, useReactFlow } from "reactflow"

export const useZoomIntoNode = (nodes: Node[]) => {
  const { setCenter } = useReactFlow()

  const handleFocusNode = (node: SelectedNode) => {
    const foundNode = nodes?.[node.index]

    if (!foundNode) {
      return
    }

    const x = foundNode.position.x + foundNode.width! / 2
    const y = foundNode.position.y + foundNode.height! / 2

    const zoom = 1.85

    setCenter(x, y, { zoom, duration: FIT_ZOOM_DURATION })
  }

  return { handleFocusNode }
}
