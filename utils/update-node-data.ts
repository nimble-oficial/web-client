import { CSSProperties } from "react"
import { SelectedNode } from "@/stores/node-sheet"
import { Node } from "reactflow"

interface UpdateNodeDataProps<T> {
  nodes: Node[]
  selectedNode: SelectedNode | null
  overrides?: Record<string, T>
  style?: CSSProperties
}

export const updateNodeData = <T extends {}>({
  nodes,
  selectedNode,
  overrides,
  style,
}: UpdateNodeDataProps<T>) => {
  const clonedNodes = [...nodes]

  if (!selectedNode) {
    return []
  }

  clonedNodes[selectedNode.index] = {
    ...clonedNodes[selectedNode.index],
    style: {
      ...(clonedNodes[selectedNode.index]?.style || {}),
      ...style,
    },
    data: {
      ...clonedNodes[selectedNode.index]?.data,
      ...overrides,
    },
  }

  return clonedNodes
}
