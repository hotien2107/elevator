import React from "react";
import { FieldItemProps } from "./types";

const FieldItem = (props: FieldItemProps) => {
  const { icon, title, desc } = props;
  return (
    <div className="about__field-item">
      <div className="about__field-icon">{icon}</div>
      <p className="about__field-title">{title}</p>
      <p className="about__field-desc">{desc}</p>
    </div>
  );
};

export default FieldItem;
