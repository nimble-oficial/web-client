import {
  BuilderSettingsButton,
  BuilderZoomButton,
  SaveBuilderButton,
} from "@/components"

interface BuilderFlowHeaderActionsProps {
  builderId: string
}

export const BuilderFlowHeaderActions = ({
  builderId,
}: BuilderFlowHeaderActionsProps) => {
  return (
    <div className="flex gap-2">
      <SaveBuilderButton builderId={builderId} />
      <BuilderZoomButton />
      <BuilderSettingsButton />
    </div>
  )
}
