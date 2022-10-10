import { StaticImageData } from "next/image";

export interface OptionListProps {
  currentOption: string;
  optionList: OptionListItemInterface[];
  onChangeOption: (option: string) => void;
}

interface OptionListItemInterface {
  image: {
    src: string | StaticImageData;
    alt: string;
  };
  id: string;
  name: string;
}
