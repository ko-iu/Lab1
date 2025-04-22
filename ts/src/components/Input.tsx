import React from "react";

interface InputProps {
  type?: string;
  name: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({ 
  type = "text", 
  name, 
  placeholder, 
  onChange, 
  value, 
  className 
}) => { 
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