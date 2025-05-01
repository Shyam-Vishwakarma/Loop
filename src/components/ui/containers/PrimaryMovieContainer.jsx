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
  const { title, overview, id } = nowPlayingMovies[2];

  return (
    <>
      <div className="flex justify-center items-center w-full h-200 pointer-events-none">
        <YouTubePlayer
          videoId={trailerKey}
          autoplay={true}
          mute={true}
          showControls={false}
          className=""
        />
      </div>
      <div className="absolute left-0 w-[10rem] md:w-[30rem] md:h-200 h-[14.48rem] bg-gradient-to-r from-black flex flex-col md:justify-end justify-end z-2 md:mt-0 mt-[3.35rem]">
        <div className="md:ml-38 ml-4 md:mb-32 mb-8">
          <h1 className="text-white text-md md:text-3xl font-medium md:font-bold md:mb-4 mb-2">
            {title}
          </h1>
          <p className="hidden md:inline-block text-white text-xs md:text-sm">
            {overview}
          </p>
          <Link to={`/browse/${id}`}>
            <button className="bg-red-600 md:px-4 md:py-2 px-2 py-1 text-center rounded md:text-sm text-xs text-white md:mt-4 mt-0 hover:cursor-pointer">
              More Info
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PrimaryMovieContainer;
