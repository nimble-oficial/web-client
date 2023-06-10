import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components"
import { FIT_ZOOM_DURATION, ZOOM_LEVELS } from "@/constants"
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
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="rounded-none">
            <span className="text-xs">{Math.round(viewport.zoom * 100)}%</span>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={() => zoomIn({ duration: FIT_ZOOM_DURATION })}
            className="cursor-pointer"
          >
            Zoom in
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => zoomOut({ duration: FIT_ZOOM_DURATION })}
            className="cursor-pointer"
          >
            Zoom out
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => fitView({ duration: FIT_ZOOM_DURATION })}
            className="cursor-pointer"
          >
            Zoom to fit
          </DropdownMenuItem>

          {Object.entries(ZOOM_LEVELS).map(([key, value]) => (
            <DropdownMenuItem
              key={key}
              onClick={() =>
                setViewport(
                  { ...viewport, zoom: value },
                  {
                    duration: FIT_ZOOM_DURATION,
                  }
                )
              }
              className="cursor-pointer"
            >
              Zoom to {key}
            </DropdownMenuItem>
          ))}
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
