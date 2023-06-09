import { api } from "../api"

export const getCurrentBuilder = <T>(id: string) =>
  api.get<T>(`/builders/${id}`)
