import Image, { StaticImageData } from "next/image";
import React, { useMemo } from "react";
import { OptionImgProps } from "./types";
import Evalator1 from "../../../../../../assets/images/thangmay1.jpeg";
import Evalator2 from "../../../../../../assets/images/thangmay2.jpg";
import Evalator3 from "../../../../../../assets/images/thang-may-ngoai-troi.jpg";
import Evalator4 from "../../../../../../assets/images/thang-may-ngoai-troi.jpg";

const OptionImg = (props: OptionImgProps) => {
  const { color, door, floor } = props;

  const evalatorSelected: StaticImageData = useMemo(() => {
    const key = color + "__" + door + "__" + floor;

    return evalator[key];
  }, [color, door, floor]);

  return (
    <div className="product-option__img">
      <Image src={evalatorSelected} alt="" layout="fill" objectFit="cover" />
    </div>
  );
};

export default OptionImg;

interface EvalatorInterface {
  [key: string]: StaticImageData;
}

const evalator: EvalatorInterface = {
  "color-gray__door-steel__floor-steel": Evalator1,
  "color-blue__door-steel__floor-steel": Evalator2,
  "color-navi__door-steel__floor-steel": Evalator3,
  "color-gray__door-glass__floor-steel": Evalator4,
  "color-blue__door-glass__floor-steel": Evalator1,
  "color-navi__door-glass__floor-steel": Evalator2,
  "color-gray__door-glass__floor-glass": Evalator3,
  "color-blue__door-glass__floor-glass": Evalator4,
  "color-navi__door-glass__floor-glass": Evalator1,
  "color-gray__door-steel__floor-glass": Evalator2,
  "color-blue__door-steel__floor-glass": Evalator3,
  "color-navi__door-steel__floor-glass": Evalator4,
  "color-gray__door-glass__floor-wood": Evalator3,
  "color-blue__door-glass__floor-wood": Evalator4,
  "color-navi__door-glass__floor-wood": Evalator1,
  "color-gray__door-steel__floor-wood": Evalator2,
  "color-blue__door-steel__floor-wood": Evalator3,
  "color-navi__door-steel__floor-wood": Evalator4,
};
