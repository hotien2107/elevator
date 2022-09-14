import React from "react";
import { ButtonSecondaryProps } from "./types";

const ButtonSecondary = (props: ButtonSecondaryProps) => {
  const { children, ...rest } = props;
  return (
    <button className="btn btn--secondary" {...rest}>
      {children}
    </button>
  );
};

export default ButtonSecondary;
