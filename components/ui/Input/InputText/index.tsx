import React from "react";
import { InputTextProps } from "./types";

const InputText = (props: InputTextProps) => {
  const { ...rest } = props;
  return <input type="text" {...rest} className="input input--text" />;
};

export default InputText;
