// src/contexts/AuthContext.tsx
import { AuthState, useAuthStore } from '@/state/auth'
import React, { createContext, useContext, ReactNode, useEffect } from 'react'

const AuthContext = createContext<AuthState | undefined>(undefined)

type AuthProviderProps = {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const auth = useAuthStore()

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

// Custom hook for consuming context
export const useAuth = (): AuthState => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
