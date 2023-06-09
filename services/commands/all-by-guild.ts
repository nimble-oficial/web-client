import { api } from "../api"

export const getCommandsByGuild = <T>(id: string) =>
  api.get<T>(`/commands/by-guild/${id}`)
