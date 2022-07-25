import { Controller, useFormContext } from "react-hook-form";
import { RegisterOptions } from "react-hook-form/dist/types/validator";

import { IInputProps, NewInput } from "./NewInput";

interface IFirmInput extends IInputProps {
  name: string;
  rules?: RegisterOptions;
}

export const FormInput = ({ name, rules, ...rest }: IFirmInput) => {
  const { control, formState } = useFormContext();
  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      render={(props) => (
        <NewInput
          {...rest}
          error={!!formState.errors[name]}
          onChange={props.field.onChange}
          value={props.field.value}
        />
      )}
    />
  );
};
