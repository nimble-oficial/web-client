import { getCurrentBuilder } from "@/services"
import { useQuery } from "@tanstack/react-query"
import { Edge, Node, Viewport } from "reactflow"

interface UseGetBuilderQueryProps {
  builderId: string
}

interface Response {
  data: {
    edges: Edge[]
    nodes: Node[]
    viewport: Viewport
  }
}

export const useGetBuilderQuery = ({ builderId }: UseGetBuilderQueryProps) => {
  return useQuery(
    [`builderId-${builderId}`],
    () => getCurrentBuilder<Response>(builderId),
    {
      enabled: !!builderId,
    }
  )
}
