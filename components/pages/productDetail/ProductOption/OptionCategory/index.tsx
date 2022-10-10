import React from "react";
import { OptionCategoryProps } from "./types";

const OptionCategory = (props: OptionCategoryProps) => {
  const { categoryList, currentCategory, onChangeCategory } = props;
  return (
    <ul className="product-option__category-list">
      {categoryList.map((item, key) => {
        if (item.id === currentCategory) {
          return (
            <li
              key={key}
              className="product-option__category-item product-option__selected"
            >
              {item.name}
            </li>
          );
        }
        return (
          <li
            key={key}
            className="product-option__category-item"
            onClick={() => {
              onChangeCategory(item.id);
            }}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
};

export default OptionCategory;
