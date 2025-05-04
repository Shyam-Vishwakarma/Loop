import React from "react";
import { Link } from "react-router-dom";
const MovieDescriptionCard = ({ id, title, overview, navigateTo }) => {
  return (
    <>
      <div className="">
        <h1 className="text-white text-xl md:text-3xl font-medium md:font-bold md:mb-4 mb-2">
          {title}
        </h1>
        <p className="hidden md:inline-block text-white text-lg md:text-lg">
          {overview}
        </p>
        <Link to={navigateTo}>
          <button className="bg-red-600 md:px-4 md:py-2 px-2 py-1 text-center rounded md:text-md text-sm text-white md:mt-4 mt-0 hover:cursor-pointer">
            More Info
          </button>
        </Link>
      </div>
      ;
    </>
  );
};

export default MovieDescriptionCard;
