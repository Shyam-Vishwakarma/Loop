import { useSelector } from "react-redux";
import MovieCardContainer from "@ui/containers/MovieCardContainer";

const SecondaryMovieContainer = () => {
  const movies = useSelector((store) => store.movies);
  const { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } =
    movies;
  return (
    <>
      <div className="bg-black py-0 md:py-2 px-2 md:px-[6rem]">
        <div className="container mx-auto">
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
