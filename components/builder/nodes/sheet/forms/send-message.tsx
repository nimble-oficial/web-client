"use client"

import {
  EnableNodeSwitch,
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
  TextareaWithLimit,
} from "@/components"
import { SendMessageNodeSchema } from "@/schemas"
import { Control } from "react-hook-form"

interface SendMessageNodeSheetFormProps {
  control: Control<SendMessageNodeSchema>
}

export const SendMessageNodeSheetForm = ({
  control,
}: SendMessageNodeSheetFormProps) => {
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

      <EnableNodeSwitch control={control} />
    </>
  )
}
