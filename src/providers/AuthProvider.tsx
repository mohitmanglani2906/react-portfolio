import React, {
  useState,
  useEffect,
  useCallback,
  ReactNode,
  ReactElement
} from "react";
import axios from "axios";
import { useQueryClient } from "react-query";

import { clearAuth, set, get, checkExpire } from "../utils/localStorage";
import { AuthContext, useAuthContext } from "./context";

type Props = {
  children: ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const [hasValidAuthToken, setHasValidAuthToken] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  const logout = () => {
    setHasValidAuthToken(false);
    clearAuth();
  };

  // useEffect(() => {
  //   const token = get("token");
  //   const isExpired = checkExpire("token");
  //   console.log("token", token);
  //   console.log("expire", isExpired);

  //   if (token && !isExpired) {
  //     setHasValidAuthToken(true);
  //   }
  //   console.log("use Effect called from auth provider", hasValidAuthToken);
  // });

  const login = (username: string, password: string) => {
    console.log("API called");
    setError(null);
    setLoading(false);
    setHasValidAuthToken(true);
    set("token", "token-value");
    console.log(get("token"));
    console.log(checkExpire("token"));
  };

  return (
    <AuthContext.Provider
      value={{
        hasValidAuthToken,
        logout,
        login,
        loading,
        error
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
