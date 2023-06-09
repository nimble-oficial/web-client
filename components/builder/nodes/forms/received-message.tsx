import { Label, Separator, Switch } from "@/components"

export const ReceivedMessageNodeForm = () => {
  return (
    <div className="grid gap-2">
      <Separator />

      <div className="flex items-center gap-4">
        <div className="flex items-center space-x-2">
          <Switch id="enabled" />
          <Label htmlFor="enabled">Enabled</Label>
        </div>
      </div>
    </div>
  )
}
