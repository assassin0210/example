import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";

import { setCurrentPathname } from "../store/util/utilSlice";
import { Header } from "./Menu";

export const Layout = () => {
  useCurrentPage();
  return (
    <div className={"h-full overflow-y-scroll"}>
      <Header />
      <Outlet />
    </div>
  );
};

const useCurrentPage = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  useEffect(() => {
    dispatch(setCurrentPathname(pathname));
    localStorage.setItem("currentPathname", pathname);
  }, [pathname]);
};
