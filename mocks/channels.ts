import { GuildChannel } from "@/types/discord"

export const guildChanelsMock: GuildChannel[] = Array.from({ length: 10 }).map(
  (_, index) => ({
    id: index.toString(),
    name: `channel-${index}`,
    position: index,
    parent_id: index === 0 ? "0" : (index - 1).toString(),
    type: 0,
  })
)
