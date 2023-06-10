import { DEFAULT_OPTION_VALUES } from "@/constants/default-option-values"
import { z } from "zod"

export const editCommandSchema = z.object({
  name: z
    .string({ required_error: "Name is required." })
    .min(1, { message: "Name is required." })
    .max(20, { message: "Name cannot exceed 20 characters." }),

  description: z
    .string()
    .max(100, {
      message: "Description cannot exceed 100 characters.",
    })
    .optional(),
  enabled: z.boolean().default(true),

  allowedChannel: z
    .object({
      id: z
        .string()
        .optional()
        .default(DEFAULT_OPTION_VALUES.allowedChannel.id),
      name: z
        .string()
        .optional()
        .default(DEFAULT_OPTION_VALUES.allowedChannel.name),
    })
    .optional()
    .default(DEFAULT_OPTION_VALUES.allowedChannel),

  allowedRole: z.object({
    id: z.string().optional().default(DEFAULT_OPTION_VALUES.allowedRole.id),
    name: z.string().optional().default(DEFAULT_OPTION_VALUES.allowedRole.name),
  }),
})

export type EditCommandSchema = z.infer<typeof editCommandSchema>
