import { Link } from "react-router-dom";

import { H16 } from "../ui/Typography";
import { IMenuItem } from "./Menu";

export const MenuItem = ({ to, active, label }: IMenuItem) => {
  return (
    <Link className={"relative"} to={to}>
      <H16 className={"!text-white"}>{label}</H16>
      {active && (
        <div className={"h-4 absolute w-full bg-lightGreen rounded-4"} />
      )}
    </Link>
  );
};
