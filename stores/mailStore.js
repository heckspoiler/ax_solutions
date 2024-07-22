import { create } from 'zustand';

const mailStore = create((set) => ({
  isSent: false,
  name: '',
  email: '',
  message: '',
  setIsSent: (isSent) => set({ isSent }),
  setName: (name) => set({ name }),
  setEmail: (email) => set({ email }),
  setMessage: (message) => set({ message }),
}));

export default mailStore;
