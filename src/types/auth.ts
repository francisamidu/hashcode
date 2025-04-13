// src/types/auth.ts

import { IApiResponse } from './app'
import { IUserProfileRole } from './user'

export interface IAuthResponse extends IApiResponse<{
  token: string
  refreshToken: string
  userId:string
}> {
  
}

export interface ILoginPayload {
  email: string
  password: string
}

export interface ISignupPayload {
  firstName: string
  lastName: string
  email: string
  businessName: string
  password: string
}

export interface IAuthUser {
  id: string
  email: string
  username: string
  isVerified: boolean
  token:string
  refreshToken:string
  userAccountRoleType: IUserProfileRole
}

export type VerificationCode = {
  code: string
}

export interface SignupFormState {
  firstName: string
  lastName: string
  email: string
  password: string
  businessName: string
  errors: Partial<Record<keyof SignupFormState, string>>
}

// Type for form state
export type LoginFormState = {
  email: string
  password: string
  errors: {
    email?: string
    password?: string
  }
}

export type OtpFormState = {
  otp: string[]
  errors: {
    otp?: string
  }
}
