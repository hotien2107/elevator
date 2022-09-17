import Image from "next/image";
import React from "react";
import { ProjectItemProps } from "./types";

const ProjectItem = (props: ProjectItemProps) => {
  const { image, label } = props;
  return (
    <div className="project__item">
      <Image className="project__item-img" src={image.src} alt={image.alt} />
      <div className="project__item-shadow" />
      <span className="project__item-label">{label}</span>
    </div>
  );
};

export default ProjectItem;
