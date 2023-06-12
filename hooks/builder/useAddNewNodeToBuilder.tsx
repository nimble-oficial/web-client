"use client"

import { useCallback, useRef } from "react"
import { NodeType, SpeedDialGroupChildrenKey } from "@/data/speed-dial"
import { useBuilderStore } from "@/hooks"
import { getNodeVariantsStyles } from "@/utils"
import { Node } from "reactflow"

interface NodePayload {
  label: string
  description: string
  variant: NodeType
  key: SpeedDialGroupChildrenKey
}

export const useAddNewNodeToBuilder = () => {
  const { handleAddNode } = useBuilderStore()
  const prevPosition = useRef(0)

  const handleAddNewNodeToBuilder = useCallback(
    ({ description, label, variant, key, ...rest }: NodePayload) => {
      prevPosition.current += 50

      const createdNode: Node = {
        // TODO: use uuid
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
        style: getNodeVariantsStyles(variant),
      }

      handleAddNode(createdNode)

      return createdNode
    },
    [handleAddNode]
  )
  return { handleAddNewNodeToBuilder }
}
