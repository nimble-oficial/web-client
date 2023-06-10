import { useState } from "react"
import {
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components"
import { useBuilderStore, useKeyPress } from "@/hooks"
import { SelectedNode } from "@/stores"
import { useReactFlow } from "reactflow"

export const SearchNodesDialog = () => {
  const { setCenter } = useReactFlow()
  const { nodes } = useBuilderStore()
  const [open, setOpen] = useState(false)

  useKeyPress("j", () => setOpen((open) => !open))

  const handleFocusNode = (node: SelectedNode) => {
    const foundNode = nodes?.[node.index]

    if (!foundNode) {
      return
    }

    const x = foundNode.position.x + foundNode.width! / 2
    const y = foundNode.position.y + foundNode.height! / 2

    const zoom = 1.85

    setOpen(false)
    setCenter(x, y, { zoom, duration: 1000 })
  }

  // TODO: if an user has too many nodes, this will be slow. We need to implement a virtualized list.
  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a node or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        {nodes.map((node) => {
          return (
            <CommandItem
              className="cursor-pointer"
              key={node.id}
              onSelect={() => handleFocusNode(node as SelectedNode)}
            >
              {node.data.label}
            </CommandItem>
          )
        })}
      </CommandList>
    </CommandDialog>
  )
}
