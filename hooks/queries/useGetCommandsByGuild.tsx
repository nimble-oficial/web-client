import { api } from "@/services/api"
import { useQuery } from "@tanstack/react-query"

interface UseGetCommandsByGuildQueryProps {
  guildId: string
}

export const useGetCommandsByGuildQuery = ({
  guildId,
}: UseGetCommandsByGuildQueryProps) => {
  return useQuery([`commands-by-guild-${guildId}`], () => {
    return api.get(`/commands/by-guild/${guildId}`)
  })
}
