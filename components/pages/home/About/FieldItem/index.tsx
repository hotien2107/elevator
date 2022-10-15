import React from "react";
import { FieldItemProps } from "./types";

const FieldItem = (props: FieldItemProps) => {
  const { icon, title } = props;
  return (
    <div className="about__field-item">
      <div className="about__field-icon">{icon}</div>
      <p className="about__field-title">{title}</p>
    </div>
  );
};

export default FieldItem;
