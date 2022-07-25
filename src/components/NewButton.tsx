import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";

export const NewButton: FC<
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & { buttonType?: "green" | "gray" }
> = ({ children, type = "button", buttonType = "green", ...rest }) => {
  return (
    <button
      className={` text-white ${buttonTypeConst[buttonType]}`}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};

const buttonTypeConst: Record<"green" | "gray", string> = {
  green:
    "bg-green py-[19px] px-[60px] rounded-[30px] text-sm leading-[20px] shadow-button",
  gray: " bg-gray300 px-12 py-8 rounded-4 text-base",
};
