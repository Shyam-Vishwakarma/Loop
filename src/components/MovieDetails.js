import { useParams } from "react-router-dom";
import useMovieDetails from "../utils/useMovieDetails";
import { useSelector } from "react-redux";
import Header from "./Header";
import PrimarySection from "./MovieDetails/PrimarySection";
import SecondarySection from "./MovieDetails/SecondarySection";
import YouTubePlayer from "./YouTubePlayer";

const MovieDetails = () => {
  const { movieId } = useParams();
  useMovieDetails(movieId);

  const movies = useSelector((store) => store.movieDetails.movies);
  const isMoviePresent = movies.hasOwnProperty(movieId);
  if (!isMoviePresent) return null;

  const basicDetails = movies[movieId]?.basicDetails || {};
  const cast = movies[movieId]?.cast || [];
  const topCasts = cast?.slice(0, 5).map((c) => c.name);
  const similar = movies[movieId]?.similar || [];

  function convertToHoursMinutes(runtime) {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${String(minutes).padStart(2, "0")}m`;
  }
  const { backdrop_path, genres, overview, status, runtime, title } =
    basicDetails;
  const genresArray = genres?.map((genre) => genre.name);
  const runtimeString = runtime ? convertToHoursMinutes(runtime) : null;
  const primaryDetails = {
    backdrop_path,
    title,
    status,
    overview,
    runtimeString,
    topCasts,
    genresArray,
  };
  const secondaryDetails = {
    cast,
    genresArray,
    similar,
  };
  return (
    <>
      <Header />
      {/* <YouTubePlayer videoId="dQw4w9WgXcQ" />  */}
      <PrimarySection primaryDetails={primaryDetails} />
      <SecondarySection secondaryDetails={secondaryDetails} />
    </>
  );
};
export default MovieDetails;
