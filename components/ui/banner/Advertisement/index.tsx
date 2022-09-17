import Image from "next/image";
import React from "react";
import Container from "../../../../layouts/Container";
import { AdvertisementProps } from "./types";

const Advertisement = (props: AdvertisementProps) => {
  const { children, bgImage } = props;
  return (
    <div className="ads">
      <div className="ads__background">
        <Image
          src={bgImage?.src}
          alt={bgImage?.alt}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="ads__img"
        />
      </div>
      <div className="ads__blur"></div>
      <Container className="ads__container">{children}</Container>
    </div>
  );
};

export default Advertisement;
