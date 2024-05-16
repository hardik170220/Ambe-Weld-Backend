import {z} from "zod"

const signupSchema = z.object({
    username: z
         .string({required_error: "Name is required"})
         .trim()
         .min(3, { message: "Name must be atleast 3 characters"})
         .max(255, {message: "Name must be more than 255 characters"}),

    email: z 
         .string({required_error: "Email is required"})
         .trim()
         .email({message:"Invalid email address"})
         .min(3, {message:"Email must be atleast 3 characters"})
         .max(255, {message: "Email must be more than 255 characters"}),

         password: z 
         .string({required_error: "password is required"})
         .trim()
         .min(6, {message:"password must be atleast 6 characters"})
         .max(12, {message: "password must be not more than 12 characters"}),  
         
})


export const contactSchema = z.object({

     email: z 
          .string({required_error: "Email is required"})
          .trim()
          .email({message:"Invalid email address"})
          .min(3, {message:"Email must be atleast 3 characters"})
          .max(255, {message: "Email must be more than 255 characters"}),
 
          message: z
          .string({required_error: "message is required"})
          .trim()
          .min(20, { message: "message must be atleast 20 characters"})
          .max(255, {message: "message must be more than 255 characters"}),
          
 })

export default signupSchema