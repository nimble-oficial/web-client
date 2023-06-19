import { getGuildRoles } from "@/services"
import { useQuery } from "@tanstack/react-query"

import { GuildRole } from "@/types/discord"

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
    () => getGuildRoles<GuildRole[]>(guildId),
    {
      enabled: !!guildId && enabled,
    }
  )
}
