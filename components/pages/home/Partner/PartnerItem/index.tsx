import Image from "next/image";
import React from "react";
import { PartnerItemProps } from "./types";

const PartnerItem = (props: PartnerItemProps) => {
  const { image } = props;
  return (
    <div className="partner__item">
      <div className="partner__item-avt">
        <Image
          src={image.src}
          alt={image.alt}
          objectFit="scale-down"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default PartnerItem;
