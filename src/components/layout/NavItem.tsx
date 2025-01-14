import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

interface NavItemProps {
  to: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "font-bold cursor-default text-porcelain"
          : "hover:opacity-80 transition-opacity"
      }
    >
      {({ isActive }) => (
        <motion.li
          whileHover={isActive ? undefined : { scale: 1.05 }} 
          transition={{ duration: 0.2 }}
          className="list-none"
        >
          {label}
        </motion.li>
      )}
    </NavLink>
  );
};

export default NavItem;
