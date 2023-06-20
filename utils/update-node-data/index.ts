import { CSSProperties } from "react"
import { SelectedNode } from "@/stores"
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
}: UpdateNodeDataProps<T>): Node[] | never => {
  const clonedNodes = [...nodes]

  if (!selectedNode) {
    return []
  }

  const selectedNodeIndex = selectedNode.index

  clonedNodes[selectedNodeIndex] = {
    ...clonedNodes[selectedNodeIndex],
    style: {
      ...(clonedNodes[selectedNodeIndex]?.style || {}),
      ...style,
    },
    data: {
      ...clonedNodes[selectedNodeIndex]?.data,
      ...overrides,
    },
  }

  return clonedNodes
}
