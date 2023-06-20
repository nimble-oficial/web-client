"use client"

import { SpeedDialGroupChildrenKey } from "@/data/speed-dial"
import { useNodeSheetStore } from "@/hooks"

import { ReplyMessageNodeSheet, SendMessageNodeSheet } from "."

export const NodesSheet = () => {
  const { selectedNode } = useNodeSheetStore()

  const selectedNodeKey = selectedNode?.data?.key as SpeedDialGroupChildrenKey

  switch (selectedNodeKey) {
    case "reply-message":
      return <ReplyMessageNodeSheet />
    case "send-message":
      return <SendMessageNodeSheet />
    // case "reply-with-chat-gpt":
    //   return <ReplyMessageWithChatGptNodeSheet />
    // case "move-users-to-channel":
    //   return <MoverUserToChannelNodeSheet />
    default:
      return null
  }
}
