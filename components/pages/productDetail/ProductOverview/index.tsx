import Image from "next/image";
import React from "react";
import EvalatorImg from "../../../../assets/images/thangmay1.jpeg";

const ProductOverview = () => {
  return (
    <div className="product-overview">
      <div className="product-overview__img">
        <Image src={EvalatorImg} alt="" layout="fill" objectFit="cover" />
      </div>
      <div className="product-overview__content">
        <h4 className="product-overview__title">THANG MÁY GIA ĐÌNH</h4>
        <p className="product-overview__desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          necessitatibus molestias excepturi error, molestiae nisi cum illo
          ullam, eaque omnis iusto alias. Nesciunt sapiente illo soluta aliquid
          optio ipsa odio!
        </p>
      </div>
    </div>
  );
};

export default ProductOverview;
