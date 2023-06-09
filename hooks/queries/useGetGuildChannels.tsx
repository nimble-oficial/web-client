import { api } from "@/services/api"
import { useQuery } from "@tanstack/react-query"

interface UseGetGuildChannelsProps {
  guildId: string
  enabled?: boolean
}

export interface GuildChannel {
  id: string
  name: string
  position: number
  parent_id: string
  type: number
}

interface Response {
  data: GuildChannel[]
}

export const useGetGuildChannelsQuery = ({
  guildId,
  enabled = true,
}: UseGetGuildChannelsProps) => {
  return useQuery(
    ["guild-channels", guildId],
    async () => {
      return api.get<Response>(`/guilds/${guildId}/channels`)
    },
    {
      enabled: !!guildId && enabled,
    }
  )
}
