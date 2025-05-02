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
      dispatch(fetchMovieTrailer(nowPlayingMovies[0]?.id));
    }
  }, [dispatch, nowPlayingMovies]);

  return (
    <>
      <Header />
      <div className="relative flex flex-col items-center w-full bg-black h-screen">
        <PrimaryMovieContainer />
        <div className="absolute md:top-180 top-[12rem] left-0 w-full z-3 ">
          <SecondaryMovieContainer />
        </div>
      </div>
    </>
  );
};

export default Browse;
