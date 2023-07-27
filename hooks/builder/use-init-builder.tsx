"use client"

import { useEffect, useMemo } from "react"
import { useBuilderStore, useDashboardStore, useGetBuilderQuery } from "@/hooks"
import useUndoable from "use-undoable"

interface UseInitBuilderProps {
  builderId: string
}

/**
 *`useInitBuilder` is a hook that initializes the builder.
 * It fetches the builder data from the server and sets it in the store.
 *
 * We dispatch events to stores because we want to share the data between components.
 *
 * @param {string} builderId - The id of the builder.
 * @returns {boolean} isLoading - It returns boolean if the data is being fetched from the server.
 *
 * @example
 * ```jsx
 * const { isLoading } = useInitBuilder()
 *
 * if (isLoading) {
 *  return <div>Loading...</div>
 * }
 * ```
 */
export const useInitBuilder = ({ builderId }: UseInitBuilderProps) => {
  const {
    handleChangeBuilderId,
    handleChangeNodes,
    handleChangeEdges,
    handleChangeViewport,
  } = useBuilderStore()

  const { handleSelectGuild } = useDashboardStore()

  const [nodes, setNodes, { undo: undoNodes, redo: redoNodes }] = useUndoable(
    []
  )
  const [edges, setEdges, { undo: undoEdges, redo: redoEdges }] = useUndoable(
    []
  )

  const { data, isLoading } = useGetBuilderQuery({ builderId })

  const builderData = data?.data?.data

  const undo = () => {
    undoNodes()
    undoEdges()
  }

  const redo = () => {
    redoNodes()
    redoEdges()
  }

  useEffect(() => {
    handleChangeBuilderId(builderId)
  }, [builderId, handleChangeBuilderId])

  useEffect(() => {
    if (!builderData?.edges) {
      return
    }

    handleChangeEdges(edges)
    setEdges(builderData?.edges)
  }, [builderData?.edges, edges, handleChangeEdges, setEdges])

  useEffect(() => {
    if (!builderData?.viewport) {
      return
    }

    handleChangeViewport(builderData?.viewport)
  }, [builderData?.viewport, handleChangeViewport])

  // This can be helpful to find the node in array directly.
  // This decreases the complexity of finding the node in array from O(n) to O(1).
  const nodesWithIndexField = useMemo(() => {
    if (!builderData?.nodes) {
      return []
    }

    return builderData?.nodes?.map((n, i) => ({ ...n, index: i }))
  }, [builderData?.nodes])

  useEffect(() => {
    handleChangeNodes(nodes)
    setNodes(nodesWithIndexField)
  }, [handleChangeNodes, nodes, nodesWithIndexField, setNodes])

  return { isLoading, undo, redo }
}
