import { api } from "@/infra"
import { CreateCommandSchema } from "@/schemas"

export interface CreateCommandData {
  name: string
  description?: string
  guildId: string
}

export const createCommand = <T>(data: CreateCommandSchema) =>
  api.post<T>(`/commands`, data)
