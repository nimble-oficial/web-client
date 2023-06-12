import { customAPIError } from "@/utils"
import { Routes } from "discord-api-types/v10"
import { z } from "zod"

import { rest } from "@/lib/discord-js"

const routeContextSchema = z.object({
  params: z.object({
    guildId: z.string(),
  }),
})

export async function GET(
  req: Request,
  context: z.infer<typeof routeContextSchema>
) {
  try {
    const { params } = routeContextSchema.parse(context)

    const members = await rest.get(Routes.guildMembers(params.guildId))

    return new Response(JSON.stringify(members), { status: 200 })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return new Response(JSON.stringify(err.issues), { status: 422 })
    }

    return new Response(JSON.stringify(customAPIError(err)), { status: 500 })
  }
}
