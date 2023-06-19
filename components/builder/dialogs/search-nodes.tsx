"use client"

import { useState } from "react"
import {
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components"
import { useBuilderStore, useMultiKeyPress, useZoomIntoNode } from "@/hooks"
import { SelectedNode } from "@/stores"

export const SearchNodesDialog = () => {
  const { nodes } = useBuilderStore()
  const { handleFocusNode } = useZoomIntoNode(nodes)
  const [open, setOpen] = useState(false)

  useMultiKeyPress(["Meta", "J"], (ev) => {
    ev.preventDefault()
    setOpen(true)
  })

  // TODO: if an user has too much nodes, this will be slow. We need to implement a virtualized list.
  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a node or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        {nodes.map((node) => {
          return (
            <CommandItem
              className="cursor-pointer rounded-none line-clamp-1"
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

              {!!node?.data?.name ? (
                <div className="flex w-full items-center gap-1">
                  <span className="truncate">{node?.data?.name}</span> -
                  <span className="w-[200px]"> {node.data.label}</span>
                </div>
              ) : (
                <>
                  <span className="sr-only">{node.id}</span>
                  {node.data.label}
                </>
              )}
            </CommandItem>
          )
        })}
      </CommandList>
    </CommandDialog>
  )
}
