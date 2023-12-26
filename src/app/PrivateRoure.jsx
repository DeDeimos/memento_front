import { Navigate, Outlet } from "react-router-dom";

const isAuth = localStorage.getItem("isAuth");

export const PrivateRoute = () => {
  return isAuth ? <Outlet /> : <Navigate to="/feed" />;
};