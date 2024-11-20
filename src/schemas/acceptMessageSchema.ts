import {z} from "zod"

export const acceptmsg = z.object({
    acceptMessage: z.boolean(),
})