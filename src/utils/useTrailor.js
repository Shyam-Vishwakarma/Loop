import { useDispatch, useSelector } from "react-redux";
import { TMDB_OPTIONS } from "./constants";
import { addMainMovieTrailer } from "./moviesSlice";
const useTrailor = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  if (!nowPlayingMovies) return;
  const id = nowPlayingMovies[0].id;
  const getTrailerKey = async () => {
    const videos = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      TMDB_OPTIONS
    );
    const videosJson = await videos.json();
    const trailer = videosJson.results.filter(
      (video) => video.type === "Trailer"
    );
    const key = trailer[0]?.key;
    dispatch(addMainMovieTrailer(key));
  };

  getTrailerKey();
};
export default useTrailor;
