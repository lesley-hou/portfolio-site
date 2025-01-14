import React from "react";

interface IconProps {
  src: string;
  alt: string;
  iconSize: string;
  href?: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ src, alt, iconSize, href, className }) => {
  const baseClass = "hover:opacity-80 transition-opacity";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClass} ${iconSize} ${className}`}
      >
        <img src={src} alt={alt} className={`${iconSize}`} />
      </a>
    );
  }

  return (
    <div className={`${baseClass} ${className}`}>
      <img src={src} alt={alt} className={`${iconSize}`} />
    </div>
  );
};

export default Icon;