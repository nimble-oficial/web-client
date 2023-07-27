import { z } from "zod"

export const moveUsersToChannelNodeSchema = z
  .object({
    name: z.string().max(100).optional(),
    channelToMoveUsers: z.string().optional(),
    userIdToMove: z.string().optional(),
    enabled: z.boolean().optional().default(true),
  })
  .strict()

export type MoveUsersToChannelNodeSchema = z.infer<
  typeof moveUsersToChannelNodeSchema
>
