import React, { useMemo, useState } from "react";
import OptionImg from "./OptionImg";
import OptionList from "./OptionList";
import GrayColor from "../../../../../assets/images/colors/gray.jpg";
import BlueColor from "../../../../../assets/images/colors/blue.jpg";
import NaviColor from "../../../../../assets/images/colors/navi.jpg";
import SteelMaterial from "../../../../../assets/images/colors/steel.jpg";
import GlassMaterial from "../../../../../assets/images/colors/glass.jpg";
import WoodMaterial from "../../../../../assets/images/colors/wood.jpg";
import { OptionContentProps } from "./types";

const OptionContent = (props: OptionContentProps) => {
  const { categoryId } = props;
  const [color, setColor] = useState("color-gray");
  const [door, setDoor] = useState("door-steel");
  const [floor, setFloor] = useState("floor-steel");

  const currentItem: string = useMemo(() => {
    switch (categoryId) {
      case "color": {
        return color;
      }
      case "door": {
        return door;
      }
      case "floor": {
        return floor;
      }
      default: {
        return color;
      }
    }
  }, [categoryId, color, door, floor]);

  const optionList: typeof colorList = useMemo(() => {
    switch (categoryId) {
      case "color": {
        return colorList;
      }
      case "door": {
        return doorList;
      }
      case "floor": {
        return floorList;
      }
      default: {
        return colorList;
      }
    }
  }, [categoryId]);

  const handleChangeItem = (item: string) => {
    switch (categoryId) {
      case "color": {
        setColor(item);
        return;
      }
      case "door": {
        setDoor(item);
        return;
      }
      case "floor": {
        setFloor(item);
        return;
      }
      default: {
        return;
      }
    }
  };

  return (
    <div className="product-option__content">
      <OptionList
        optionList={optionList}
        currentOption={currentItem}
        onChangeOption={handleChangeItem}
      />
      <OptionImg color={color} door={door} floor={floor} />
    </div>
  );
};

export default OptionContent;

const colorList = [
  {
    image: {
      src: GrayColor,
      alt: "M??u x??m",
    },
    id: "color-gray",
    name: "M??u x??m",
  },
  {
    image: {
      src: BlueColor,
      alt: "M??u xanh",
    },
    id: "color-blue",
    name: "M??u xanh",
  },
  {
    image: {
      src: NaviColor,
      alt: "M??u navi",
    },
    id: "color-navi",
    name: "M??u navi",
  },
];

const doorList = [
  {
    image: {
      src: SteelMaterial,
      alt: "C???a th??p",
    },
    id: "door-steel",
    name: "C???a th??p",
  },
  {
    image: {
      src: GlassMaterial,
      alt: "C???a k??nh",
    },
    id: "door-glass",
    name: "C???a k??nh",
  },
];

const floorList = [
  {
    image: {
      src: SteelMaterial,
      alt: "S??n th??p",
    },
    id: "floor-steel",
    name: "S??n th??p",
  },
  {
    image: {
      src: GlassMaterial,
      alt: "S??n k??nh",
    },
    id: "floor-glass",
    name: "S??n k??nh",
  },
  {
    image: {
      src: WoodMaterial,
      alt: "S??n g???",
    },
    id: "floor-wood",
    name: "S??n g???",
  },
];
