import React from "react";
import Container from "../Container";
import Logo from "../../assets/images/logo.png";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { AiFillYoutube, AiOutlineWhatsApp } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <Container className="footer__container">
        <div className="footer__info">
          <Image
            src={Logo}
            alt="Công ty thang máy gia đình Hưng Phú Gia"
            className="footer__logo"
          />
          <div className="footer__desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </div>

          <div className="footer__network">
            <div className="footer__network-item">
              <FaFacebookF />
            </div>
            <div className="footer__network-item">
              <AiFillYoutube />
            </div>
            <div className="footer__network-item">
              <BsInstagram />
            </div>
            <div className="footer__network-item">
              <AiOutlineWhatsApp />
            </div>
          </div>
        </div>

        <div className="footer__fast-link">
          <div className="footer__title">Liên kết nhanh</div>
          <ul className="footer__link-list">
            <li className="footer__link-item">Giới thiệu</li>
            <li className="footer__link-item">Sản phẩm</li>
            <li className="footer__link-item">Dịch vụ</li>
            <li className="footer__link-item">Dự án</li>
            <li className="footer__link-item">Tin tức</li>
            <li className="footer__link-item">Liên hệ</li>
          </ul>
        </div>

        <div className="footer__contact">
          <div className="footer__title">Liên hệ</div>

          <div className="footer__contact-item">
            207/12 Nguyễn Văn Đậu Phường 11, Quận Bình Thạnh, Tp HCM.
          </div>
          <div className="footer__contact-item">0968 097 777</div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
