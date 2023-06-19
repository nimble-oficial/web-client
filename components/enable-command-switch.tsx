import { EnableSwitcher } from "@/components"
import { Control, FieldValues } from "react-hook-form"

interface EnableCommandProps<T extends FieldValues> {
  control: Control<T>
  title?: string
  description?: string
}

export const EnableCommandSwitch = <T extends {}>({
  control,
  description = "Disabled commands will not be available for use. Nothing will be executed from builder.",
  title = "Enable command",
}: EnableCommandProps<T>) => {
  return (
    <EnableSwitcher control={control} description={description} title={title} />
  )
}
