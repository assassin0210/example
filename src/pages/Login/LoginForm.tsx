import { FormProvider, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Logo } from "../../assets/icons/icons";
import { FormInput } from "../../components/FormInput";
import { NewButton } from "../../components/NewButton";
import { ModalsEnum, openModal } from "../../store/modals/modalsSlice";
import { AppDispatch } from "../../store/rootStore";
import { H24 } from "../../ui/Typography";

export interface ILoginForm {
  login: string;
  password: string;
}

export const LoginForm = () => {
  const methods = useForm<ILoginForm>();
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (data: ILoginForm) => {
    if (
      data.login === process.env.REACT_APP_LOGIN &&
      data.password === process.env.REACT_APP_PASSWORD
    ) {
      localStorage.setItem("token", "auth");
      navigate("/profile");
    } else {
      dispatch(
        openModal({
          modal: ModalsEnum.WRONG_DATA,
          text: "Имя пользователя или пароль введены неверно",
        })
      );
    }
  };
  return (
    <div
      className={
        "max-w-[750px] w-full flex-1 h-full flex justify-center items-center"
      }
    >
      <FormProvider {...methods}>
        <form
          className={
            "flex flex-col max-w-[297px] w-full min-w-[250px] px-12 gap-y-[45px]"
          }
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <div>
            <img className={"mb-20"} src={Logo} alt="logo" />
            <H24>ПРОФИЛЬ</H24>
          </div>
          <FormInput
            name={"login"}
            rules={{
              validate: {
                pattern: (value) => {
                  return /^[-a-zA-Z0-9_.@]*$/.test(value);
                },
              },
              required: true,
            }}
            placeholder={"ЛОГИН"}
          />
          <FormInput
            rules={{
              validate: {
                pattern: (value) => {
                  return !/[а-яё]/i.test(value);
                },
              },
              required: true,
            }}
            name={"password"}
            placeholder={"ПАРОЛЬ"}
          />
          <div>
            <NewButton type={"submit"}>ВОЙТИ</NewButton>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
