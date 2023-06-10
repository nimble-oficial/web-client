import {
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
  Label,
  Switch,
  TextareaWithLimit,
} from "@/components"
import { useDashboardStore, useGetGuildMembers } from "@/hooks"
import { SendMessageNodeSchema } from "@/schemas"
import { Control, Controller, UseFormSetValue } from "react-hook-form"

interface SendMessageNodeSheetFormProps {
  setValue: UseFormSetValue<SendMessageNodeSchema>
  control: Control<SendMessageNodeSchema>
}

export const SendMessageNodeSheetForm = ({
  setValue,
  control,
}: SendMessageNodeSheetFormProps) => {
  const { selectedGuild } = useDashboardStore()
  const { data } = useGetGuildMembers({ guildId: selectedGuild?.id! })

  const members = data?.data

  return (
    <>
      <FormField
        control={control}
        name="content"
        render={({ field }) => (
          <div className="flex flex-col items-start gap-2">
            <div className="grid w-full gap-2">
              <FormLabel htmlFor="content">Content</FormLabel>

              <FormDescription>
                The message that will be sent to the user.
              </FormDescription>

              <TextareaWithLimit
                {...field}
                placeholder="Type your message here."
                id="content"
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

      <div className="mt-4 flex items-center gap-4">
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
    </>
  )
}
