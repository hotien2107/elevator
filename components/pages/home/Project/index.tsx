import React from "react";
import Container from "../../../../layouts/Container";
import { AiFillCaretDown } from "react-icons/ai";
import ProjectItem from "./ProjectItem";
import ElevatorImg from "../../../../assets/images/thangmay1.jpeg";

const Project = () => {
  return (
    <Container>
      <div className="project">
        <h1 className="project__title">
          Dự án tiêu biểu <AiFillCaretDown />
        </h1>

        <div className="project__list">
          <ProjectItem
            image={{ src: ElevatorImg, alt: "Dự án chung cư quận 2" }}
            label="Dự án chung cư quận 2"
          />
          <ProjectItem
            image={{ src: ElevatorImg, alt: "Dự án chung cư quận 2" }}
            label="Dự án chung cư quận 2"
          />
          <ProjectItem
            image={{ src: ElevatorImg, alt: "Dự án chung cư quận 2" }}
            label="Dự án chung cư quận 2"
          />
          <ProjectItem
            image={{ src: ElevatorImg, alt: "Dự án chung cư quận 2" }}
            label="Dự án chung cư quận 2"
          />
          <ProjectItem
            image={{ src: ElevatorImg, alt: "Dự án chung cư quận 2" }}
            label="Dự án chung cư quận 2"
          />
          <ProjectItem
            image={{ src: ElevatorImg, alt: "Dự án chung cư quận 2" }}
            label="Dự án chung cư quận 2"
          />
        </div>
      </div>
    </Container>
  );
};

export default Project;
