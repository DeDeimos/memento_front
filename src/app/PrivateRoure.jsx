// import { Navigate, Outlet } from "react-router-dom";

// const isAuth = localStorage.getItem("isAuth");

// export const PrivateRoute = () => {
//   return isAuth ? <Outlet /> : <Navigate to="/feed" />;
// };

import { Navigate, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

export const PrivateRoute = () => {
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem("isAuth"));

  useEffect(() => {
    const checkAuth = () => {
      setIsAuth(!!localStorage.getItem("isAuth"));
    };

    window.addEventListener("storage", checkAuth);

    return () => {
      window.removeEventListener("storage", checkAuth);
    };
  }, []);

  return isAuth ? <Outlet /> : <Navigate to="/feed" />;
};