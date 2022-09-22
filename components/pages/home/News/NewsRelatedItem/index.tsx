import Image from "next/image";
import React from "react";
import { NewsRelatedItemProps } from "./types";

const NewsRelatedItem = (props: NewsRelatedItemProps) => {
  const { thumbnail, title, subcontent } = props;
  return (
    <div className="news-item__related">
      <div className="news-item__related-thumbnail">
        <Image
          src={thumbnail.src}
          alt={thumbnail.alt}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="news-item__related-content">
        <div className="news-item__related-title">{title}</div>
        <div className="news-item__related-subcontent">{subcontent}</div>
      </div>
    </div>
  );
};

export default NewsRelatedItem;
