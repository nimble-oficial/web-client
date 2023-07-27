import { api } from "@/infra"

export const getCommandById = <T>(id: string) => api.get<T>(`/commands/${id}`)
