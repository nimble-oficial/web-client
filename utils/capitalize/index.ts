export const capitalize = (str: string): string => {
  if (!str || !str?.trim().length) {
    return ""
  }

  return str.charAt(0).toUpperCase() + str.slice(1)
}
