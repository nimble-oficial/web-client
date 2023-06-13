import { api } from "@/infra"
import { EditCommandSchema } from "@/schemas"

export interface EditCommandData extends EditCommandSchema {
  commandId: string
  guildId: string
}

export const updateCommand = <T>(data: EditCommandData) =>
  api.patch<T>(`/commands/${data.commandId}`, data)
