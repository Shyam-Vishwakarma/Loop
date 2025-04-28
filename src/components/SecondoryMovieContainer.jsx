import { useSelector } from "react-redux";
import MovieCardContainer from "./MovieCardContainer";

const SecondaryMovieContainer = () => {
  const movies = useSelector((store) => store.movies);
  const { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } =
    movies;
  return (
    <>
      <div className="bg-slate-950">
        <div className="md:-mt-[9rem]">
          <MovieCardContainer title={"Now Playing"} movies={nowPlayingMovies} />
          <MovieCardContainer title={"Upcoming"} movies={upcomingMovies} />
          <MovieCardContainer title={"Popular"} movies={popularMovies} />
          <MovieCardContainer title={"Top Rated"} movies={topRatedMovies} />
        </div>
      </div>
    </>
  );
};
export default SecondaryMovieContainer;
