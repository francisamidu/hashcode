import { z } from 'zod';
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
});
export const LoginSchema = z.object({
    email: z
        .string()
        .min(1, { message: 'Email is required' })
        .email({ message: 'Invalid email address' }),
    password: passwordSchema,
    rememberMe: z.boolean().optional().default(false)
});
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
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
        message: 'Password must include uppercase, lowercase, number, and special character'
    }),
    company: z
        .string()
        .max(100, { message: 'Company name must be less than 100 characters' })
        .optional(),
    building: z.enum([
        'fintech-app',
        'payment-solution',
        'banking-integration',
        'personal-finance',
        'other'
    ], {
        errorMap: () => ({ message: 'Please select what you are building' })
    }),
    termsAgreed: z.boolean().refine((val) => val === true, {
        message: 'You must agree to the terms and conditions'
    })
});
export const initialLoginFormState = {
    email: 'invalid-email',
    password: 'short',
    rememberMe: true
};
// Optional: Form initial state
export const initialSignupFormState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    company: '',
    building: 'other',
    termsAgreed: false
};
