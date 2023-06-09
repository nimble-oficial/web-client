import type { NextApiRequest, NextApiResponse } from "next"
import { customAPIError } from "@/utils"
import { Routes } from "discord-api-types/v10"

import { rest } from "@/lib/discord-js"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const userGuilds = await rest.get(Routes.userGuilds())

    return res.status(200).json(userGuilds)
  } catch (err) {
    res.status(500).json(customAPIError(err))
  }
}
