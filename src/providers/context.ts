import { createContext, useContext } from "react";

interface AuthContextData {
  hasValidAuthToken: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
  loading: boolean;
  error: Error | null;
}

export const AuthContext = createContext<AuthContextData>({
  hasValidAuthToken: false,
  login: () => null,
  logout: () => null,
  loading: true,
  error: null
});

export const useAuthContext = () => useContext(AuthContext);
