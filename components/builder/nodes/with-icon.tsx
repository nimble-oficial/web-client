"use client"

import { cn } from "@/lib"
import { Send } from "lucide-react"
import { Handle, NodeProps, Position } from "reactflow"

import { Icons } from "@/components/icons"

const styles = {
  "send-message": {
    icon: <Icons.send size={11} className="text-blue-700" />,
    color: "bg-blue-300",
  },
  "reply-message": {
    icon: <Icons.reply size={11} className="text-purple-700" />,
    color: "bg-purple-300",
  },
  default: {
    icon: <Send size={11} className="text-slate-700" />,
    color: "bg-slate-300",
  },
}

export const WithIcon = ({ data, isConnectable, ...props }: NodeProps) => {
  const { icon, color } = styles?.[data.key] ?? styles.default

  return (
    <div {...props} className="flex items-center py-[4px] pl-1">
      <div
        className={cn(
          "mr-[5px] flex flex-col items-center justify-center rounded-sm p-[6px]",
          color
        )}
      >
        {icon}
      </div>

      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />

      <div className="flex flex-col items-start">
        <span className="mb-[-1px] text-[8px] text-slate-400">
          {data.label}
        </span>

        <span className="mt-[-1px] truncate text-[9px] font-semibold">
          Send "foobar"
        </span>
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={isConnectable}
      />
    </div>
  )
}
