import { jwtDecode } from 'jwt-decode';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  token: string | null;
  user: any;
  login: (token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      login: (token: string) => {
        const decoded = jwtDecode(token);
        set({ token, user: decoded });
      },
      logout: () => set({ token: null, user: null }),
    }),
    { name: 'auth-store' }
  )
); 