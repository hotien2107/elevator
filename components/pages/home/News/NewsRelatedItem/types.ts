import { StaticImageData } from "next/image";

export interface NewsRelatedItemProps {
  thumbnail: {
    src: string | StaticImageData;
    alt: string;
  };

  title: string;
  subcontent: string;
}
