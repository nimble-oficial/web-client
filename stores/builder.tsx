import { getNodeVariantsStyles } from "@/utils/get-node-variants-styles"
import {
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  OnConnect,
  OnEdgesChange,
  OnNodesChange,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow"
import { create } from "zustand"

interface BuilderStore {
  nodes: Node[]
  edges: Edge[]
  lastSave: Date | null
  builderId: string | null
  handleAddNode: (node: Node) => void
  handleChangeNodes: (nodes: Node[]) => void
  handleChangeEdges: (edges: Edge[]) => void
  handleChangeBuilderId: (builderId: string) => void
  setLastSave: (time: Date | null) => void
  onNodesChange: OnNodesChange
  onEdgesChange: OnEdgesChange
  onConnect: OnConnect
}

const initialStates: Pick<
  BuilderStore,
  "nodes" | "edges" | "lastSave" | "builderId"
> = {
  lastSave: null,
  builderId: null,
  nodes: [
    {
      id: "1",
      type: "events",
      data: {
        label: "Received a message",
        isRoot: true,
        key: "received-message",
      },
      style: getNodeVariantsStyles("events"),
      position: { x: 250, y: 5 },
    },
  ],
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
  setLastSave: (time) => {
    set({ lastSave: time })
  },
  onNodesChange: (changes: NodeChange[]) => {
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
}))
