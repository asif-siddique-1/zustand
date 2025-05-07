import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createJSONStorage } from "zustand/middleware";

interface AuthData {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

interface User {
  name: string;
  email: string;
}

export const userStore = create<AuthData>()(
  persist(
    (set) => ({
      user: null,
      login: (user: User) => set((state) => ({ user: user })),
      logout: () => set((state) => ({ user: null })),
    }),
    {
      name: "user-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
