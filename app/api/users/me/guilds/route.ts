import { customAPIError } from "@/utils"
import { Routes } from "discord-api-types/v10"

import { rest } from "@/lib/discord-js"

export async function GET() {
  try {
    const userGuilds = await rest.get(Routes.userGuilds())

    return new Response(JSON.stringify(userGuilds), { status: 200 })
  } catch (err) {
    return new Response(JSON.stringify(customAPIError(err)), { status: 500 })
  }
}
