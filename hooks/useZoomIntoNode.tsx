import { FIT_ZOOM_DURATION } from "@/constants"
import { SelectedNode } from "@/stores"
import { Node, useReactFlow } from "reactflow"

/**
 *`useZoomIntoNode` is a hook that zooms into the node.

 * It takes the nodes array as an argument.
 * Whenever the node is clicked, it zooms into the node.
 *
 * @param nodes - The nodes array.
 * @returns {function} handleFocusNode - It returns a function that zooms into the node.
 */
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
