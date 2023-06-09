import { api } from "@/services/api"
import { useQuery } from "@tanstack/react-query"

interface UseGetGuildProps {
  guildId: string
}

export const useGetGuildQuery = ({ guildId }: UseGetGuildProps) => {
  return useQuery(
    ["guild", guildId],
    async () => {
      return api.get(`/guilds/${guildId}`)
    },
    {
      enabled: !!guildId,
    }
  )
}
