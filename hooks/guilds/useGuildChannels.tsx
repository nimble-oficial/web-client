import { useCallback, useMemo } from "react"

import { useGetGuildChannelsQuery } from "../queries"
import { useDashboardStore } from "../stores"

const CHANNEL_TYPES = {
  text: 0,
  voice: 2,
}

export const useGetGuildChannelsByType = () => {
  const { selectedGuild } = useDashboardStore()

  const { data, isLoading, error } = useGetGuildChannelsQuery({
    guildId: selectedGuild?.id!,
  })

  const channels = useMemo(() => {
    const result = data?.data

    return result || []
  }, [data?.data])

  const getChannelsByType = useCallback(
    (type: "voice" | "text") => {
      const foundAllByType = channels?.filter(
        (channel) => channel.type === CHANNEL_TYPES[type]
      )

      return foundAllByType || []
    },
    [channels]
  )

  return {
    getChannelsByType,
    isLoading,
    error,
  }
}
