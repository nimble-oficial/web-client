import { z } from "zod"

export const createCommandSchema = z.object({
  name: z
    .string({
      required_error: "Name is required.",
    })
    .min(1, {
      message: "Name is required.",
    })
    .max(20, {
      message: "Name cannot exceed 20 characters.",
    }),
  description: z
    .string({
      required_error: "Description is required.",
    })
    .min(1, {
      message: "Description is required.",
    })
    .max(100, {
      message: "Description cannot exceed 100 characters.",
    }),
  guildId: z.string(),
  options: z.object({
    notEnabledMessage: z.string().max(200, {
      message: "Not enabled message cannot exceed 100 characters.",
    }),
    canSendNotEnabledMessage: z.boolean().default(true),
  }),
})

export type CreateCommandSchema = z.infer<typeof createCommandSchema>
