import React from "react";
const Shimmer = ({ className }) => {
  return (
    <div
      className={`animate-pulse bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 ${className}`}
    />
  );
};

export default Shimmer;
