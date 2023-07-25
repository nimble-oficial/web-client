"use client"

import { EditCommandSchema } from "@/schemas"
import { Control, Controller } from "react-hook-form"

import { FormDescription, FormField, Label, Switch } from "../ui"

interface CommandNotEnabledMessageSwitchProps {
  control: Control<EditCommandSchema>
}

export const CommandNotEnabledMessageSwitch = ({
  control,
}: CommandNotEnabledMessageSwitchProps) => {
  return (
    <div className="flex w-full flex-row items-center justify-between space-y-2 rounded-lg border p-4">
      <div className="space-y-0.5">
        <Label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Send command not enabled message
        </Label>

        <FormDescription className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          You can customize the message in the &quot;Command not enabled
          message&quot; field.
        </FormDescription>
      </div>

      <FormField
        control={control}
        name="sendCommandNotEnabledMessage"
        render={() => (
          <div className="flex items-center gap-4">
            <div className="flex items-center space-x-2">
              <Controller
                name="sendCommandNotEnabledMessage"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Switch
                    id="sendCommandNotEnabledMessage"
                    checked={value}
                    onCheckedChange={onChange}
                  />
                )}
              />
            </div>
          </div>
        )}
      />
    </div>
  )
}
