import React from "react";

const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`w-full bg-white/30 hover:bg-white/50  text-lg font-medium py-3 rounded-xl shadow-md backdrop-blur-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
