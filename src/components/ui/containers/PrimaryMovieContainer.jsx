import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../spinner/Spinner";
import YouTubePlayer from "@ui/cards/YouTubePlayer";

const PrimaryMovieContainer = () => {
  const trailerKey = useSelector((store) => store.movies.mainMovieTrailer);

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  if (!trailerKey) {
    return <Spinner />;
  }

  if (!nowPlayingMovies || !trailerKey) return null;
  const { title, overview, id } = nowPlayingMovies[0];

  return (
    <>
      <div className="w-[100%] flex justify-center">
        <iframe
          className="w-[100%] aspect-video md:-mt-24 mt-[3.35rem] border border-gray-950"
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; encrypted-media; gyroscope;"
        ></iframe>
      </div>
      <div className="absolute left-0 w-[10rem] md:w-[20rem] md:h-[100%] h-[14.48rem] bg-gradient-to-r from-black flex flex-col md:justify-center justify-end z-8 md:mt-0 mt-[3.35rem]">
        <div className="md:ml-[10%] ml-4 md:mb-0 mb-8">
          <h1 className="text-white text-md md:text-3xl font-medium md:font-bold md:mb-4 mb-2">
            {title}
          </h1>
          <p className="hidden md:inline-block text-white text-xs md:text-sm">
            {overview}
          </p>
          <Link to={`/browse/${id}`}>
            <button className="bg-red-600 md:px-4 md:py-2 px-2 py-1 text-center rounded md:text-sm text-xs text-white md:mt-4 mt-0">
              More Info
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PrimaryMovieContainer;
