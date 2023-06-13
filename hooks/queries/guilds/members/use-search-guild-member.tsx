import { searchGuildMember } from "@/services"
import { useQuery } from "@tanstack/react-query"

interface UseSearchGuildMember {
  guildId: string
  search: string
}

export const useSearchGuildMember = ({
  guildId,
  search,
}: UseSearchGuildMember) => {
  return useQuery(["user-guilds"], async () =>
    searchGuildMember(guildId, search)
  )
}
