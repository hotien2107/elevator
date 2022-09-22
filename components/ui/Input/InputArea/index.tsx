import React from "react";
import { InputAreaProps } from "./types";

const InputArea = (props: InputAreaProps) => {
  const { ...rest } = props;
  return <textarea {...rest} className="input input--area" />;
};

export default InputArea;
