import { useRouter } from "next/router";
import React from "react";
import Head from "next/head";
import ProductOverview from "../../components/pages/productDetail/ProductOverview";
import ProductOption from "../../components/pages/productDetail/ProductOption";
import ProductSpecifications from "../../components/pages/productDetail/ProductSpecifications";

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Hưng Phú Gia - Sản phẩm</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container">
        <ProductOverview />
        <ProductOption />
        <ProductSpecifications />
      </div>
    </>
  );
};

export default ProductDetail;
