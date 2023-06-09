import { api } from "../api"

export const getGuildRoles = <T>(id: string) =>
  api.get<T>(`/guilds/${id}/roles`)
