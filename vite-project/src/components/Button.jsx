import React from "react";

const Button = ({ title, onClick, disabled = false, className }) => { 
  return (
    <button onClick={onClick} disabled={disabled} className={className}> 
      {title}
    </button>
  );
};

export default Button;
