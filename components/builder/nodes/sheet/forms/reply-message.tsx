"use client"

import {
  EnableNodeSwitch,
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
  TextareaWithLimit,
} from "@/components"
import { ReplyMessageNodeSchema } from "@/schemas"
import { Control, FieldValues } from "react-hook-form"

interface ReplyMessageNodeSheetForm<T extends FieldValues> {
  control: Control<ReplyMessageNodeSchema>
}

export const ReplyMessageNodeSheetForm = <T extends FieldValues>({
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

      <EnableNodeSwitch control={control} />
    </>
  )
}
