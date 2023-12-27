// import { Navigate, Outlet } from "react-router-dom";

// const isAuth = localStorage.getItem("isAuth");

// export const PublicRoute = () => {;
//   return isAuth ? <Navigate to="/auth" /> : <Outlet />;
// };

import { Navigate, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

export const PublicRoute = () => {
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

  return isAuth ? <Navigate to="/auth" /> : <Outlet />;
};