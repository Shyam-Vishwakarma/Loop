import { TMDB_IMG_URL } from "@utils/constants";
import { Link } from "react-router-dom";
import { useState } from "react";
import Shimmer from "@ui/shimmer/Shimmer";

const MovieCard = ({ movie }) => {
  const { poster_path, id, title } = movie;
  const [imageLoaded, setImageLoaded] = useState(false);

  if (!poster_path) return null;

  return (
    <div className="md:w-32 w-24 flex-shrink-0">
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
      <p className="text-gray-300 md:text-sm text-xs md:mt-2 mt-1 truncate">
        {title}
      </p>
    </div>
  );
};

export default MovieCard;
