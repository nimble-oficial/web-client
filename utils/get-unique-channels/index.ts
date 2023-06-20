import { GuildChannel } from "@/types/discord"

export const getUniqueChannels = (
  channels: GuildChannel[]
): GuildChannel[] | never => {
  if (channels.length === 0) {
    return []
  }

  const uniqueItems: GuildChannel[] = []

  channels.forEach((channel) => {
    if (!uniqueItems.some((ch) => ch.name === channel.name)) {
      uniqueItems.push(channel)
    }
  })

  return uniqueItems
}
