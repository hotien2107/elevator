import React, { useState } from "react";
import OptionCategory from "./OptionCategory";
import { CategoryItem } from "./OptionCategory/types";
import OptionContent from "./OptionContent";

type CategoryType = "color" | "door" | "floor" | "key";

const ProductOption = () => {
  const [category, setCategory] = useState<CategoryType>("color");

  const handleChangeCategory = (category: CategoryType) => {
    setCategory(category);
  };

  return (
    <div className="product-option">
      <h4 className="product-option__title">TUỲ CHỌN</h4>
      <OptionCategory
        categoryList={OptionCategoryList}
        currentCategory={category}
        onChangeCategory={handleChangeCategory}
      />
      <OptionContent categoryId={category} />
    </div>
  );
};
const OptionCategoryList: CategoryItem[] = [
  {
    id: "color",
    name: "Màu thang",
  },
  { id: "door", name: "Cửa thang" },
  { id: "floor", name: "Sàn thang" },
  { id: "key", name: "Nút bấm" },
];

export default ProductOption;
