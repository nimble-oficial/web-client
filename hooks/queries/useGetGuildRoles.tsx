import { getGuildRoles } from "@/services"
import { useQuery } from "@tanstack/react-query"

interface UseGetGuildRolesProps {
  guildId: string
  enabled?: boolean
}

export const useGetGuildRoles = ({
  guildId,
  enabled = true,
}: UseGetGuildRolesProps) => {
  return useQuery(["guild-roles", guildId], () => getGuildRoles(guildId), {
    enabled: !!guildId && enabled,
  })
}
