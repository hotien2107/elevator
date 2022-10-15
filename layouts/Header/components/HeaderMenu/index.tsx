import { useRouter } from "next/router";
import React from "react";
import { HeaderMenuProps } from "./types";

const HeaderMenu = (props: HeaderMenuProps) => {
  const { isWhite } = props;
  const router = useRouter();

  return (
    <ul className={"header-menu " + (isWhite ? "header-menu--white" : "")}>
      <li
        className="header-menu__item"
        onClick={() => {
          router.push("/");
        }}
      >
        Trang chủ
      </li>
      <li
        className="header-menu__item"
        onClick={() => {
          router.push("/gioi-thieu");
        }}
      >
        Giới thiệu
      </li>
      <li className="header-menu__item">Sản phẩm</li>
      <li
        className="header-menu__item"
        onClick={() => {
          router.push("/du-an");
        }}
      >
        Dự án
      </li>
      <li className="header-menu__item">Tin tức</li>
      <li className="header-menu__item">Liên hệ</li>
    </ul>
  );
};

export default HeaderMenu;
