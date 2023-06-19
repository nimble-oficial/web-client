"use client"

import { ChannelSelect, EnableNodeSwitch } from "@/components"
import { Control, FieldValues, UseFormSetValue } from "react-hook-form"

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
      <EnableNodeSwitch control={control} />
    </>
  )
}
