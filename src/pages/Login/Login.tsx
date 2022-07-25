import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { LoginBg } from "../../assets/icons/icons";
import { getUser } from "../../helpers/getUser";
import { LoginForm } from "./LoginForm";

export const Login = () => {
  const navigate = useNavigate();
  const { isAuth } = getUser();

  useEffect(() => {
    if (isAuth) {
      navigate("/profile");
    }
  }, [isAuth, navigate]);

  return (
    <div className={"flex h-[100vh] "}>
      <LoginForm />
      <div className={"flex-1"}>
        <img className={"h-full object-cover"} src={LoginBg} alt={""} />
      </div>
    </div>
  );
};
