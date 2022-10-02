import React from "react";

interface ControlItemProps {
  children: React.ReactNode;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const ControlItem = (props: ControlItemProps) => {
  const { children, onMouseEnter, onMouseLeave } = props;

  return (
    <div
      className="intro__control-item"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};

export default ControlItem;
