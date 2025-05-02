import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../spinner/Spinner";
import YouTubePlayer from "@ui/cards/YouTubePlayer";
import MovieDescriptionCard from "@ui/cards/MovieDescriptionCard";

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
      <div className="flex justify-center items-center md:w-[92rem] w-[24rem] md:h-[52rem] h-[20rem] md:mt-[-2rem] mt-[-4rem] border-2 relative">
        <div className="bg-gradient-to-r from-black w-[25rem] absolute left-0 h-full flex flex-col justify-end  z-2 pb-[4rem] md:pb-[8rem] pl-[0rem] md:pl-[2rem]">
          <MovieDescriptionCard
            id={id}
            overview={overview}
            title={title}
            navigateTo={`/browse/${id}`}
          />
        </div>
        <div className="w-full h-full pointer-events-none">
          <YouTubePlayer
            videoId={trailerKey}
            autoplay={true}
            mute={true}
            showControls={false}
          />
        </div>
      </div>
    </>
  );
};

export default PrimaryMovieContainer;
