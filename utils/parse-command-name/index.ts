export const parseCommandName = (commandName: string = ""): string => {
  if (!commandName || !commandName?.trim().length) {
    return ""
  }

  if (!commandName.startsWith("!")) {
    commandName = `!${commandName}`
  }

  return commandName
}
