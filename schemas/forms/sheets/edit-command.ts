import { DEFAULT_OPTION_VALUES } from "@/constants/default-option-values"
import { z } from "zod"

export const editCommandSchema = z.object({
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
  enabled: z.boolean().default(true),
  allowedChannel: z
    .string()
    .optional()
    .default(DEFAULT_OPTION_VALUES.allowedChannel),
  allowedRole: z.string().optional().default(DEFAULT_OPTION_VALUES.allowedRole),
})

export type EditCommandSchema = z.infer<typeof editCommandSchema>
