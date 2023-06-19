import { api } from "@/infra"
import { Edge, Node, Viewport } from "reactflow"

export interface SaveBuilderData {
  nodes: Node[]
  edges: Edge[]
  builderId: string
  viewport: Viewport
}

export const saveBuilder = <T>(data: SaveBuilderData) =>
  api.patch<T>(`/builders/${data.builderId}`, {
    edges: data.edges,
    nodes: data.nodes,
    viewport: data.viewport || {
      x: 0,
      y: 0,
      zoom: 1,
    },
  })
