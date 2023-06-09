import { EditCommandSchema } from "@/schemas"

import { api } from "../api"

export interface EditCommandData extends EditCommandSchema {
  commandId: string
}

export const updateCommand = <T>({
  commandId,
  name,
  description,
  enabled,
  allowedChannel,
}: EditCommandData) =>
  api.patch<T>(`/commands/${commandId}`, {
    name,
    description,
    enabled,
    allowedChannel,
  })
