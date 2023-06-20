"use client"

import { useCallback, useRef } from "react"
import { NodeType, SpeedDialGroupChildrenKey } from "@/data/speed-dial"
import { useBuilderStore } from "@/hooks"
import { SelectedNode } from "@/stores"

interface NodePayload {
  label: string
  description: string
  variant: NodeType
  key: SpeedDialGroupChildrenKey
  index: number
}

export const useAddNewNodeToBuilder = () => {
  const { handleAddNode } = useBuilderStore()
  const prevPosition = useRef(2)

  const handleAddNewNodeToBuilder = useCallback(
    ({ description, label, variant, key, index, ...rest }: NodePayload) => {
      prevPosition.current += 50

      const createdNode: SelectedNode = {
        id: new Date().getTime().toString(),
        position: { x: 0, y: prevPosition.current },
        data: {
          ...rest,
          label,
          description,
          key,
          enabled: true,
        },
        width: 150,
        height: 40,
        isRoot: false,
        index,
      }

      handleAddNode(createdNode)

      return createdNode
    },
    [handleAddNode]
  )
  return { handleAddNewNodeToBuilder }
}
