import { z } from "zod"

export const sendMessageNodeSchema = z.object({
  content: z
    .string({
      required_error: "Content is required.",
    })
    .min(1, {
      message: "Content is required.",
    })
    .max(2000, {
      message: "Content cannot exceed 2000 characters.",
    }),
  enabled: z.boolean().default(true),
})

export type SendMessageNodeSchema = z.infer<typeof sendMessageNodeSchema>
