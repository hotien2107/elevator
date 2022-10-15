import { StaticImageData } from "next/image";

export interface DescItemProps {
  img: {
    src: string | StaticImageData;
    alt: string;
  };
  content: string;
  isReverse: boolean;
}
