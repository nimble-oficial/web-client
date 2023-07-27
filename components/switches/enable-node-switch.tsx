import { EnableSwitcher } from "@/components"
import { Control, FieldValues } from "react-hook-form"

interface EnableNodeProps<T extends FieldValues> {
  control: Control<T>
  title?: string
  description?: string
}

export const EnableNodeSwitch = <T extends {}>({
  control,
  description = "Disabled nodes will not be available for use. Nothing will be executed from them.",
  title = "Enable Node",
}: EnableNodeProps<T>) => {
  return (
    <EnableSwitcher control={control} description={description} title={title} />
  )
}
