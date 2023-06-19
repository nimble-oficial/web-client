import { Guild } from "@/components"
import { getAuthenticatedUserGuilds } from "@/services"
import { useQuery } from "@tanstack/react-query"

type Response = Guild[]

export const useGetUserGuilds = () => {
  return useQuery(["user-guilds"], async () =>
    getAuthenticatedUserGuilds<Response>()
  )
}
