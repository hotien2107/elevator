import React from "react";
import ProductItem from "./ProductItem";
import ElevatorImg from "../../../../assets/images/thangmay1.jpeg";

const RelatedProducts = () => {
  return (
    <div className="related-products">
      <h4 className="related-products__title">CÁC DỰ ÁN LIÊN QUAN</h4>
      <div className="related-products__list">
        <ProductItem
          image={{ src: ElevatorImg, alt: "Dự án chung cư quận 2" }}
          label="Dự án chung cư quận 2"
          desc="Lorem ipsum dolor sit amet, consectetur adip"
        />
        <ProductItem
          image={{ src: ElevatorImg, alt: "Dự án chung cư quận 2" }}
          label="Dự án chung cư quận 2"
          desc="Lorem ipsum dolor sit amet, consectetur adip"
        />
        <ProductItem
          image={{ src: ElevatorImg, alt: "Dự án chung cư quận 2" }}
          label="Dự án chung cư quận 2"
          desc="Lorem ipsum dolor sit amet, consectetur adip"
        />
      </div>
    </div>
  );
};

export default RelatedProducts;
