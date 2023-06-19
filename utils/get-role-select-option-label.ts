import { DEFAULT_OPTION_VALUES } from "@/constants"

import { GuildRole } from "@/types/discord"

export const getRoleSelectOptionLabel = (
  value: string,
  roles: GuildRole[] | undefined
): string => {
  if (value === DEFAULT_OPTION_VALUES.allowedRole.id) {
    return "All Roles"
  }

  return roles?.find((role) => role.id === value)?.name || "All Roles"
}
