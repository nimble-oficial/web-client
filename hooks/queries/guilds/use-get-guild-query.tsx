import { getCurrentGuild } from "@/services"
import { useQuery } from "@tanstack/react-query"

interface UseGetGuildProps {
  guildId: string
}

export const useGetGuildQuery = ({ guildId }: UseGetGuildProps) => {
  return useQuery(["guild", guildId], () => getCurrentGuild(guildId), {
    enabled: !!guildId,
  })
}
