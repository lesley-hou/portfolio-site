import React from "react";
import { CurrentInfo } from "../../data/current";

const CurrentLine: React.FC<CurrentInfo> = ({alt, text, name }) => {
  return (
    <div className="flex flex-row items-center">
      <img src={name} alt={alt} className="w-4 h-4 mr-2" />
      <span className="font-inter text-boulder">{text}</span>
    </div>
  );
};

export default CurrentLine;
