import { appAdataper } from "@/infra"

export const searchGuildMember = <T>(guildId: string, search: string) =>
  appAdataper.get<T>(`/guilds/${guildId}/members?search=${search}`)
