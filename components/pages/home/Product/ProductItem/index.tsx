import Image from "next/image";
import React from "react";
import { ProductItemProps } from "./types";

const ProductItem = (props: ProductItemProps) => {
  const { image, label } = props;
  return (
    <div className="product__item">
      <Image className="product__item-img" src={image.src} alt={image.alt} />
      <div className="product__item-shadow" />
      <span className="product__item-label">{label}</span>
    </div>
  );
};

export default ProductItem;
