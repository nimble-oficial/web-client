import { getCommandsByGuild } from "@/services"
import { Command } from "@/stores"
import { useQuery } from "@tanstack/react-query"

interface UseGetCommandsByGuildQueryProps {
  guildId: string
}

interface Response {
  data: Command[]
}

export const useGetCommandsByGuildQuery = ({
  guildId,
}: UseGetCommandsByGuildQueryProps) => {
  return useQuery(
    [`commands-by-guild-${guildId}`],
    () => getCommandsByGuild<Response>(guildId),
    {
      enabled: !!guildId,
    }
  )
}
