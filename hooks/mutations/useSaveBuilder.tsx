import { api } from "@/services/api"
import { UseMutationOptions, useMutation } from "@tanstack/react-query"
import { AxiosResponse } from "axios"
import { Edge, Node, Viewport } from "reactflow"

export interface SaveBuilderData {
  nodes: Node[]
  edges: Edge[]
  builderId: string
  viewport: Viewport
}

interface Response {
  data: null
}

export const useSaveBuilderMutation = (
  options?: UseMutationOptions<
    AxiosResponse<Response, any>,
    unknown,
    SaveBuilderData,
    unknown
  >
) => {
  const mutation = useMutation({
    ...options,
    mutationFn: (data: SaveBuilderData) => {
      const { edges, nodes, viewport } = data

      return api.patch(`/builders/${data.builderId}`, {
        edges,
        nodes,
        viewport: viewport || {
          x: 0,
          y: 0,
          zoom: 1,
        },
      })
    },
  })

  return mutation
}
