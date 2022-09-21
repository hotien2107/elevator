import Image from "next/image";
import React from "react";
import { CustomerReviewItemProps } from "./types";

const CustomerReviewItem = (props: CustomerReviewItemProps) => {
  const { avatar, comment, job, name } = props;
  return (
    <div className="customer-review__item">
      <div className="customer-review__item-avt">
        <Image
          src={avatar.src}
          alt={avatar.alt}
          width={50}
          height={50}
          objectFit="cover"
        />
      </div>
      <div className="customer-review__item-content">
        <h4 className="customer-review__item-name">{name}</h4>
        <p className="customer-review__item-job">{job}</p>
        <p className="customer-review__item-comment">{comment}</p>
      </div>
    </div>
  );
};

export default CustomerReviewItem;
