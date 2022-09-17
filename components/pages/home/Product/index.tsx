import React from "react";
import Container from "../../../../layouts/Container";
import ProductItem from "./ProductItem";
import ElevatorImg from "../../../../assets/images/thangmay1.jpeg";

const Product = () => {
  return (
    <Container>
      <div className="product">
        <h1 className="product__title">Sản phẩm</h1>

        <p className="product__desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          corporis, illum minima dolor tenetur nam quod nihil! Non id nisi porro
          atque consequuntur quod illum, harum ipsum error ipsa ullam?
        </p>

        <div className="product__item-list">
          <ProductItem
            image={{ src: ElevatorImg, alt: "Thang máy gia đình" }}
            label="Thang máy gia đình"
          />
          <ProductItem
            image={{ src: ElevatorImg, alt: "Thang máy gia đình" }}
            label="Thang máy gia đình"
          />
          <ProductItem
            image={{ src: ElevatorImg, alt: "Thang máy gia đình" }}
            label="Thang máy gia đình"
          />
          <ProductItem
            image={{ src: ElevatorImg, alt: "Thang máy gia đình" }}
            label="Thang máy gia đình"
          />
          <ProductItem
            image={{ src: ElevatorImg, alt: "Thang máy gia đình" }}
            label="Thang máy gia đình"
          />
          <ProductItem
            image={{ src: ElevatorImg, alt: "Thang máy gia đình" }}
            label="Thang máy gia đình"
          />
          <ProductItem
            image={{ src: ElevatorImg, alt: "Thang máy gia đình" }}
            label="Thang máy gia đình"
          />
          <ProductItem
            image={{ src: ElevatorImg, alt: "Thang máy gia đình" }}
            label="Thang máy gia đình"
          />
          <ProductItem
            image={{ src: ElevatorImg, alt: "Thang máy gia đình" }}
            label="Thang máy gia đình"
          />
        </div>
      </div>
    </Container>
  );
};

export default Product;
