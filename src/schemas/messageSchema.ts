import {z} from "zod"

export const msgSchema = z.object({
    content: z
    .string()
    .min(2,"content must be at least 2 characters")
    .max(300,"content must be no longer 300 characters")
})