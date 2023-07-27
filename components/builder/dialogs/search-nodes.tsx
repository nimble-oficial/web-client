"use client"

import {
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components"
import { OPEN_SEARCH_NODES_DIALOG_KEYS } from "@/constants"
import { useBuilderStore, useMultiKeyPress, useZoomIntoNode } from "@/hooks"
import { SelectedNode } from "@/stores"

export const SearchNodesDialog = () => {
  const { nodes, handleToggleSearchNodesDialog, isSearchNodesDialogOpen } =
    useBuilderStore()
  const { handleFocusNode } = useZoomIntoNode(nodes)

  useMultiKeyPress(OPEN_SEARCH_NODES_DIALOG_KEYS, (ev) => {
    ev.preventDefault()
    handleToggleSearchNodesDialog()
  })

  // TODO: if an user has too much nodes, this will be slow. We need to implement a virtualized list.
  return (
    <>
      <CommandDialog
        open={isSearchNodesDialogOpen}
        onOpenChange={handleToggleSearchNodesDialog}
      >
        <CommandInput placeholder="Type a node or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          {nodes.map((node) => {
            return (
              <CommandItem
                className="line-clamp-1 cursor-pointer rounded-none"
                key={node.id}
                onSelect={() => {
                  handleToggleSearchNodesDialog()
                  handleFocusNode(node as SelectedNode)
                }}
              >
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
    </>
  )
}
