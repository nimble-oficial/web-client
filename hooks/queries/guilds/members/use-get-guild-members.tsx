import { getGuildMembers } from "@/services"
import { Member } from "@/stores"
import { useQuery } from "@tanstack/react-query"

interface UseGetGuildMembersProps {
  guildId: string
}

type Response = Array<Member>

export const useGetGuildMembers = ({ guildId }: UseGetGuildMembersProps) => {
  return useQuery(
    ["guildMembers", guildId],
    () => getGuildMembers<Response>(guildId),
    {
      enabled: !!guildId,
    }
  )
}
