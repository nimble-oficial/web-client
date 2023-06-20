export const getGuildIcon = (guildId: string, guildIcon: string): string => {
  if (!guildId || !guildIcon) {
    return ""
  }

  return `https://cdn.discordapp.com/icons/${guildId}/${guildIcon}.png`
}
