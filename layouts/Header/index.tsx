import React from "react";
import Introduction from "../../components/pages/home/Introduction";
import Container from "../Container";
import HeaderMenu from "./components/HeaderMenu";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">Hung Phu Gia</div>
      <HeaderMenu />
    </div>
  );
};

export default Header;
