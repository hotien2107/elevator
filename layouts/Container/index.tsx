import React from "react";
import { ContainerProps } from "./types";

const Container = (props: ContainerProps) => {
  const { children, className } = props;
  return <div className={"container " + (className ?? "")}>{children}</div>;
};

export default Container;
