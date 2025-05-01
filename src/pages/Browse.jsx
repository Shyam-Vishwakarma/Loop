import { useEffect } from "react";
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

  useEffect(() => {
    if (nowPlayingMovies) {
      dispatch(fetchMovieTrailer(nowPlayingMovies[2]?.id));
    }
  }, [dispatch, nowPlayingMovies]);

  return (
    <>
      <Header />
      <div className="relative flex flex-col w-full">
        <PrimaryMovieContainer />
        <div className="absolute top-180 left-0 w-full z-3">
          <SecondaryMovieContainer />
        </div>
      </div>
    </>
  );
};

export default Browse;
