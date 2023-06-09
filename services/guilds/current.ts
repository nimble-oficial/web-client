import { api } from "../api"

export const getCurrentGuild = <T>(id: string) => api.get<T>(`/guilds/${id}`)
