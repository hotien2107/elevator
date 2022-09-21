import Image from "next/image";
import React from "react";
import { PartnerItemProps } from "./types";

const PartnerItem = (props: PartnerItemProps) => {
  const { avatar, comment, job, name } = props;
  return (
    <div className="partner__item">
      <div className="partner__item-avt">
        <Image
          src={avatar.src}
          alt={avatar.alt}
          width={50}
          height={50}
          objectFit="cover"
        />
      </div>
      <div className="partner__item-content">
        <h4 className="partner__item-name">{name}</h4>
        <p className="partner__item-job">{job}</p>
        <p className="partner__item-comment">{comment}</p>
      </div>
    </div>
  );
};

export default PartnerItem;
