import React from "react";
import { motion } from "framer-motion";

const Button: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  hoverMovement?: number;
}> = ({ children, onClick, className, hoverMovement = 10}) => {
  const baseClass = "flex items-center hover:cursor-pointer"
  const defaultClass = "text-porcelain font-vt323";

  return (
    <motion.div
      className={`${baseClass} ${className ? className : defaultClass}`}
      whileHover={{ x : hoverMovement}}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default Button;
