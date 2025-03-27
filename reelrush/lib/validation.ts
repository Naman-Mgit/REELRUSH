import {z} from "zod"

export const registerSchema=z.object({
     Username:z.string().min(5,{message:"Minimum 5 words are required"}).max(20,{message:"Maximum 20 words"}),
     Email:z.string().email({message:"Invalid Email address"}),
     Password:z.string().min(6,{message:"Password must be at least 6 characters"}),
     ConfirmPassword:z.string()

}).refine((data)=>data.Password===data.ConfirmPassword,{
     message:"Password do not match",
     path: ["ConfirmPassword"],
})