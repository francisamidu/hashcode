// src/api/auth.ts
import axiosInstance from './axios'
import { AuthResponse, LoginPayload, SignupPayload } from '@/types/auth'

// Login Function
export const login = async (
  credentials: LoginPayload
): Promise<AuthResponse> => {
  const { data } = await axiosInstance.post<AuthResponse>(
    '/auth/login',
    credentials
  )
  localStorage.setItem('accessToken', data.accessToken)
  localStorage.setItem('refreshToken', data.refreshToken)
  return data
}

// Signup Function
export const signup = async (newUser: SignupPayload): Promise<AuthResponse> => {
  const { data } = await axiosInstance.post<AuthResponse>(
    '/auth/signup',
    newUser
  )
  localStorage.setItem('accessToken', data.accessToken)
  localStorage.setItem('refreshToken', data.refreshToken)
  return data
}

// Logout Function
export const logout = () => {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
  window.location.href = '/login' // Redirect to login
}
