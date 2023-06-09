import { appAdataper } from "@/infra"

export const getGuildRoles = <T>(id: string) =>
  appAdataper.get<T>(`/guilds/${id}/roles`)
