import { StaticImageData } from "next/image";

export interface PartnerItemProps {
  avatar: {
    src: string | StaticImageData;
    alt: string;
  };
  name: string;
  job: string;
  comment: string;
}
