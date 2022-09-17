import { StaticImageData } from "next/image";

export interface ProjectItemProps {
  image: {
    src: string | StaticImageData;
    alt: string;
  };
  label: string;
}
