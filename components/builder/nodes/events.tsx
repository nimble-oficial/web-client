import { Handle, NodeProps, Position } from "reactflow"

export const EventsNode = (props: NodeProps) => {
  return (
    <div {...props}>
      <Handle type="source" id="bottom" position={Position.Bottom} />
      {props.data.label}
    </div>
  )
}
