import { getCommandsByGuild } from "@/services"
import { useQuery } from "@tanstack/react-query"

interface UseGetCommandsByGuildQueryProps {
  guildId: string
}

export const useGetCommandsByGuildQuery = ({
  guildId,
}: UseGetCommandsByGuildQueryProps) => {
  return useQuery([`commands-by-guild-${guildId}`], async () =>
    getCommandsByGuild(guildId)
  )
}
