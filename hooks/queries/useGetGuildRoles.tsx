import { getGuildRoles } from "@/services"
import { useQuery } from "@tanstack/react-query"

interface UseGetGuildRolesProps {
  guildId: string
  enabled?: boolean
}

export interface Role {
  id: string
  name: string
}

export const useGetGuildRoles = ({
  guildId,
  enabled = true,
}: UseGetGuildRolesProps) => {
  return useQuery(
    ["guild-roles", guildId],
    () => getGuildRoles<Role[]>(guildId),
    {
      enabled: !!guildId && enabled,
    }
  )
}
