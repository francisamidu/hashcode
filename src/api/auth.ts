// src/api/auth.ts
import axiosInstance from './axios'
import { IAuthResponse, ILoginPayload, ISignupPayload } from '@/types/auth'

// Login Function
export const login = async (
  credentials: ILoginPayload
): Promise<IAuthResponse> => {
  const { data } = await axiosInstance.post<IAuthResponse>(
    '/auth/login',
    credentials
  )
  return data
}

// Signup Function
export const signup = async (
  newUser: ISignupPayload
): Promise<IAuthResponse> => {
  const { data } = await axiosInstance.post<IAuthResponse>(
    '/auth/signup',
    newUser
  )
  return data
}

// Logout Function
export const logout = () => {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
  window.location.href = '/login' // Redirect to login
}
