import { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const H24: FC<IProps> = ({ children, className }) => {
  return (
    <span
      className={`text-xxl leading-[29px] font-700 text-gray700 ${className}`}
    >
      {children}
    </span>
  );
};

export const H20: FC<IProps> = ({ children, className }) => {
  return (
    <span
      className={`text-xl leading-[24px] font-700 text-gray700 ${className}`}
    >
      {children}
    </span>
  );
};

export const H16: FC<IProps> = ({ children, className }) => {
  return (
    <span
      className={`text-base leading-[19px] font-400 text-gray700 ${className}`}
    >
      {children}
    </span>
  );
};
