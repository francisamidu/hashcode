import { App } from '@/types/app'
import { create } from 'zustand'

const useAppState = create<App>((_set) => ({
  appName: 'Dehash'
}))
export { useAppState }
