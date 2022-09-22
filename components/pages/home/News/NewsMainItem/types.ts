import { StaticImageData } from "next/image";

export interface NewsMainItemProps {
  thumbnail: {
    src: string | StaticImageData;
    alt: string;
  };

  title: string;
  subcontent: string;
}
