import React from "react";
import DescItem from "./DescItem";
import Evalator1 from "../../../../assets/images/thangmay1.jpeg";
import Evalator2 from "../../../../assets/images/thangmay2.jpg";
import Evalator3 from "../../../../assets/images/thang-may-ngoai-troi.jpg";
import Evalator4 from "../../../../assets/images/thang-may-ngoai-troi.jpg";

const ProductDesc = () => {
  return (
    <div className="product-desc">
      <h4 className="product-desc__title">MÔ TẢ SẢN PHẨM</h4>

      <div className="product-desc__list">
        {ItemList.map((item, key) => {
          return (
            <DescItem
              content={item.desc}
              img={item.img}
              isReverse={key % 2 !== 0}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductDesc;

const ItemList = [
  {
    img: {
      src: Evalator1,
      alt: "",
    },
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur sed voluptate tenetur temporibus sint voluptatum alias animi autem cupiditate quo. Saepe deleniti repellat eveniet culpa sit! Architecto, possimus accusantium. Tempore?",
  },
  {
    img: {
      src: Evalator2,
      alt: "",
    },
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur sed voluptate tenetur temporibus sint voluptatum alias animi autem cupiditate quo. Saepe deleniti repellat eveniet culpa sit! Architecto, possimus accusantium. Tempore?",
  },
  {
    img: {
      src: Evalator3,
      alt: "",
    },
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur sed voluptate tenetur temporibus sint voluptatum alias animi autem cupiditate quo. Saepe deleniti repellat eveniet culpa sit! Architecto, possimus accusantium. Tempore?",
  },
  {
    img: {
      src: Evalator4,
      alt: "",
    },
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur sed voluptate tenetur temporibus sint voluptatum alias animi autem cupiditate quo. Saepe deleniti repellat eveniet culpa sit! Architecto, possimus accusantium. Tempore?",
  },
];
