export interface OptionCategoryProps {
  categoryList: CategoryItem[];
  currentCategory: string; //id
  onChangeCategory: (id: "color" | "door" | "floor" | "key") => void;
}

export interface CategoryItem {
  id: string;
  name: string;
}
