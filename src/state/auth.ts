import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { IAuthUser } from '@/types/auth'

export type AuthState = {
  isAuthenticated: boolean
  setIsAuthenticated: (isAuthenticated: boolean) => void
  setUser: (user: IAuthUser) => void
  user: IAuthUser | null
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, _get) => ({
      isAuthenticated: false,
      user: null,
      setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
      setUser: (user: IAuthUser) => set({ user }),
      logout: () => set({ isAuthenticated: false, user: null })
    }),
    {
      name: 'auth-store',
      storage: createJSONStorage(() => localStorage)
    }
  )
)
