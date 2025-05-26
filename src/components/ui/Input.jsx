import React from "react";

const Input = ({
  type = "text",
  placeholder = "",
  className = "",
  ...props
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`w-full p-3 rounded-lg border border-gray-300 bg-white/50 backdrop-blur-md text-gray-800 focus:outline-none  focus:ring-indigo-500 ${className}`}
      
    />
  );
};

export default Input;
