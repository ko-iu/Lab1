import React from "react";

const Input = ({ type = "text", placeholder, onChange, value, className }) => { 
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className={className} 
    />
  );
};

export default Input;
