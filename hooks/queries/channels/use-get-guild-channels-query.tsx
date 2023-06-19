import { getGuildChannels } from "@/services"
import { GuildChannel } from "@/stores"
import { useQuery } from "@tanstack/react-query"

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
