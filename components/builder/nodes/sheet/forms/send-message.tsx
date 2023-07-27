"use client"

import {
  Editor,
  EnableNodeSwitch,
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
  Input,
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
                placeholder="Eg.: Send Hello World!"
              />

              <FormDescription>The name of the node.</FormDescription>

              <FormMessage />
            </div>
          </div>
        )}
      />

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

              <Editor
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
