import { TMDB_IMG_URL } from "@utils/constants";
import { Link } from "react-router-dom";
import { useState } from "react";
import Shimmer from "@ui/shimmer/Shimmer";

const MovieCard = ({ movie }) => {
  const { poster_path, id, title } = movie;
  const [imageLoaded, setImageLoaded] = useState(false);

  if (!poster_path) return null;

  return (
    <div className="w-[45%] md:w-32 flex-shrink-0">
      <Link to={`/browse/${id}`}>
        <div className="relative">
          {!imageLoaded && <Shimmer className="w-full aspect-[2/3] rounded" />}
          <img
            src={TMDB_IMG_URL + poster_path}
            alt={title}
            className={`w-full h-auto rounded object-cover ${
              !imageLoaded ? "hidden" : ""
            }`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      </Link>
      <p className="text-gray-300 text-lg md:text-sm md:mt-2 mt-2 truncate">
        {title}
      </p>
    </div>
  );
};

export default MovieCard;
