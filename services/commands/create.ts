import { CreateCommandSchema } from "@/schemas"

import { api } from "../api"

export interface CreateCommandData {
  name: string
  description?: string
  guildId: string
}

export const createCommand = <T>(data: CreateCommandSchema) =>
  api.post<T>(`/commands`, data)
