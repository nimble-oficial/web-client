import { api } from "@/services/api"
import { useQuery } from "@tanstack/react-query"

interface UseGetGuildRolesProps {
  guildId: string
  enabled?: boolean
}

export const useGetGuildRoles = ({
  guildId,
  enabled = true,
}: UseGetGuildRolesProps) => {
  return useQuery(
    ["guild-roles", guildId],
    async () => {
      return api.get(`/guilds/${guildId}/roles`)
    },
    {
      enabled: !!guildId && enabled,
    }
  )
}
