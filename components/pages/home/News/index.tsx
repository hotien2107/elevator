import Image from "next/image";
import * as Scroll from "react-scroll";
import ArrowDownIcon from "../../../../assets/icons/arrow-down-sm.svg";
import ThumbnailImage from "../../../../assets/images/thang-may-gia-dinh-hcm.jpg";
import Container from "../../../../layouts/Container";
import NewsMainItem from "./NewsMainItem";
import NewsRelatedItem from "./NewsRelatedItem";

const News = () => {
  return (
    <Container>
      <div className="news">
        <h4 className="news__title">
          Tin tức{" "}
          <Scroll.Link smooth to="news">
            <Image
              src={ArrowDownIcon}
              alt="Đi xuống phần tiếp theo"
              className="product__icon"
            />
          </Scroll.Link>
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
