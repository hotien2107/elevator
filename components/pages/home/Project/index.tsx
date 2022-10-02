import React from "react";
import Container from "../../../../layouts/Container";
import ArrowDownIcon from "../../../../assets/icons/arrow-down-sm.svg";
import * as Scroll from "react-scroll";
import ProjectItem from "./ProjectItem";
import ElevatorImg from "../../../../assets/images/thangmay1.jpeg";
import Image from "next/image";

const Project = () => {
  return (
    <Container>
      <div className="project">
        <h1 className="project__title">
          Dự án tiêu biểu
          <Scroll.Link smooth to="customer">
            <Image
              src={ArrowDownIcon}
              alt="Đi xuống phần tiếp theo"
              className="product__icon"
            />
          </Scroll.Link>
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
