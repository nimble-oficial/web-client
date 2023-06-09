import {
  ArrowUpDown,
  Link,
  Megaphone,
  MessageSquare,
  Network,
  Reply,
  Send,
  UserMinus,
  UserPlus,
} from "lucide-react"

import { SpeedDialButton } from "@/components/builder/flow/speed-dial/actions/button"
import { Icons } from "@/components/icons"

export type SpeedDialMessagesGroupChildrenKey =
  | "reply-message"
  | "send-message"
  | "reply-with-chat-gpt"

export type SpeedDialChannelsGroupChildrenKey = "move-users-to-channel"

type SpeedDialServerGroupChildrenKey =
  | "received-message"
  | "user-joined-server"
  | "user-left-server"
  | "invite-created"

export type SpeedDialGroupChildrenKey =
  | SpeedDialServerGroupChildrenKey
  | SpeedDialMessagesGroupChildrenKey
  | SpeedDialChannelsGroupChildrenKey

export type NodeType = "events" | "messages" | "channels"

interface SendMessageAction {
  content?: string
}

interface MoveToChannelAction {
  channelId?: string
}

interface ReplyMessageAction {
  replyContent?: string
}

interface SpeedDialGroupChildren
  extends SendMessageAction,
    ReplyMessageAction,
    MoveToChannelAction {
  element: () => JSX.Element
  label: string
  description: string
  key: SpeedDialGroupChildrenKey
  type: NodeType
}

export interface SpeedDialGroup {
  label: string
  variant: NodeType
  children: SpeedDialGroupChildren[]
  Icon: () => JSX.Element
}

export const SPEED_DIAL_GROUPS: SpeedDialGroup[] = [
  {
    label: "Messages",
    variant: "messages",
    Icon: () => (
      <SpeedDialButton>
        <MessageSquare />
      </SpeedDialButton>
    ),
    children: [
      {
        label: "Send message",
        description:
          '"Send message" action allows you to send message. You must to define the content of message.',
        key: "send-message",
        content: "",
        type: "messages",
        element: () => (
          <SpeedDialButton>
            <Send className="-rotate-4" />
          </SpeedDialButton>
        ),
      },
      {
        label: "Reply message",
        description:
          '"Reply message" action allows you to reply message. You must to define the content of reply.',
        key: "reply-message",
        replyContent: "",
        type: "messages",
        element: () => (
          <SpeedDialButton>
            <Reply className="-rotate-4" />
          </SpeedDialButton>
        ),
      },
      {
        label: "Reply with Chat GPT",
        description:
          '"Reply with Chat GPT" action allows you to reply message with Chat GPT. Chat GPT Will generate a reply based on the context of the message.',
        key: "reply-with-chat-gpt",
        replyContent: "",
        type: "messages",
        element: () => (
          <SpeedDialButton>
            <Icons.chatgpt />
          </SpeedDialButton>
        ),
      },
    ],
  },
  {
    label: "Channels",
    variant: "channels",
    Icon: () => (
      <SpeedDialButton>
        <Network />
      </SpeedDialButton>
    ),
    children: [
      {
        label: "Move users to a channel",
        description:
          '"Move users to a channel" action allows you to move users to a channel. Selected users only can be moved to voice channels.',
        key: "move-users-to-channel",
        channelId: "",
        type: "channels",
        element: () => (
          <SpeedDialButton>
            <ArrowUpDown className="-rotate-4" />
          </SpeedDialButton>
        ),
      },
    ],
  },
  {
    label: "Events",
    variant: "events",
    Icon: () => (
      <SpeedDialButton>
        <Megaphone />
      </SpeedDialButton>
    ),
    children: [
      {
        label: "Received message",
        description:
          '"Received message" event is triggered when a message is received. You can use this event to send a reply message.',
        key: "received-message",
        type: "events",
        element: () => (
          <SpeedDialButton>
            <MessageSquare className="-rotate-4" />
          </SpeedDialButton>
        ),
      },
      {
        label: "User joined the server",
        description:
          '"User joined the server" event is triggered when a user joined the server. You can use this event to send a welcome message.',
        key: "user-joined-server",
        type: "events",
        element: () => (
          <SpeedDialButton>
            <UserPlus className="-rotate-4" />
          </SpeedDialButton>
        ),
      },
      {
        label: "User left the server",
        description:
          '"User left the server" event is triggered when a user left the server. You can use this event to send a goodbye message.',
        key: "user-left-server",
        type: "events",
        element: () => (
          <SpeedDialButton>
            <UserMinus className="-rotate-4" />
          </SpeedDialButton>
        ),
      },
      {
        label: "Invite created",
        description:
          '"Invite created" event is triggered when an invite is created. You can use this event to send a message to the user who created the invite.',
        key: "invite-created",
        type: "events",
        element: () => (
          <SpeedDialButton>
            <Link className="-rotate-4" />
          </SpeedDialButton>
        ),
      },
    ],
  },
]
