import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="bg-night min-h-screen flex flex-col">
      <Navbar />
        <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
