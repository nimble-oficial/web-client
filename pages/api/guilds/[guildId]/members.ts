import type { NextApiRequest, NextApiResponse } from "next"
import { customAPIError } from "@/utils"
import { Routes } from "discord-api-types/v10"

import { rest } from "@/lib/discord-js"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const guildId = req.query.guildId as string
    const members = await rest.get(Routes.guildMembers(guildId))

    return res.status(200).json(members)
  } catch (err) {
    res.status(500).json(customAPIError(err))
  }
}
