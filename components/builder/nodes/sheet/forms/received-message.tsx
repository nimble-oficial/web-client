"use client"

import { ChannelSelect, FormField, Label, Switch } from "@/components"
import {
  Control,
  Controller,
  FieldValues,
  UseFormSetValue,
} from "react-hook-form"

interface ReplyMessageNodeSheetForm {
  setValue: UseFormSetValue<FieldValues>
  control: Control<FieldValues>
}

export const ReceivedMessageNodeSheetForm = ({
  setValue,
  control,
}: ReplyMessageNodeSheetForm) => {
  return (
    <>
      <ChannelSelect setValue={setValue} control={control} />

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
