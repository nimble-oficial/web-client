import {
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
  Label,
  Switch,
  TextareaWithLimit,
} from "@/components"
import { ReplyMessageNodeSchema } from "@/schemas"
import {
  Control,
  Controller,
  FieldValues,
  UseFormSetValue,
} from "react-hook-form"

interface ReplyMessageNodeSheetForm<T extends FieldValues> {
  setValue: UseFormSetValue<ReplyMessageNodeSchema>
  control: Control<ReplyMessageNodeSchema>
}

export const ReplyMessageNodeSheetForm = <T extends FieldValues>({
  setValue,
  control,
}: ReplyMessageNodeSheetForm<T>) => {
  return (
    <>
      <FormField
        control={control}
        name="replyContent"
        render={({ field }) => (
          <div className="flex flex-col items-start gap-2">
            <div className="grid w-full gap-2">
              <FormLabel htmlFor="content">Content</FormLabel>

              <FormDescription>
                The message that will be replied to the user.
              </FormDescription>

              <TextareaWithLimit
                limit={2000}
                placeholder="Type your message here."
                id="content"
                {...field}
                value={field.value}
              />

              <FormMessage />
            </div>
          </div>
        )}
      />

      {/* Should we add this feature in this moment? */}
      {/* <div className="flex flex-col justify-start gap-2">
        <FormLabel>Allow for Specific Channel</FormLabel>

        <FormDescription>
          Select only text channel to allow this node to be triggered in.
        </FormDescription>

        <ChannelSelect setValue={setValue} control={control} />
      </div> */}

      <FormField
        control={control}
        name="replyContent"
        render={() => (
          <div className="flex items-center gap-4">
            <div className="flex items-center space-x-2">
              <Controller
                name="enabled"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Switch
                    id="enabled"
                    checked={value}
                    onCheckedChange={onChange}
                  />
                )}
              />

              <Label htmlFor="enabled">Enabled</Label>
            </div>
          </div>
        )}
      />
    </>
  )
}
