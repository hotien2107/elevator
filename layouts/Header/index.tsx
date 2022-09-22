import React, { useEffect, useRef, useState } from "react";
import Container from "../Container";
import HeaderMenu from "./components/HeaderMenu";
import Logo from "../../assets/images/logo.png";
import Image from "next/image";

const Header = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={"header " + (offset >= 10 ? "header--black" : "")}
      ref={ref}
    >
      <Container className="header__container">
        <Image
          src={Logo}
          alt="Công ty thang máy gia đình Hưng Phú Gia"
          className="header__logo"
        />
        <HeaderMenu />
      </Container>
    </div>
  );
};

export default Header;
