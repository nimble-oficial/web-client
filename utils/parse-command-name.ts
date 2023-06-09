export const parseCommandName = (commandName: string = ""): string => {
  const doesCommandNameStartsWithExclamationMark = commandName.startsWith("!")

  if (!doesCommandNameStartsWithExclamationMark) {
    commandName = `!${commandName}`
  }

  return commandName
}
