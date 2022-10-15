import { useRouter } from "next/router";
import React from "react";

const ProductBreadcrumb = () => {
  const router = useRouter();

  return (
    <ul className="product-breadcrumb">
      <li
        className="product-breadcrumb__item"
        onClick={() => {
          router.push("/");
        }}
      >
        Trang chủ
      </li>
      <span className="product-breadcrumb__break">/</span>
      <li className="product-breadcrumb__item"> Danh mục sản phẩm</li>
      <span className="product-breadcrumb__break">/</span>
      <li className="product-breadcrumb__item-current">Thang máy gia đình</li>
    </ul>
  );
};

export default ProductBreadcrumb;
