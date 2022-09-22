import Image from "next/image";
import React from "react";
import { NewsMainItemProps } from "./types";

const NewsMainItem = (props: NewsMainItemProps) => {
  const { thumbnail, title, subcontent } = props;
  return (
    <div className="news-item__main">
      <div className="news-item__main-thumbnail">
        <Image
          src={thumbnail.src}
          alt={thumbnail.alt}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="news-item__main-title">{title}</div>
      <div className="news-item__main-subcontent">{subcontent}</div>
    </div>
  );
};

export default NewsMainItem;
