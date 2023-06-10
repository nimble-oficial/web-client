import {
  BuilderSettingsButton,
  BuilderZoomButton,
  SaveBuilderButton,
} from "@/components"

export const BuilderFlowHeaderActions = () => {
  return (
    <div className="flex gap-2">
      <SaveBuilderButton />
      <BuilderZoomButton />
      <BuilderSettingsButton />
    </div>
  )
}
