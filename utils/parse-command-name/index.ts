export const parseCommandName = (commandName: string = ""): string => {
  if (!commandName || !commandName?.trim().length) {
    return ""
  }

  const doesCommandNameStartsWithExclamationMark = commandName.startsWith("!")

  if (!doesCommandNameStartsWithExclamationMark) {
    commandName = `!${commandName}`
  }

  return commandName
}
