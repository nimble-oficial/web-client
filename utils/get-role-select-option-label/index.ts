import { DEFAULT_OPTION_VALUES } from "@/constants"

import { GuildRole } from "@/types/discord"

export const getRoleSelectOptionLabel = (
  value: string = "",
  roles: GuildRole[] | undefined
): string => {
  const isDefaultOptionSelected = value === DEFAULT_OPTION_VALUES.allowedRole.id
  const hasRoles = roles && roles.length > 0

  if (isDefaultOptionSelected || !hasRoles) {
    return "All Roles"
  }

  return roles?.find((role) => role.id === value)?.name || "All Roles"
}
