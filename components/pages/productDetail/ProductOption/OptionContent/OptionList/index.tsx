import Image from "next/image";
import React from "react";
import { OptionListProps } from "./types";

const OptionList = (props: OptionListProps) => {
  const { optionList, currentOption, onChangeOption } = props;
  return (
    <ul className="product-option__list">
      {optionList.map((option, key) => {
        if (option.id === currentOption) {
          return (
            <li key={key} className="product-option__item">
              <div className="product-option__item-img product-option__item-active">
                <Image
                  src={option.image.src}
                  alt={option.image.alt}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              {option.name}
            </li>
          );
        }
        return (
          <li
            key={key}
            onClick={() => {
              onChangeOption(option.id);
            }}
            className="product-option__item"
          >
            <div className="product-option__item-img">
              <Image
                src={option.image.src}
                alt={option.image.alt}
                layout="fill"
                objectFit="cover"
              />
            </div>
            {option.name}
          </li>
        );
      })}
    </ul>
  );
};

export default OptionList;
