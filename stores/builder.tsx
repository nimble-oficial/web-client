import {
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  OnConnect,
  OnEdgesChange,
  OnNodesChange,
  Viewport,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow"
import { toast } from "sonner"
import { create } from "zustand"

interface BuilderStore {
  nodes: Node[]
  edges: Edge[]
  builderId: string | null
  viewport: Viewport
  handleAddNode: (node: Node) => void
  handleChangeViewport: (viewport: Viewport) => void
  handleChangeNodes: (nodes: Node[]) => void
  handleChangeEdges: (edges: Edge[]) => void
  handleChangeBuilderId: (builderId: string) => void
  onNodesChange: OnNodesChange
  onEdgesChange: OnEdgesChange
  onConnect: OnConnect
}

const initialStates: Pick<
  BuilderStore,
  "nodes" | "edges" | "builderId" | "viewport"
> = {
  viewport: {
    zoom: 2,
    x: 0,
    y: 0,
  },
  builderId: null,
  nodes: [],
  edges: [],
}

export const builderStore = create<BuilderStore>((set, get) => ({
  ...initialStates,
  handleAddNode: (node) => {
    const prevNodes = get().nodes ?? []
    const newNodes = [...prevNodes, node]

    get().handleChangeNodes(newNodes)
  },
  handleChangeNodes: (nodes) => {
    set({ nodes })
  },
  handleChangeBuilderId: (builderId) => {
    set({ builderId })
  },
  handleChangeEdges: (edges) => {
    set({ edges })
  },
  onNodesChange: (changes: NodeChange[]) => {
    if (changes.some((change) => change.type === "remove")) {
      toast.error("You can't remove root node")
      return
    }

    set({
      nodes: applyNodeChanges(changes, get().nodes),
    })
  },
  onEdgesChange: (changes: EdgeChange[]) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    })
  },
  onConnect: (connection: Connection) => {
    set({
      edges: addEdge(connection, get().edges),
    })
  },
  handleChangeViewport: (viewport) => {
    set({ viewport })
  },
}))
