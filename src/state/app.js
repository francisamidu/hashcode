import { create } from 'zustand';
const useAppState = create((_set) => ({
    appName: 'Hashcode'
}));
export { useAppState };
