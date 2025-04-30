import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllMovies } from "@slices/movieSlice";
import Header from "@common/Header";
import PrimaryMovieContainer from "@ui/containers/PrimaryMovieContainer";
import SecondaryMovieContainer from "@ui/containers/SecondoryMovieContainer";

const Browse = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllMovies());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="flex flex-col w-full">
        <PrimaryMovieContainer />
        <SecondaryMovieContainer />
      </div>
    </>
  );
};

export default Browse;
