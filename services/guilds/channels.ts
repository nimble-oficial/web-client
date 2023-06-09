import { appAdataper } from "@/infra"

export const getGuildChannels = <T>(guildId: string) =>
  appAdataper.get<T>(`/guilds/${guildId}/channels`)
