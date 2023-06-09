import { api } from "../api"

export const getCommandByBuilder = <T>(id: string) =>
  api.get<T>(`/commands/by-builder/${id}`)
