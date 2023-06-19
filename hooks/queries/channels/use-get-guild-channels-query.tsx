import { getGuildChannels } from "@/services"
import { useQuery } from "@tanstack/react-query"

import { GuildChannel } from "@/types/discord"

interface UseGetGuildChannelsProps {
  guildId: string
  enabled?: boolean
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
