import React from "react";

const KeyWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-porcelain bg-opacity-10 text-porcelain inline-block rounded px-2 py-1">
    {children}
  </div>
);

export default KeyWrapper;
