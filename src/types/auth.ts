// src/types/auth.ts

import { IUserProfileRole } from './user'

export interface IAuthResponse {
  accessToken: string
  refreshToken: string
  user: {
    id: string
    email: string
    username: string
    isVerified: boolean
  }
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
  userAccountRoleType: IUserProfileRole
}
