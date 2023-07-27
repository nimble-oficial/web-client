import { ChannelSelect, EnableNodeSwitch } from "@/components"
import { MoveUsersToChannelNodeSchema } from "@/schemas"
import { Control, FieldValues, UseFormSetValue } from "react-hook-form"

import {
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
  Input,
} from "@/components/ui"

interface MoveUsersToChannelNodeSheetForm<T extends FieldValues> {
  control: Control<MoveUsersToChannelNodeSchema>
  setValue: UseFormSetValue<MoveUsersToChannelNodeSchema>
}

export const MoveUsersToChannelNodeSheetForm = <T extends FieldValues>({
  control,
  setValue,
}: MoveUsersToChannelNodeSheetForm<T>) => {
  return (
    <>
      <FormField
        control={control}
        name="name"
        render={({ field }) => (
          <div className="flex flex-col items-start gap-2">
            <div className="grid w-full gap-2">
              <FormLabel htmlFor="name">Name</FormLabel>

              <Input
                type="text"
                id="name"
                {...field}
                value={field.value}
                placeholder="Eg.: Replies with pong"
              />

              <FormDescription>The name of the node.</FormDescription>

              <FormMessage />
            </div>
          </div>
        )}
      />

      <div className="flex flex-col justify-start gap-2">
        <FormLabel htmlFor="allowedChannel">Channel to move users to</FormLabel>
        <ChannelSelect
          setValue={setValue}
          control={control}
          channelType="voice"
          name="channelToMoveUsers"
          width={800}
        />
      </div>

      <EnableNodeSwitch control={control} />
    </>
  )
}
