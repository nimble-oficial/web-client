import { customAPIError } from "@/utils"
import { makeURLSearchParams } from "@discordjs/rest"
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

    // TODO: Pagination with virtualized list
    const query = makeURLSearchParams({
      limit: 1000,
    })

    const members = await rest.get(Routes.guildMembers(params.guildId), {
      query: query,
    })

    return new Response(JSON.stringify(members), { status: 200 })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return new Response(JSON.stringify(err.issues), { status: 422 })
    }

    return new Response(customAPIError(err), { status: 500 })
  }
}
