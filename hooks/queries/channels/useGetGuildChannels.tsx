import { getGuildChannels } from "@/services"
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

type Response = GuildChannel[]

export const useGetGuildChannelsQuery = ({
  guildId,
  enabled = true,
}: UseGetGuildChannelsProps) => {
  return useQuery(
    ["guild-channels", guildId],
    () => getGuildChannels<Response>(guildId),
    {
      enabled: !!guildId && enabled,
    }
  )
}