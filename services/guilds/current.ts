import { appAdataper } from "@/infra"

export const getCurrentGuild = <T>(id: string) =>
  appAdataper.get<T>(`/guilds/${id}`)
