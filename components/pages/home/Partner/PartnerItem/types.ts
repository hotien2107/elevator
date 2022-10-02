import { StaticImageData } from "next/image";

export interface PartnerItemProps {
  image: {
    src: string | StaticImageData;
    alt: string;
  };
}
