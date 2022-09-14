import React from "react";

interface ControlItemProps {
  children: React.ReactNode;
}

const ControlItem = (props: ControlItemProps) => {
  const { children } = props;
  
  return (
    <div
      className="intro__control-item"
      onMouseEnter={() => {
        console.log("mouseEnter");
      }}
      onMouseLeave={() => {
        console.log("mouseLeave");
      }}
    >
      {children}
    </div>
  );
};

export default ControlItem;
