import React from "react";
import Advertisement from "../../../ui/banner/Advertisement";
import AdsImg from "../../../../assets/images/thangmay2.jpg";
import ButtonPrimary from "../../../ui/button/ButtonPrimary";
import { MdPlayArrow } from "react-icons/md";

const HomeAds = () => {
  return (
    <Advertisement
      bgImage={{
        src: AdsImg,
        alt: "Liên hệ ngay để lắp đặt thang máy gia đình",
      }}
    >
      <div className="home-ads">
        <p className="home-ads__text">
          Liên hệ ngay với chúng tôi để được <br /> <span>Hỗ trợ sớm nhất</span>
        </p>

        <ButtonPrimary>
          Liên hệ ngay
          <MdPlayArrow />
        </ButtonPrimary>
      </div>
    </Advertisement>
  );
};

export default HomeAds;
