import { SpeedDialGroupChildrenKey } from "@/data/speed-dial"
import { useNodeSheetStore } from "@/hooks"

import {
  MoverUserToChannelNodeSheet,
  ReplyMessageNodeSheet,
  ReplyMessageWithChatGptNodeSheet,
  SendMessageNodeSheet,
} from "."

type Sheets = {
  [key in SpeedDialGroupChildrenKey]: () => JSX.Element
}

export const NodesSheet = () => {
  const { selectedNode } = useNodeSheetStore()

  const selectedNodeKey = selectedNode?.data?.key as SpeedDialGroupChildrenKey

  switch (selectedNodeKey) {
    case "reply-message":
      return <ReplyMessageNodeSheet />
    case "send-message":
      return <SendMessageNodeSheet />
    case "reply-with-chat-gpt":
      return <ReplyMessageWithChatGptNodeSheet />
    case "move-users-to-channel":
      return <MoverUserToChannelNodeSheet />
    case "invite-created":
      return <div>invite-created</div>
    case "received-message":
      return <div>received-message</div>
    case "user-joined-server":
      return <div>user-joined-server</div>
    case "user-left-server":
      return <div>user-left-server</div>
    default:
      return null
  }
}
