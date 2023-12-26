import { Navigate, Outlet } from "react-router-dom";

const isAuth = localStorage.getItem("isAuth");

export const PublicRoute = () => {;
  return isAuth ? <Navigate to="/auth" /> : <Outlet />;
};