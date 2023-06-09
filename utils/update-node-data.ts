import { SelectedNode } from "@/stores/node-sheet"
import { Node } from "reactflow"

interface UpdateNodeDataProps<T> {
  nodes: Node[]
  selectedNode: SelectedNode | null
  overrides?: Record<string, T>
}

export const updateNodeData = <T extends {}>({
  nodes,
  selectedNode,
  overrides,
}: UpdateNodeDataProps<T>) => {
  const clonedNodes = [...nodes]

  if (!selectedNode) {
    return []
  }

  clonedNodes[selectedNode.index] = {
    ...clonedNodes[selectedNode.index],

    data: {
      ...clonedNodes[selectedNode.index].data,
      ...overrides,
    },
  }

  return clonedNodes
}
