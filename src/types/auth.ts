// src/types/auth.ts

import { IUserProfileRole } from './user'

export interface AuthResponse {
  accessToken: string
  refreshToken: string
  user: {
    id: string
    email: string
    name: string
  }
}

export interface LoginPayload {
  email: string
  password: string
}

export interface SignupPayload {
  name: string
  email: string
  password: string
}

export interface IAuthUser {
  id: string
  email: string
  username: string
  isVerified: boolean
  userAccountRoleType: IUserProfileRole
}
