import { api } from "../api"

export interface CreateCommandData {
  name: string
  description: string
  guildId: string
  // options: {
  //   notEnabledMessage: string
  //   canSendNotEnabledMessage: boolean
  // }
}

export const createCommand = <T>(data: CreateCommandData) =>
  api.post<T>(`/commands`, data)
