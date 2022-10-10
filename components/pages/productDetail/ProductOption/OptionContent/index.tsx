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
      alt: "Màu xám",
    },
    id: "color-gray",
    name: "Màu xám",
  },
  {
    image: {
      src: BlueColor,
      alt: "Màu xanh",
    },
    id: "color-blue",
    name: "Màu xanh",
  },
  {
    image: {
      src: NaviColor,
      alt: "Màu navi",
    },
    id: "color-navi",
    name: "Màu navi",
  },
];

const doorList = [
  {
    image: {
      src: SteelMaterial,
      alt: "Cửa thép",
    },
    id: "door-steel",
    name: "Cửa thép",
  },
  {
    image: {
      src: GlassMaterial,
      alt: "Cửa kính",
    },
    id: "door-glass",
    name: "Cửa kính",
  },
];

const floorList = [
  {
    image: {
      src: SteelMaterial,
      alt: "Sàn thép",
    },
    id: "floor-steel",
    name: "Sàn thép",
  },
  {
    image: {
      src: GlassMaterial,
      alt: "Sàn kính",
    },
    id: "floor-glass",
    name: "Sàn kính",
  },
  {
    image: {
      src: WoodMaterial,
      alt: "Sàn gỗ",
    },
    id: "floor-wood",
    name: "Sàn gỗ",
  },
];
