import React, { useRef } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import Container from "../../../../layouts/Container";
import VinhomesImg from "../../../../assets/images/Vinhomes.png";
import ACBImg from "../../../../assets/images/acb.png";
import NovalandImg from "../../../../assets/images/novaland-logo.jpg";
import VietcomImg from "../../../../assets/images/Vietcombank_logo_fixed.svg.png";
import SpotifyImg from "../../../../assets/images/Spotify_logo_with_text.svg.png";
import VinamilkImg from "../../../../assets/images/Logo_vinamilk.png";
import PartnerItem from "./PartnerItem";
import Slider from "react-slick";
import ArrowDownIcon from "../../../../assets/icons/arrow-down-sm.svg";
import * as Scroll from "react-scroll";
import Image from "next/image";

const Partner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    prevArrow: (
      <AiFillCaretLeft className="partner__action partner__action--left" />
    ),
    nextArrow: (
      <AiFillCaretRight className="partner__action partner__action--right" />
    ),
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
      <div className="partner">
        <h4 className="partner__title">Đối tác</h4>
        <p className="partner__sub">
          của chúng tôi
          <Scroll.Link smooth to="news">
            <Image
              src={ArrowDownIcon}
              alt="Đi xuống phần tiếp theo"
              className="product__icon"
            />
          </Scroll.Link>
        </p>

        <Slider {...settings}>
          <PartnerItem
            image={{ src: VinhomesImg, alt: "Hình ảnh đối tác vinhome" }}
          />
          <PartnerItem image={{ src: ACBImg, alt: "Hình ảnh đối tác ACB" }} />
          <PartnerItem
            image={{ src: NovalandImg, alt: "Hình ảnh đối tác Novaland" }}
          />
          <PartnerItem
            image={{ src: VietcomImg, alt: "Hình ảnh đối tác Vietcombank" }}
          />
          <PartnerItem
            image={{ src: SpotifyImg, alt: "Hình ảnh đối tác Spotify" }}
          />
          <PartnerItem
            image={{ src: VinamilkImg, alt: "Hình ảnh đối tác Vinamilk" }}
          />
        </Slider>
      </div>
    </Container>
  );
};

export default Partner;
