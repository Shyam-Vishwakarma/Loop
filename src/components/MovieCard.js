import { TMDB_IMG_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const MovieCard = ({ movie }) => {
  const { poster_path, id, title } = movie;
  if (!poster_path) return null;
  return (
    <div className="md:w-32 w-24 flex-shrink-0">
      <Link to={`/browse/${id}`}>
        <img
          src={TMDB_IMG_URL + poster_path}
          alt={title}
          className="w-full h-auto rounded"
        />
      </Link>
      <p className="text-gray-300 md:text-sm text-xs md:mt-2 mt-1">{title}</p>
    </div>
  );
};
export default MovieCard;
