import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { ProductItemProps } from "./types";

const ProductItem = (props: ProductItemProps) => {
  const { image, label, desc } = props;
  const router = useRouter();
  return (
    <>
      <div
        className="related-products__item"
        onClick={() => {
          router.push("/san-pham/1");
        }}
      >
        <Image
          className="related-products__item-img"
          src={image.src}
          alt={image.alt}
        />
        <div className="related-products__item-shadow" />
        <span className="related-products__item-label">{label}</span>
        <span className="related-products__item-desc">
          {desc.length <= 40 ? desc : desc.slice(0, 40) + "..."}
        </span>
      </div>
    </>
  );
};

export default ProductItem;
