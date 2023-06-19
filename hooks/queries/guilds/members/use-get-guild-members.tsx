import { getGuildMembers } from "@/services"
import { useQuery } from "@tanstack/react-query"

import { Member } from "@/types/discord"

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
