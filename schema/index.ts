import * as z from "zod"

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address"
    }),
    name: z.string().min(5, {
        message: "Name must be at least 5 characters long"
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters long"
    }),
    confirmPassword: z.string().min(6, {
        message: "Password must be at least 6 characters long"
    }),
    dateOfBirth: z.date({
        message: "A date of birth is required"
    }),
    termsAndConditions: z.boolean()
})

export const LoginSchema = z.object({
    _username: z.string().email({
        message: "Please enter a valid email address"
    }),
    _password: z.string(),
    _csrf_token: z.string(),
    _remember_me: z.boolean()
})