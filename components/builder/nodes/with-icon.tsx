"use client"

import { Command, HelpCircle, Reply, Send } from "lucide-react"
import { Handle, NodeProps, Position } from "reactflow"

import { Icon } from "./with-icon/icon"
import { Label } from "./with-icon/label"
import { Title } from "./with-icon/title"

const styles = {
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
  none: {
    icon: (
      <HelpCircle size={11} className="text-yellow-700 dark:text-yellow-300" />
    ),
    color: "bg-yellow-100 dark:bg-yellow-900",
  },
}

export const WithIcon = ({ data, isConnectable, ...props }: NodeProps) => {
  const { icon, color } = styles?.[data.key] ?? styles.none

  return (
    <div {...props} className="flex items-center py-[4px] pl-1">
      <Icon color={color}>{icon}</Icon>

      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />

      {!!data?.name ? (
        <div className="flex flex-col items-start">
          <Label>{data.label}</Label>
          <Title>{data.name}</Title>
        </div>
      ) : (
        <Title className="mt-0">{data.label}</Title>
      )}

      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={isConnectable}
      />
    </div>
  )
}
