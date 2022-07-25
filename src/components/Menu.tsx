import { ReactNode, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { Logout, UserIcon } from "../assets/icons/icons";
import { logout } from "../store/auth/authSlice";
import { RootStateType } from "../store/rootStore";
import { H16, H20 } from "../ui/Typography";
import { MenuItem } from "./MenuItem";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  const menu = useMenu();
  return (
    <header
      className={
        "bg-green flex min-h-[75px] items-center justify-between px-[35px]"
      }
    >
      <div className={"flex items-center gap-40"}>
        <Link to={"/"}>
          <H20 className={"!text-white"}>НА ГЛАВНУЮ</H20>
        </Link>
        <div className={"flex gap-20"}>
          {menu.map((item) => {
            return <MenuItem key={item.to} {...item} />;
          })}
        </div>
      </div>
      <div className={"flex items-center gap-x-4"}>
        <img src={UserIcon} alt="user icon" />
        <H16 className={"!text-white"}>Admin</H16>
        <div
          role={"button"}
          className={"cursor-pointer"}
          onClick={handleLogout}
        >
          <img src={Logout} alt="" />
        </div>
      </div>
    </header>
  );
};

export interface IMenuItem {
  to: string;
  label: ReactNode;
  active: boolean;
}

const useMenu = () => {
  const { currentPathname } = useSelector((state: RootStateType) => state.util);
  return useMemo(
    () => [
      {
        to: "/news",
        label: "НОВОСТИ",
        active: currentPathname.includes("news"),
      },
      {
        to: "/profile",
        label: "ПРОФИЛЬ",
        active: currentPathname.includes("profile"),
      },
    ],
    [currentPathname]
  ) as IMenuItem[];
};
