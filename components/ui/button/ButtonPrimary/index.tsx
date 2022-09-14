import React from "react";
import { ButtonPrimaryProps } from "./types";

const ButtonPrimary = (props: ButtonPrimaryProps) => {
  const { children, ...rest } = props;
  return (
    <button className="btn btn--primary" {...rest}>
      {children}
    </button>
  );
};

export default ButtonPrimary;
