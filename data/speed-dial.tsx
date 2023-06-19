import { Icons, SpeedDialButton } from "@/components"

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

export type NodeType = "messages" | "channels"

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
        <Icons.messageSquare />
      </SpeedDialButton>
    ),
    children: [
      {
        label: "Send message",
        description:
          '"Send message" action allows you to send message. You must to define the content of message.',
        key: "send-message",
        content: "",
        element: () => (
          <SpeedDialButton>
            <Icons.send className="-rotate-4" />
          </SpeedDialButton>
        ),
      },
      {
        label: "Reply message",
        description:
          '"Reply message" action allows you to reply message. You must to define the content of reply.',
        key: "reply-message",
        replyContent: "",
        element: () => (
          <SpeedDialButton>
            <Icons.reply className="-rotate-4" />
          </SpeedDialButton>
        ),
      },
      {
        label: "Reply with AI",
        description:
          '"Reply with AI" action allows you to reply message with AI.',
        key: "reply-with-chat-gpt",
        replyContent: "",
        element: () => (
          <SpeedDialButton>
            <Icons.sparkles size={24} className="dark:text-white" />
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
        <Icons.network />
      </SpeedDialButton>
    ),
    children: [
      {
        label: "Move users to a channel",
        description:
          '"Move users to a channel" action allows you to move users to a channel. Selected users only can be moved to voice channels.',
        key: "move-users-to-channel",
        channelId: "",
        element: () => (
          <SpeedDialButton>
            <Icons.arrowUpDown className="-rotate-4" />
          </SpeedDialButton>
        ),
      },
    ],
  },
  // TODO: move events to "triggers" section
  // {
  //   label: "Events",
  //   variant: "events",
  //   Icon: () => (
  //     <SpeedDialButton>
  //       <Megaphone />
  //     </SpeedDialButton>
  //   ),
  //   children: [
  //     {
  //       label: "Received message",
  //       description:
  //         '"Received message" event is triggered when a message is received. You can use this event to send a reply message.',
  //       key: "received-message",
  //       type: "events",
  //       element: () => (
  //         <SpeedDialButton>
  //           <MessageSquare className="-rotate-4" />
  //         </SpeedDialButton>
  //       ),
  //     },
  //     {
  //       label: "User joined the server",
  //       description:
  //         '"User joined the server" event is triggered when a user joined the server. You can use this event to send a welcome message.',
  //       key: "user-joined-server",
  //       type: "events",
  //       element: () => (
  //         <SpeedDialButton>
  //           <UserPlus className="-rotate-4" />
  //         </SpeedDialButton>
  //       ),
  //     },
  //     {
  //       label: "User left the server",
  //       description:
  //         '"User left the server" event is triggered when a user left the server. You can use this event to send a goodbye message.',
  //       key: "user-left-server",
  //       type: "events",
  //       element: () => (
  //         <SpeedDialButton>
  //           <UserMinus className="-rotate-4" />
  //         </SpeedDialButton>
  //       ),
  //     },
  //     {
  //       label: "Invite created",
  //       description:
  //         '"Invite created" event is triggered when an invite is created. You can use this event to send a message to the user who created the invite.',
  //       key: "invite-created",
  //       type: "events",
  //       element: () => (
  //         <SpeedDialButton>
  //           <Link className="-rotate-4" />
  //         </SpeedDialButton>
  //       ),
  //     },
  //   ],
  // },
]
