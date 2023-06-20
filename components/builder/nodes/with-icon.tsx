"use client"

import { DEFAULT_NODE_STYLES, NODE_STYLES } from "@/constants"
import { SelectedNode } from "@/stores"
import { Handle, NodeProps, Position } from "reactflow"

import { Icon } from "./with-icon/icon"
import { Label } from "./with-icon/label"
import { Title } from "./with-icon/title"

interface WithIconProps extends NodeProps {
  data: SelectedNode["data"]
}

export const WithIcon = ({ data, isConnectable, ...props }: WithIconProps) => {
  const { icon, color } = NODE_STYLES[data?.key] || DEFAULT_NODE_STYLES

  return (
    <div {...props} className="flex items-center py-[4px] pl-1">
      <Icon color={color}>{icon}</Icon>

      {data?.key !== "command-triggered" && (
        <Handle
          type="target"
          position={Position.Top}
          isConnectable={isConnectable}
        />
      )}

      {!!data?.name ? (
        <div className="flex flex-col items-start line-clamp-1">
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
