import React from "react";
import Container from "../../../../layouts/Container";
import ButtonPrimary from "../../../ui/button/ButtonPrimary";
import ButtonSecondary from "../../../ui/button/ButtonSecondary";
import ControlItem from "./ControlItem";
import Image from "next/image";
import ArrowDownWhiteIcon from "../../../../assets/icons/arrow-down-white.svg";

const Introduction = () => {
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
          <ControlItem>5</ControlItem>
          <ControlItem>6</ControlItem>
          <ControlItem>3</ControlItem>
          <ControlItem>4</ControlItem>
          <ControlItem>1</ControlItem>
          <ControlItem>2</ControlItem>
          <ControlItem>prev</ControlItem>
          <ControlItem>next</ControlItem>
        </div>
      </Container>
      <div className="intro__down">
        <Image src={ArrowDownWhiteIcon} alt="" width={50} height={50} />
      </div>
    </div>
  );
};

export default Introduction;
