import { Navigate, Route, Routes } from "react-router-dom";

import { Layout } from "./components/Layout";
import { Login } from "./pages/Login/Login";
import { MainPage } from "./pages/MainPage/MainPage";
import { News } from "./pages/News/News";
import { Profile } from "./pages/Profile/Profile";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="news" element={<News />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};
