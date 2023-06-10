import { getGuildMembers } from "@/services"
import { useQuery } from "@tanstack/react-query"

interface UseGetGuildMembersProps {
  guildId: string
}

export const useGetGuildMembers = ({ guildId }: UseGetGuildMembersProps) => {
  return useQuery(["guildMembers", guildId], () => getGuildMembers(guildId))
}
