import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMovies, fetchMovieTrailer } from "@slices/movieSlice";
import Header from "@common/Header";
import PrimaryMovieContainer from "@ui/containers/PrimaryMovieContainer";
import SecondaryMovieContainer from "@ui/containers/SecondoryMovieContainer";

const Browse = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  useEffect(() => {
    dispatch(fetchAllMovies());
  }, [dispatch]);

  const getRandomMovie = useCallback(() => {
    if (!nowPlayingMovies?.length) return { randomIdx: 0, movieId: null };
    const randomIdx = Math.floor(Math.random() * nowPlayingMovies.length);
    const movieId = nowPlayingMovies[randomIdx]?.id;
    return { randomIdx, movieId };
  }, [nowPlayingMovies]);

  const { randomIdx, movieId: mainMovieId } = getRandomMovie();

  useEffect(() => {
    if (mainMovieId) {
      dispatch(fetchMovieTrailer(mainMovieId));
    }
  }, [dispatch, mainMovieId]);

  return (
    <>
      <Header />
      <div className="flex flex-col items-center w-full bg-black min-h-screen">
        <PrimaryMovieContainer mainMovieIdx={randomIdx} />
        <div className="w-full">
          <SecondaryMovieContainer />
        </div>
      </div>
    </>
  );
};

export default Browse;
