import { getGuildRoles } from "@/services"
import { useQuery } from "@tanstack/react-query"

interface UseGetGuildRolesProps {
  guildId: string
  enabled?: boolean
}

export interface GuildRole {
  id: string
  name: string
}

export const useGetGuildRoles = ({
  guildId,
  enabled = true,
}: UseGetGuildRolesProps) => {
  return useQuery(
    ["guild-roles", guildId],
    () => getGuildRoles<GuildRole[]>(guildId),
    {
      enabled: !!guildId && enabled,
    }
  )
}
