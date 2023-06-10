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
    .string()
    .max(100, {
      message: "Description cannot exceed 100 characters.",
    })
    .optional(),
  guildId: z.string(),
})

export type CreateCommandSchema = z.infer<typeof createCommandSchema>
