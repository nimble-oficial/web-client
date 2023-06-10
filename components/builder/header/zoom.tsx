import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components"
import { Minus, Plus } from "lucide-react"
import { useReactFlow, useViewport } from "reactflow"

export const BuilderZoomButton = () => {
  const viewport = useViewport()
  const { setViewport, zoomIn, zoomOut, fitView } = useReactFlow()

  return (
    <div className="flex items-center">
      <Button
        variant="outline"
        size="sm"
        className="rounded-r-none"
        onClick={() => zoomOut()}
      >
        <Minus size={15} />
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="outline" size="sm" className="rounded-none">
            <span className="text-xs">{Math.round(viewport.zoom * 100)}%</span>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => zoomIn()} className="cursor-pointer">
            Zoom in
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => zoomOut()}
            className="cursor-pointer"
          >
            Zoom out
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => fitView()}
            className="cursor-pointer"
          >
            Zoom to fit
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => setViewport({ ...viewport, zoom: 0.25 })}
            className="cursor-pointer"
          >
            Zoom to 25%
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => setViewport({ ...viewport, zoom: 0.5 })}
            className="cursor-pointer"
          >
            Zoom to 50%
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => setViewport({ ...viewport, zoom: 1 })}
            className="cursor-pointer"
          >
            Zoom to 100%
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Button
        variant="outline"
        size="sm"
        className="rounded-l-none"
        onClick={() => zoomIn()}
      >
        <Plus size={15} />
      </Button>
    </div>
  )
}
