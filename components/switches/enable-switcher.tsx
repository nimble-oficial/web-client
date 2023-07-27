"use client"

import { FormDescription, FormField, Label, Switch } from "@/components"
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form"

interface EnableSwitcherProps<T extends FieldValues> {
  control: Control<T>
  title: string
  name?: string
  description: string
}

export const EnableSwitcher = <T extends {}>({
  control,
  title,
  name = "enabled",
  description,
}: EnableSwitcherProps<T>) => {
  return (
    <div className="flex w-full flex-row items-center justify-between space-y-2 rounded-lg border p-4">
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

      {/*  TODO: "name as FieldPath<T>" is ugly. Fix that */}
      <FormField
        control={control}
        name={name as FieldPath<T>}
        render={() => (
          <div className="flex items-center gap-4">
            <div className="flex items-center space-x-2">
              <Controller
                name={name as FieldPath<T>}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Switch
                    id={name}
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
