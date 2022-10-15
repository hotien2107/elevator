import { useRouter } from "next/router";
import React from "react";
import Head from "next/head";
import ProductBanner from "../../components/pages/productDetail/ProductBanner";
import ProductBreadcrumb from "../../components/pages/productDetail/ProductBreadcrumb";
import ProductOverview from "../../components/pages/productDetail/ProductOverview";
import ProductOption from "../../components/pages/productDetail/ProductOption";
import ProductSpecifications from "../../components/pages/productDetail/ProductSpecifications";
import ProductDesc from "../../components/pages/productDetail/ProductDesc";
import RelatedProducts from "../../components/pages/productDetail/RelatedProducts";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Hưng Phú Gia - Sản phẩm</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <ProductBanner />
      <div className="container">
        <ProductBreadcrumb />
        <ProductOverview />
        <ProductOption />
        <ProductSpecifications />
        <ProductDesc />
        <RelatedProducts />
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
