import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import Container from "../../../../layouts/Container";
import NewsMainItem from "./NewsMainItem";
import NewsRelatedItem from "./NewsRelatedItem";
import ThumbnailImage from "../../../../assets/images/thang-may-gia-dinh-hcm.jpg";

const News = () => {
  return (
    <Container>
      <div className="news">
        <h4 className="news__title">
          Tin tức <AiFillCaretDown className="news__icon" />
        </h4>

        <div className="news__content">
          <div className="news__main">
            <NewsMainItem
              thumbnail={{
                src: ThumbnailImage,
                alt: "Tin tức thang máy gia đình",
              }}
              title="Tiêu đề tin tức"
              subcontent="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi recusandae ducimus laboriosam cupiditate? Beatae odit error distinctio sit iste eveniet nam rerum, odio quae iusto nostrum vero voluptatum expedita veniam!"
            />
          </div>
          <div className="news__related">
            <NewsRelatedItem
              thumbnail={{
                src: ThumbnailImage,
                alt: "Tin tức thang máy gia đình",
              }}
              title="Tiêu đề tin tức"
              subcontent="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi recusandae ducimus laboriosam cupiditate? Beatae odit error distinctio sit iste eveniet nam rerum, odio quae iusto nostrum vero voluptatum expedita veniam!"
            />
          </div>
          <div className="news__related">
            <NewsRelatedItem
              thumbnail={{
                src: ThumbnailImage,
                alt: "Tin tức thang máy gia đình",
              }}
              title="Tiêu đề tin tức"
              subcontent="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi recusandae ducimus laboriosam cupiditate? Beatae odit error distinctio sit iste eveniet nam rerum, odio quae iusto nostrum vero voluptatum expedita veniam!"
            />
          </div>
          <div className="news__related">
            <NewsRelatedItem
              thumbnail={{
                src: ThumbnailImage,
                alt: "Tin tức thang máy gia đình",
              }}
              title="Tiêu đề tin tức"
              subcontent="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi recusandae ducimus laboriosam cupiditate? Beatae odit error distinctio sit iste eveniet nam rerum, odio quae iusto nostrum vero voluptatum expedita veniam!"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default News;
