import { z } from 'zod'

export const passwordSchema = z
  .string()
  .min(8, { message: 'Password needs to be a least 8 characters long' })
  .max(20, { message: 'Password should to be 20 characters long maximum' })
  .refine((password) => /[A-Z]/.test(password), {
    message: 'Password needs to have at least 1 uppercase character'
  })
  .refine((password) => /[a-z]/.test(password), {
    message: 'Password needs to have at least 1 lowercase character'
  })
  .refine((password) => /[0-9]/.test(password), {
    message: 'Password needs to have at least 1 number'
  })
  .refine((password) => /[!@#$%^&*(),.?":{}|<>]/.test(password), {
    message: 'Password needs to have at least 1 special character'
  })

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Invalid email address' }),

  password: passwordSchema
})

export const OtpSchema = z.object({
  otp: z
    .string()
    .length(6, { message: 'OTP must be exactly 6 digits' })
    .regex(/^\d+$/, { message: 'OTP must contain only digits' })
})

export type LoginSchemaType = z.infer<typeof LoginSchema>

export const SignupSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: 'First name must be at least 2 characters' })
    .max(50, { message: 'First name must be less than 50 characters' })
    .regex(/^[A-Za-z]+$/, { message: 'First name can only contain letters' }),

  lastName: z
    .string()
    .min(2, { message: 'Last name must be at least 2 characters' })
    .max(50, { message: 'Last name must be less than 50 characters' })
    .regex(/^[A-Za-z]+$/, { message: 'Last name can only contain letters' }),

  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Invalid email address' })
    .max(100, { message: 'Email must be less than 100 characters' }),

  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' })
    .max(64, { message: 'Password must be less than 64 characters' })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      {
        message:
          'Password must include uppercase, lowercase, number, and special character'
      }
    ),

  businessName: z
    .string()
    .min(2, { message: 'Company name must be at least 2 characters' })
    .max(100, { message: 'Company name must be less than 100 characters' })
})

// Type inference for TypeScript
export type SignupSchemaType = z.infer<typeof SignupSchema>

export const initialLoginFormState = {
  email: 'invalid-email',
  password: 'short',
  rememberMe: true
}
// Optional: Form initial state
export const initialSignupFormState: SignupSchemaType = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  businessName: ''
}
