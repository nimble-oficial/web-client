import type { NextApiRequest, NextApiResponse } from "next"
import { customAPIError } from "@/utils"
import { Routes } from "discord-api-types/v10"

import { rest } from "@/lib/discord-js"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const roles = await rest.get(Routes.guildRoles(req.query.guildId as string))
    return res.status(200).json(roles)
  } catch (err) {
    res.status(500).json(customAPIError(err))
  }
}
