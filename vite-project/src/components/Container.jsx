import React from "react";

export const Container = ({ children }) => {
  return (
    <div className="bg-gray-800 text-white w-[90%] mx-auto p-8 rounded-2xl shadow-lg mt-2"> 
      {children}
    </div>
  );
};
            