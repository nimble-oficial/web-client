import { DEFAULT_OPTION_VALUES } from "@/constants"
import { GuildChannel } from "@/hooks"

export const getChannelSelectOptionLabel = (
  value: string,
  channels: GuildChannel[] | undefined
): string => {
  if (value === DEFAULT_OPTION_VALUES.allowedChannel.id) {
    return "All Channels"
  }

  return (
    channels?.find((channel) => channel.id === value)?.name ?? "All Channels"
  )
}
