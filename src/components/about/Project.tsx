import React from "react";
import Icon from "../../components/layout/Icon";
import { Projects } from "../../data/projects";

const Project: React.FC<Projects> = ({ name, icon, alt, description }) => {
  return (
    <div className="font-inter rounded-lg p-4 flex flex-col space-x-2 mx-2 border min-w-48 sm:min-w-64 border-metal">
        <div className="flex flex-row items-center justify-center">
            <Icon src={icon} alt={alt} className="flex justify-center items-center mr-2" iconSize="w-4 h-4"/>
            <p className="text-porcelain text-lg">{name}</p>
        </div>
        <p className="text-sm font-light text-boulder">{description}</p>
    </div>
  );
};

export default Project;
