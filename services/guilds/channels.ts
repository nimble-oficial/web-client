import { api } from "../api"

export const getGuildChannels = <T>(guildId: string) =>
  api.get<T>(`/guilds/${guildId}/channels`)
