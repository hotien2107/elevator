import Image from "next/image";
import React from "react";
import Container from "../../../../layouts/Container";
import { AdvertisementProps } from "./types";

const Advertisement = (props: AdvertisementProps) => {
  const { children, bgImage } = props;
  return (
    <div className="ads">
      <Image
        src={bgImage?.src}
        alt={bgImage?.alt}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="ads__img"
      />

      <div className="ads__blur" />
      <Container className="ads__container">{children}</Container>
    </div>
  );
};

export default Advertisement;
