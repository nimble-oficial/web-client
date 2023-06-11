import { GuildChannel } from "@/hooks"

export const getUniqueChannels = (channels: GuildChannel[]): GuildChannel[] => {
  const uniqueItems: typeof channels = []

  channels.forEach((channel) => {
    if (!uniqueItems.some((ch) => ch.name === channel.name)) {
      uniqueItems.push(channel)
    }
  })

  return uniqueItems
}
