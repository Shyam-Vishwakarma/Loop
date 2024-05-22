import { useEffect } from "react";
import { TMDB_OPTIONS } from "./constants";
import { useDispatch, useSelector } from "react-redux";
import { addBasicDetails, addCasts, addSimilar } from "./MovieDetailsSlice";

const useMovieDetails = (movieId) => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movieDetails.movies);
  const isMoviePresent = movies.hasOwnProperty(movieId);
  useEffect(() => {
    if (isMoviePresent) return;

    const getBasicDetails = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        TMDB_OPTIONS
      );
      const basicDetails = await data.json();
      const {
        backdrop_path,
        genres,
        overview,
        status,
        tagline,
        title,
        runtime,
        vote_average,
        vote_count,
        original_language,
      } = basicDetails;
      dispatch(
        addBasicDetails({
          movieId,
          details: {
            backdrop_path,
            genres,
            runtime,
            overview,
            status,
            tagline,
            title,
            vote_average,
            vote_count,
            original_language,
          },
        })
      );
    };
    const getCredits = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
        TMDB_OPTIONS
      );
      const credits = await data.json();
      const { cast } = credits;
      dispatch(addCasts({ movieId, cast }));
    };
    const getSimilar = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/similar`,
        TMDB_OPTIONS
      );
      const similar = await data.json();
      dispatch(addSimilar({ movieId: movieId, similar: similar.results }));
    };
    getCredits();
    getBasicDetails();
    getSimilar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);
};
export default useMovieDetails;
