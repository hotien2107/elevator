import { StaticImageData } from "next/image";

export interface CustomerReviewItemProps {
  avatar: {
    src: string | StaticImageData;
    alt: string;
  };
  name: string;
  job: string;
  comment: string;
}
