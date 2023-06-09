import { z } from "zod"

export const replyMessageNodeSchema = z
  .object({
    replyContent: z
      .string({
        required_error: "Reply content is required.",
      })
      .min(1, {
        message: "Reply content is required.",
      })
      .max(2000, {
        message: "Reply content cannot exceed 2000 characters.",
      }),
    enabled: z.boolean().optional().default(true),
    // allowedChannel: z.string().optional().default("all"),
  })
  .strict()

export const replyMessageWithChatGptNodeSchema = z.object({
  enabled: z.boolean().optional().default(true),
})

export type ReplyMessageNodeSchema = z.infer<typeof replyMessageNodeSchema>
export type ReplyMessageWithChatGptNodeSchema = z.infer<
  typeof replyMessageWithChatGptNodeSchema
>
