import Image from "next/image";
import React from "react";
import Evalator3 from "../../../../assets/images/thangmay3.jpg";

const ProductBanner = () => {
  return (
    <div className="product-banner">
      <Image src={Evalator3} alt="" layout="fill" objectFit="cover" />
    </div>
  );
};

export default ProductBanner;
