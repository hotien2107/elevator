import Image from "next/image";
import React from "react";
import { DescItemProps } from "./types";

const DescItem = (props: DescItemProps) => {
  const { content, img, isReverse } = props;
  return (
    <div
      className={
        "product-desc-item " + (isReverse && "product-desc-item--reverse")
      }
    >
      <div className="product-desc-item__img">
        <Image src={img.src} alt={img.alt} layout="fill" objectFit="cover" />
      </div>

      <div className="product-desc-item__content">{content}</div>
    </div>
  );
};

export default DescItem;
