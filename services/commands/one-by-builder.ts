import { api } from "@/infra"

export const getCommandByBuilder = <T>(id: string) =>
  api.get<T>(`/commands/by-builder/${id}`)
