import React from "react";

const Input = ({ type = "text", name, placeholder, onChange, value, className }) => { 
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className={className} 
    />
  );
};

export default Input;
