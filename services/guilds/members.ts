import { appAdataper } from "@/infra"

export const getGuildMembers = <T>(guildId: string) =>
  appAdataper.get<T>(`/guilds/${guildId}/members`)
