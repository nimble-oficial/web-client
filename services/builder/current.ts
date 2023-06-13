import { api } from "@/infra"

export const getCurrentBuilder = <T>(id: string) =>
  api.get<T>(`/builders/${id}`)
