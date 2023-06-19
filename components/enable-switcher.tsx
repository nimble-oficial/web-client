"use client"

import { FormDescription, FormField, Label, Switch } from "@/components"
import { Control, Controller, FieldValues } from "react-hook-form"

interface EnableSwitcherProps<T extends FieldValues> {
  control: Control<T>
  title: string
  description: string
}

export const EnableSwitcher = <T extends {}>({
  control,
  title,
  description,
}: EnableSwitcherProps<T>) => {
  return (
    <div className="flex flex-row items-center justify-between space-y-2 rounded-lg border p-4">
      <div className="space-y-0.5">
        {!!title && (
          <Label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {title}
          </Label>
        )}
        {!!description && (
          <FormDescription className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {description}
          </FormDescription>
        )}
      </div>

      <FormField
        control={control}
        name="enabled"
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
            </div>
          </div>
        )}
      />
    </div>
  )
}
