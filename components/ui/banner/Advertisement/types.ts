import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface AdvertisementProps {
  children: ReactNode;
  bgImage: { src: string | StaticImageData; alt: string };
}
