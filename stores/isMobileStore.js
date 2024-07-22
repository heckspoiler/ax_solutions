import { create } from 'zustand';

export const isMobileStore = create((set) => ({
  isMobile: false,
  setIsMobile: (value) => set({ isMobile: value }),
}));
