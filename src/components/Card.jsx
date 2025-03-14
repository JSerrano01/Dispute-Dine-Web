// src/components/Card.jsx
import React from "react";

const Card = ({ children, className = "", bgColor = "bg-white", shadow = "shadow-lg" }) => {
  return (
    <div className={`rounded-xl p-6 ${bgColor} ${shadow} ${className}`}>
      {children}
    </div>
  );
};

export default Card;