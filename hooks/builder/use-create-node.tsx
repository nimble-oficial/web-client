"use client"

import { useCallback, useRef } from "react"
import { NewNodePayload } from "@/components"
import { SelectedNode } from "@/stores"

export const useCreateNode = () => {
  const prevPosition = useRef(2)

  const create = useCallback(({ data, index }: NewNodePayload) => {
    prevPosition.current += 50

    const createdNode: SelectedNode = {
      id: new Date().getTime().toString(),
      position: { x: 0, y: prevPosition.current },
      data,
      width: 150,
      height: 40,
      isRoot: false,
      index,
    }

    return createdNode
  }, [])
  return { create }
}
