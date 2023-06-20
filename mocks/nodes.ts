import { SelectedNode } from "@/stores"
import { Node } from "reactflow"

export const nodesMock: Node[] = [
  {
    id: "1",
    data: {
      label: "command-triggered",
    },
    position: { x: 250, y: 0 },
  },
  {
    id: "2",
    data: {
      label: "send-message",
    },
    position: { x: 0, y: 0 },
  },
]

export const selectedNodeMock: SelectedNode = {
  id: "1",
  index: 0,
  isRoot: false,
  data: {
    label: "Send Message",
    description: "Send a message to the chat.",
    enabled: true,
    key: "send-message",
    name: "Send Message",
    content: "Hello, world!",
  },
  position: { x: 250, y: 0 },
}
