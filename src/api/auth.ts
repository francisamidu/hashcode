// src/api/auth.ts
import api from './api'
import {
  IAuthResponse,
  ILoginPayload,
  ISignupPayload,
  VerificationCode
} from '@/types/auth'

// Login Function
export const login = async (
  credentials: ILoginPayload
): Promise<IAuthResponse> => {
  const res = await api.post<IAuthResponse>(
    'de_hash_create_user_account_login_information',
    {
      json: {
        user_account_email_address: credentials.email,
        user_account_password: credentials.password
      }
    }
  )
  const data = await res.json()
  return data
}

// Signup Function
export const signup = async (
  newUser: ISignupPayload
): Promise<IAuthResponse> => {
  const res = await api.post<IAuthResponse>(
    'de_hash_create_user_account_sign_up_information',
    {
      json: {
        user_account_email_address: newUser.email,
        user_account_password: newUser.password,
        user_account_first_name: newUser.firstName,
        user_account_last_name: newUser.lastName,
        business_name: newUser.businessName
      }
    }
  )
  const data = await res.json()
  return data
}

// Verification Function
export const verify = async (otp: VerificationCode): Promise<IAuthResponse> => {
  const res = await api.post<IAuthResponse>(
    'de_hash_create_user_account_verification_information',
    {
      json: {
        user_account_verification_code: otp.code
      }
    }
  )
  const data = await res.json()
  return data
}

// Logout Function
export const logout = () => {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
  window.location.href = '/login' // Redirect to login
}
