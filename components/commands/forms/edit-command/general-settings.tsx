"use client"

import { EnableCommandSwitch } from "@/components"
import { EditCommandSchema } from "@/schemas"
import { Control } from "react-hook-form"

import { CommandNotEnabledMessageSwitch } from "@/components/switches/command-not-enabled-message-switch"
import {
  Editor,
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
  Input,
  Separator,
} from "@/components/ui"

interface EditGeneralCommandSettingsProps {
  control: Control<EditCommandSchema>
}

export const EditGeneralCommandSettings = ({
  control,
}: EditGeneralCommandSettingsProps) => {
  return (
    <div className="mt-4 flex flex-col items-center gap-6">
      <FormField
        control={control}
        name="name"
        render={({ field }) => (
          <div className="flex w-full flex-col justify-start gap-2">
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              placeholder="Eg.: !ping"
              className="col-span-3"
              id="name"
              {...field}
            />
            <FormDescription>
              Name to be used to call the command.
            </FormDescription>

            <FormMessage />
          </div>
        )}
      />

      <FormField
        control={control}
        name="description"
        render={({ field }) => (
          <div className="col-span-2 flex w-full flex-col justify-start gap-2">
            <FormLabel htmlFor="description">Description</FormLabel>
            <Input
              placeholder="Eg.: Replies with pong"
              className="col-span-3"
              id="description"
              {...field}
            />

            <FormDescription>
              Description describes what the command does.
            </FormDescription>

            <FormMessage />
          </div>
        )}
      />

      <FormField
        control={control}
        name="commandNotEnabledMessage"
        render={({ field }) => (
          <div className="flex w-full flex-col justify-start gap-2">
            <FormLabel htmlFor="commandNotEnabledMessage">
              Command not enabled message
            </FormLabel>

            <Editor
              id="commandNotEnabledMessage"
              placeholder="Eg.: This comand is not enabled."
              {...field}
            />

            <FormMessage />
          </div>
        )}
      />

      <Separator />

      <EnableCommandSwitch control={control} />
      <CommandNotEnabledMessageSwitch control={control} />
    </div>
  )
}
