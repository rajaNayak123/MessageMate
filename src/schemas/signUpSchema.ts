import { z } from "zod";

export const usernameValidation = z
.string()
.min(2, "username atleast 2 characters")
.max(8, "username must be no more than 8 characters")
.regex(/^[a-zA-Z0-9_]+$/,"username must no contain special characters")


export const signUpSchema = z.object({
    username:usernameValidation,
    email:z.string().email({message:"Invalid email address"}),
    password:z.string().min(6,{message:"password must be at least 6 characters"})
})