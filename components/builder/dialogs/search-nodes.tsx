import { useState } from "react"
import {
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components"
import { useBuilderStore, useKeyPress, useZoomIntoNode } from "@/hooks"
import { SelectedNode } from "@/stores"

export const SearchNodesDialog = () => {
  const { nodes } = useBuilderStore()
  const { handleFocusNode } = useZoomIntoNode(nodes)
  const [open, setOpen] = useState(false)

  useKeyPress("j", () => setOpen((open) => !open))

  // TODO: if an user has too much nodes, this will be slow. We need to implement a virtualized list.
  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a node or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        {nodes.map((node) => {
          return (
            <CommandItem
              className="cursor-pointer rounded-none"
              key={node.id}
              onSelect={() => {
                setOpen(false)
                handleFocusNode(node as SelectedNode)
              }}
            >
              {/*
                I guess CommandItem component considers unique item as children.
                In this case, if user create a node with the same label, it will be considered as the same item.
                So, I added a unique id to the span element. But we dont need to show it to the user.
              */}
              <span className="sr-only">{node.id}</span> {node.data.label}
            </CommandItem>
          )
        })}
      </CommandList>
    </CommandDialog>
  )
}
