import { SpeedDialGroupChildrenKey } from "@/data"
import { Command, HelpCircle, Reply, Send, StarsIcon } from "lucide-react"

export const FIT_ZOOM_DURATION = 1000
export const ZOOM_LEVELS = {
  "25%": 0.25,
  "50%": 0.5,
  "75%": 0.75,
  "100%": 1,
}

type StylesMap = {
  [key in SpeedDialGroupChildrenKey]: {
    icon: JSX.Element
    color: string
  }
}

export const DEFAULT_NODE_STYLES = {
  icon: (
    <HelpCircle size={11} className="text-yellow-700 dark:text-yellow-300" />
  ),
  color: "bg-yellow-100 dark:bg-yellow-900",
}

export const NODE_STYLES: StylesMap = {
  "send-message": {
    icon: <Send size={11} className="text-blue-700 dark:text-blue-300" />,
    color: "bg-blue-100 dark:bg-blue-900",
  },
  "reply-message": {
    icon: <Reply size={11} className="text-purple-700 dark:text-purple-300" />,
    color: "bg-purple-100 dark:bg-purple-900",
  },
  "command-triggered": {
    icon: <Command size={11} className="text-slate-700 dark:text-slate-300" />,
    color: "bg-slate-100 dark:bg-slate-700",
  },
  "reply-with-chat-gpt": {
    icon: (
      <StarsIcon size={11} className="text-yellow-700 dark:text-yellow-300" />
    ),
    color: "bg-yellow-100 dark:bg-yellow-900",
  },
  "move-users-to-channel": {
    icon: (
      <Send size={11} className="rotate-90 text-blue-700 dark:text-blue-300" />
    ),
    color: "bg-blue-100 dark:bg-blue-900",
  },
}
