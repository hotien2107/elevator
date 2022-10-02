import React, { useState } from "react";
import Container from "../../../../layouts/Container";
import ButtonPrimary from "../../../ui/button/ButtonPrimary";
import ButtonSecondary from "../../../ui/button/ButtonSecondary";
import ControlItem from "./ControlItem";
import Image from "next/image";
import ArrowDownWhiteIcon from "../../../../assets/icons/arrow-down-white.svg";
import * as Scroll from "react-scroll";
import ReactTooltip from "react-tooltip";

const Introduction = () => {
  const [isShowTooltip, setIsShowTooltip] = useState(false);
  return (
    <div className="intro">
      <Container className="intro__container">
        <div className="intro__content">
          <div className="intro__title">
            Thang máy <br /> <span>Hưng phú gia</span>
          </div>
          <div className="intro__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            libero, id illum cumque magni voluptates perspiciatis aut eos
            voluptatem consequatur rem nesciunt tempora accusantium suscipit
            necessitatibus repellendus expedita. Maxime, facere.
          </div>

          <div className="intro__btn-group">
            <ButtonPrimary>Dịch vụ của chúng tôi</ButtonPrimary>
            <ButtonSecondary>Liên hệ ngay</ButtonSecondary>
          </div>
        </div>

        <div className="intro__control">
          {isShowTooltip && (
            <ReactTooltip place="top" effect="solid" type="light" />
          )}
          <Scroll.Link smooth to="customer" data-tip="Nhận xét của khách hàng">
            <ControlItem
              onMouseEnter={() => {
                setIsShowTooltip(true);
              }}
              onMouseLeave={() => {
                setIsShowTooltip(false);
                setTimeout(() => setIsShowTooltip(true), 10);
              }}
            >
              5
            </ControlItem>
          </Scroll.Link>

          <Scroll.Link smooth to="partner" data-tip="Các đối tác của chúng tôi">
            <ControlItem
              onMouseEnter={() => {
                setIsShowTooltip(true);
              }}
              onMouseLeave={() => {
                setIsShowTooltip(false);
                setTimeout(() => setIsShowTooltip(true), 10);
              }}
            >
              6
            </ControlItem>
          </Scroll.Link>

          <Scroll.Link smooth to="product" data-tip="Danh sách sản phẩm">
            <ControlItem
              onMouseEnter={() => {
                setIsShowTooltip(true);
              }}
              onMouseLeave={() => {
                setIsShowTooltip(false);
                setTimeout(() => setIsShowTooltip(true), 10);
              }}
            >
              3
            </ControlItem>
          </Scroll.Link>

          <Scroll.Link smooth to="project" data-tip="Các dự án của chúng tôi">
            <ControlItem
              onMouseEnter={() => {
                setIsShowTooltip(true);
              }}
              onMouseLeave={() => {
                setIsShowTooltip(false);
                setTimeout(() => setIsShowTooltip(true), 10);
              }}
            >
              4
            </ControlItem>
          </Scroll.Link>

          <Scroll.Link smooth to="intro" data-tip="Giới thiệu">
            <ControlItem
              onMouseEnter={() => {
                setIsShowTooltip(true);
              }}
              onMouseLeave={() => {
                setIsShowTooltip(false);
                setTimeout(() => setIsShowTooltip(true), 10);
              }}
            >
              1
            </ControlItem>
          </Scroll.Link>

          <Scroll.Link smooth to="about" data-tip="Về chúng tôi">
            <ControlItem
              onMouseEnter={() => {
                setIsShowTooltip(true);
              }}
              onMouseLeave={() => {
                setIsShowTooltip(false);
                setTimeout(() => setIsShowTooltip(true), 10);
              }}
            >
              2
            </ControlItem>
          </Scroll.Link>

          <ControlItem
            onMouseEnter={() => {
              setIsShowTooltip(true);
            }}
            onMouseLeave={() => {
              setIsShowTooltip(false);
              setTimeout(() => setIsShowTooltip(true), 10);
            }}
          >
            prev
          </ControlItem>

          <ControlItem
            onMouseEnter={() => {
              setIsShowTooltip(true);
            }}
            onMouseLeave={() => {
              setIsShowTooltip(false);
              setTimeout(() => setIsShowTooltip(true), 10);
            }}
          >
            next
          </ControlItem>
        </div>
      </Container>
      <div className="intro__down">
        <Scroll.Link smooth to="about">
          <Image src={ArrowDownWhiteIcon} alt="" width={50} height={50} />
        </Scroll.Link>
      </div>
    </div>
  );
};

export default Introduction;
