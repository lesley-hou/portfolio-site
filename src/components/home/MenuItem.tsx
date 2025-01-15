import React from "react";
import Icon from "../layout/Icon";
import Button from "./Button";

interface MenuItemProps {
  onClick: () => void;
  label: string;
  iconSrc: string;
  iconAlt: string;
  iconSize: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label, iconSrc, iconAlt, iconSize }) => (
  <Button onClick={onClick} className="text-boulder" hoverMovement={3}>
    <div className="flex flex-row items-center">
      <Icon src={iconSrc} alt={iconAlt} iconSize={iconSize} />
      <p className="px-2">{label}</p>
    </div>
  </Button>
);

export default MenuItem;
