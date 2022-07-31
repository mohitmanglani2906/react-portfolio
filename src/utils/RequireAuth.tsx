import { useAuthContext } from "../providers/context";
import { Outlet, Navigate } from "react-router-dom";
import { get, checkExpire } from "./localStorage";

const RequireAuth = () => {
  const useAuth = useAuthContext();
  const token = get("token");
  const isExpired = checkExpire("token");
  //console.log("in require Auth", hasValidAuthToken);
  console.log("in require auth");
  if (token && !isExpired) {
    useAuth.hasValidAuthToken = true;
  }

  return useAuth.hasValidAuthToken ? <Outlet /> : <Navigate to="/" />;
};
export default RequireAuth;
