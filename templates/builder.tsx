import { useEffect, useMemo } from "react"
import { useRouter } from "next/router"
import { BuilderFlow } from "@/components"
import { useBuilderStore, useGetBuilderQuery } from "@/hooks"
import { Edge, Node, Viewport } from "reactflow"

interface BuilderData {
  edges: Edge[]
  nodes: Node[]
  viewport: Viewport
}

export const BuilderTemplate = () => {
  const { query } = useRouter()

  const builderId = query.builderId as string

  const { handleChangeBuilderId, handleChangeNodes } = useBuilderStore()

  const { data, isLoading } = useGetBuilderQuery({ builderId })

  const builderData: BuilderData = data?.data?.data

  useEffect(() => {
    handleChangeBuilderId(builderId)
  }, [builderId, handleChangeBuilderId])

  // This can be helpful to find the node in array directly.
  // This decreases the complexity of finding the node in array from O(n) to O(1).
  const nodesWithIndexField = useMemo(() => {
    if (!builderData?.nodes) return []

    return builderData?.nodes?.map((n, i) => ({ ...n, index: i }))
  }, [builderData?.nodes])

  useEffect(() => {
    handleChangeNodes(nodesWithIndexField)
  }, [handleChangeNodes, nodesWithIndexField])

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <BuilderFlow builderId={builderId} {...builderData} />
      )}
    </>
  )
}
