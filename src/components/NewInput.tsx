import { DetailedHTMLProps, InputHTMLAttributes, VFC } from "react";

export type IInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const NewInput: VFC<IInputProps & { error: boolean }> = ({
  error,
  ...rest
}) => {
  return (
    <input
      className={`border-b-2 ${
        error ? "border-red-600" : "border-gray"
      } focus:none outline-0`}
      {...rest}
    />
  );
};
