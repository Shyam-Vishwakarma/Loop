import { useDispatch } from "react-redux";
import { TMDB_OPTIONS } from "./constants";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "./moviesSlice";
import { useEffect } from "react";
import useTrailor from "./useTrailor";

const useMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getNowPlayingMovies = async () => {
      const NowPlaying = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&include_adult=false",
        TMDB_OPTIONS
      );
      const NowPlayingJson = await NowPlaying.json();
      dispatch(addNowPlayingMovies(NowPlayingJson.results));
    };

    const getPopularMovies = async () => {
      const Popular = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        TMDB_OPTIONS
      );
      const PopularJson = await Popular.json();
      dispatch(addPopularMovies(PopularJson.results));
    };
    const getTopRatedMovies = async () => {
      const topRatedMovie = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        TMDB_OPTIONS
      );
      const topRatedMovieJson = await topRatedMovie.json();
      dispatch(addTopRatedMovies(topRatedMovieJson.results));
    };
    const getUpcomingdMovies = async () => {
      const upcomingMovies = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        TMDB_OPTIONS
      );
      const upcomingMoviesJson = await upcomingMovies.json();
      dispatch(addUpcomingMovies(upcomingMoviesJson.results));
    };
    getNowPlayingMovies();
    getPopularMovies();
    getTopRatedMovies();
    getUpcomingdMovies();
  }, [dispatch]);
  useTrailor();
};

export default useMovies;
