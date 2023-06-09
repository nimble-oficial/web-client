import { EditCommandSchema } from "@/schemas"

import { api } from "../api"

export interface EditCommandData extends EditCommandSchema {
  commandId: string
  guildId: string
}

export const updateCommand = <T>(data: EditCommandData) =>
  api.patch<T>(`/commands/${data.commandId}`, data)
