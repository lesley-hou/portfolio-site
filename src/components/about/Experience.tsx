import React from "react";
import { Experiences } from "../../data/experiences";

const Experience: React.FC<Experiences> = ({
  title,
  company,
  link,
  date,
  location,
  isPresent,
  description,
}) => {
  const highlightKeywords = (text: string, keywords: string[]) => {
    const regex = new RegExp(`(${keywords.join("|")})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      keywords.some((keyword) => keyword.toLowerCase() === part.toLowerCase()) ? (
        <span key={index} className="font-semibold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="mb-8 flex items-start font-inter">
    <div
        className={`absolute left-0 mt-2 w-2.5 h-2.5 rounded-full ${
            isPresent ? "bg-boulder" : "bg-metal"
        }`}
    />
    <div>
    <h2 className="text-porcelain text-lg font-semibold">
        {title} @{" "}
        <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
        >
        {company}
        </a>
    </h2>
    <p className="text-iron font-thin text-sm">
        {date} - {location}
    </p>
    <p className="text-boulder text-sm">
        {highlightKeywords(description, [
        "fullstack developer",
        "frontend developer",
        "backend developer",
        ])}
    </p>
    </div>
    </div>
  );
};

export default Experience;
