import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components"
import { useBuilderStore } from "@/hooks"
import { XCircle } from "lucide-react"
import {
  BaseEdge,
  EdgeLabelRenderer,
  EdgeProps,
  getBezierPath,
} from "reactflow"

import { Button } from "@/components/ui"

export function DefaultEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}: EdgeProps) {
  const { edges, handleChangeEdges } = useBuilderStore()

  const onEdgeClick = (event: React.MouseEvent) => {
    event.stopPropagation()

    const newEdges = edges.filter((edge) => edge.id !== id)
    handleChangeEdges(newEdges)
  }

  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  })

  return (
    <>
      <BaseEdge path={edgePath} markerEnd={markerEnd} style={style} />
      <EdgeLabelRenderer>
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            fontSize: 12,
            pointerEvents: "all",
          }}
          className="nodrag nopan"
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="h-fit w-fit rounded-full bg-white p-0 dark:bg-slate-900"
                  onClick={onEdgeClick}
                >
                  <XCircle className="h-4 w-4" />
                  <span className="sr-only">Add</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Remove connection</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </EdgeLabelRenderer>
    </>
  )
}
