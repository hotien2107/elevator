import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { ProductItemProps } from "./types";

const ProductItem = (props: ProductItemProps) => {
  const { image, label } = props;
  const router = useRouter();
  return (
    <>
      <div
        className="product__item"
        onClick={() => {
          router.push("/san-pham/1");
        }}
      >
        <Image className="product__item-img" src={image.src} alt={image.alt} />
        <div className="product__item-shadow" />
        <span className="product__item-label">{label}</span>
      </div>
    </>
  );
};

export default ProductItem;
