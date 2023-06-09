import { appAdataper } from "@/infra"

export const getAuthenticatedUserGuilds = <T>() =>
  appAdataper.get<T>("/users/me/guilds")
