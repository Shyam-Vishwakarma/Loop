import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button
      className="text-gray-300 lg:text-lg text-md font-medium lg:mt-4 mt-4 cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
