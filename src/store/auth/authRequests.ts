import { createAsyncThunk } from "@reduxjs/toolkit";

import { ILoginForm } from "../../pages/Login/LoginForm";
import { ModalsEnum, openModal } from "../modals/modalsSlice";

interface ILoginRequestData {
  data: ILoginForm;
  redirect: () => void;
}

export const loginRequest = createAsyncThunk(
  "loginRequest",
  async ({ data, redirect }: ILoginRequestData) => {
    if (data.login === "Admin" && data.password === "12345") {
      await localStorage.setItem("token", "");
      await redirect();
    } else {
      openModal({
        modal: ModalsEnum.WRONG_DATA,
        text: "Имя пользователя или пароль введены неверно",
      });
    }
  }
);
