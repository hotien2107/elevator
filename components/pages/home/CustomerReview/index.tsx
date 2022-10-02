import React, { useRef } from "react";
import Container from "../../../../layouts/Container";
import LawyerAvt from "../../../../assets/images/lawyer.jpg";
import CustomerReviewItem from "./CustomerReviewItem";
import Slider from "react-slick";
import ArrowDownIcon from "../../../../assets/icons/arrow-down-sm.svg";
import * as Scroll from "react-scroll";
import Image from "next/image";

const CustomerReview = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <div className="customer-review">
        <h4 className="customer-review__title">Khách hàng</h4>
        <p className="customer-review__sub">
          Nói gì về chúng tôi
          <Scroll.Link smooth to="partner">
            <Image
              src={ArrowDownIcon}
              alt="Đi xuống phần tiếp theo"
              className="product__icon"
            />
          </Scroll.Link>
        </p>

        <Slider {...settings}>
          <CustomerReviewItem
            avatar={{ src: LawyerAvt, alt: "Hình ảnh khách hàng luật sư" }}
            name="Luật sư X"
            job="Luật sư"
            comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi velit incidunt enim labore nam, porro aliquid assumenda, nihil possimus aliquam harum autem di!"
          />
          <CustomerReviewItem
            avatar={{ src: LawyerAvt, alt: "Hình ảnh khách hàng luật sư" }}
            name="Luật sư X"
            job="Luật sư"
            comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi velit incidunt enim labore nam, porro aliquid assumenda, nihil possimus aliquam harum autem di!"
          />
          <CustomerReviewItem
            avatar={{ src: LawyerAvt, alt: "Hình ảnh khách hàng luật sư" }}
            name="Luật sư X"
            job="Luật sư"
            comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi velit incidunt enim labore nam, porro aliquid assumenda, nihil possimus aliquam harum autem di!"
          />
          <CustomerReviewItem
            avatar={{ src: LawyerAvt, alt: "Hình ảnh khách hàng luật sư" }}
            name="Luật sư X"
            job="Luật sư"
            comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi velit incidunt enim labore nam, porro aliquid assumenda, nihil possimus aliquam harum autem di!"
          />
          <CustomerReviewItem
            avatar={{ src: LawyerAvt, alt: "Hình ảnh khách hàng luật sư" }}
            name="Luật sư X"
            job="Luật sư"
            comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi velit incidunt enim labore nam, porro aliquid assumenda, nihil possimus aliquam harum autem di!"
          />
          <CustomerReviewItem
            avatar={{ src: LawyerAvt, alt: "Hình ảnh khách hàng luật sư" }}
            name="Luật sư X"
            job="Luật sư"
            comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi velit incidunt enim labore nam, porro aliquid assumenda, nihil possimus aliquam harum autem di!"
          />
        </Slider>
      </div>
    </Container>
  );
};

export default CustomerReview;
