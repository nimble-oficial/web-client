import { useEffect } from "react"
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

  const { handleChangeBuilderId } = useBuilderStore()

  const { data, isLoading } = useGetBuilderQuery({ builderId })

  const builderData: BuilderData = data?.data?.data

  useEffect(() => {
    handleChangeBuilderId(builderId)
  }, [builderId, handleChangeBuilderId])

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
