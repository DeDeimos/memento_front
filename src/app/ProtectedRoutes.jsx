import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Feed } from "../pages/feed/ui";
import { Profile } from "../pages/profile/ui";
import { Explore } from "../pages/explore/ui";
import { Layout } from "../pages/layout/ui";

const ProtectedRoutes = () => {
  // Проверка на авторизацию (пример, может потребоваться уточнение)
  const isAuthenticated = localStorage.getItem("isAuth");
  console.log(isAuthenticated);

  if (!isAuthenticated) {
    // Если пользователь не авторизован, перенаправляем на страницу входа
    return <Navigate to="/auth" />;
  }
  const user_id = localStorage.getItem("user_id");
  return (
    <Routes>
      {/* Используйте / для указания полного пути */}
      <Route path="/" element={<Layout />}>
        <Route path="/profile" element={<Profile id={user_id} />} />
        <Route path={`/profile/:id`} element={<Profile />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/feed" element={<Feed />} />
      </Route>
    </Routes>
  );
};

export default ProtectedRoutes;
