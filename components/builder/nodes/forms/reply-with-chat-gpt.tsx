import { Label, Separator, Switch } from "@/components"
import { ReplyMessageWithChatGptNodeSchema } from "@/schemas"
import { Control, Controller } from "react-hook-form"

interface ReplyMessageNodeFormProps {
  control: Control<ReplyMessageWithChatGptNodeSchema>
}

export const ReplyMessageWithChatGptNodeForm = ({
  control,
}: ReplyMessageNodeFormProps) => {
  return (
    <div className="grid gap-2">
      <Separator />

      <div className="flex items-center gap-4">
        <div className="flex items-center space-x-2">
          <Controller
            name="enabled"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Switch id="enabled" checked={value} onCheckedChange={onChange} />
            )}
          />

          <Label htmlFor="enabled">Enabled</Label>
        </div>
      </div>
    </div>
  )
}
