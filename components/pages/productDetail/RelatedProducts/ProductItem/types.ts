import { StaticImageData } from "next/image";

export interface ProductItemProps {
  image: {
    src: string | StaticImageData;
    alt: string;
  };
  label: string;
  desc: string;
}
