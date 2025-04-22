import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="bg-gray-800 text-white w-[90%] mx-auto p-8 rounded-2xl shadow-lg mt-2"> 
      {children}
    </div>
  );
};