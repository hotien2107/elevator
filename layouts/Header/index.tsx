import React, { useEffect, useRef, useState } from "react";
import Container from "../Container";
import HeaderMenu from "./components/HeaderMenu";
import Logo from "../../assets/images/logo.png";
import LogoOriginal from "../../assets/images/logo-original.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { HeaderProps } from "./types";

const Header = (props: HeaderProps) => {
  const { isHome } = props;
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

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
      className={"header " + (offset >= 10 || !isHome ? "header--white" : "")}
      ref={ref}
    >
      <Container className="header__container">
        <Image
          src={offset >= 10 || !isHome ? LogoOriginal : Logo}
          alt="Công ty thang máy gia đình Hưng Phú Gia"
          className="header__logo"
          onClick={() => {
            router.push("/");
          }}
        />
        <HeaderMenu isWhite={offset >= 10 || !isHome} />
      </Container>
    </div>
  );
};

export default Header;
