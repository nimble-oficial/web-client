"use client"

import { useCallback } from "react"
import { useAppStore } from "@/hooks"

const CHANNEL_TYPES = {
  text: 0,
  voice: 2,
}

export const useGetGuildChannelsByType = () => {
  const { channels, isChannelsLoading, channelsError } = useAppStore()

  const getChannelsByType = useCallback(
    (type: keyof typeof CHANNEL_TYPES) => {
      const foundAllByType = channels?.filter(
        (channel) => channel.type === CHANNEL_TYPES[type]
      )

      return foundAllByType || []
    },
    [channels]
  )

  return {
    getChannelsByType,
    isLoading: isChannelsLoading,
    error: channelsError,
  }
}
