"use client"

import { SpeedDialGroupChildrenKey } from "@/data/speed-dial"
import { useNodeSheetStore } from "@/hooks"
import { createPortal } from "react-dom"

import {
  MoveUsersToChannelNodeSheet,
  ReplyMessageNodeSheet,
  SendMessageNodeSheet,
} from "."

export const NodesSheet = () => {
  const { selectedNode } = useNodeSheetStore()
  const selectedNodeKey = selectedNode?.data?.key as SpeedDialGroupChildrenKey

  return (
    <>
      {selectedNodeKey === "reply-message" &&
        createPortal(<ReplyMessageNodeSheet />, document.body)}

      {selectedNodeKey === "send-message" &&
        createPortal(<SendMessageNodeSheet />, document.body)}

      {selectedNodeKey === "move-users-to-channel" &&
        createPortal(<MoveUsersToChannelNodeSheet />, document.body)}
    </>
  )
}
