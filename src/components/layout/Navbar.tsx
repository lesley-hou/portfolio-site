import React from "react";
import NavItem from "./NavItem"; 

const Navbar: React.FC = () => {
  return (
    <nav className="text-porcelain font-inter font-thin p-8 text-xl">
      <div className="container mx-auto flex justify-center items-center">
        <ul className="flex space-x-12 sm:space-x-24">
          <NavItem to="/" label="home" />
          <NavItem to="/about" label="about" />
          <NavItem to="/contact" label="contact" />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
