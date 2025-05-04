import { useSelector } from "react-redux";
import Spinner from "../spinner/Spinner";
import YouTubePlayer from "@ui/cards/YouTubePlayer";
import MovieDescriptionCard from "@ui/cards/MovieDescriptionCard";

const PrimaryMovieContainer = ({ mainMovieIdx }) => {
  const trailerKey = useSelector((store) => store.movies.mainMovieTrailer);
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  const isLoading = useSelector((store) => store.movies.loading.trailer);

  if (isLoading || !nowPlayingMovies) {
    return <Spinner />;
  }

  const mainMovie = nowPlayingMovies[mainMovieIdx];
  if (!mainMovie || !trailerKey) return null;

  const { title, overview, id } = mainMovie;

  return (
    <>
      <div
        className="flex justify-center items-center min-w-full box-border relative
      
      h-[30vh] sm:h-[45vh] md:h-[65vh] lg:h-[85vh]

      px-2 sm:px-4 md:px-28 lg:px-28
      "
      >
        <div className="relative w-full h-full z-10 flex pointer-events-none">
          <YouTubePlayer
            videoId={trailerKey}
            autoplay={true}
            mute={true}
            showControls={false}
            className="w-full h-full object-cover block"
          />
        </div>
        <div
          className="absolute z-20 max-w-1/2 h-full sm:max-w-xl
          top-0 left-0
        pb-6 sm:pb-12 md:pb-34 lg:pb-28
        pl-6 sm:pl-10 md:pl-30 lg:pl-30
        bg-gradient-to-r from-black to-transparent
        flex flex-col
        justify-end
        "
        >
          <MovieDescriptionCard
            id={id}
            overview={overview}
            title={title}
            navigateTo={`/browse/${id}`}
          />
        </div>
      </div>
    </>
  );
};

export default PrimaryMovieContainer;
