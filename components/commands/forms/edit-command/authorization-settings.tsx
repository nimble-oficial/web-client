"use client"

import {
  ChannelSelect,
  FormDescription,
  FormLabel,
  RolesSelect,
} from "@/components"
import { EditCommandSchema } from "@/schemas"
import { Control, UseFormSetValue } from "react-hook-form"

interface EditAuthorizationCommandSettingsProps {
  control: Control<EditCommandSchema>
  setValue: UseFormSetValue<EditCommandSchema>
}

export const EditAuthorizationCommandSettings = ({
  setValue,
  control,
}: EditAuthorizationCommandSettingsProps) => {
  return (
    <>
      <div className="mt-4 flex flex-col items-center gap-6">
        <div className="flex w-full flex-col justify-start gap-2">
          <FormLabel htmlFor="allowedChannel">
            Allow for specific channel
          </FormLabel>
          <ChannelSelect width={670} setValue={setValue} control={control} />
          <FormDescription>
            Channel where the command will be allowed.
          </FormDescription>
        </div>

        <div className="flex w-full flex-col justify-start gap-2">
          <FormLabel htmlFor="allowedRole">Allow for specific role</FormLabel>
          <RolesSelect width={670} setValue={setValue} control={control} />
          <FormDescription>
            Role that will be allowed to use the command.
          </FormDescription>
        </div>
      </div>
    </>
  )
}
