import { create } from 'zustand';

const intersectionStore = create((set) => ({
  currentSection: 'home',
  setCurrentSection: (value) => set({ currentSection: value }),
}));

export default intersectionStore;
