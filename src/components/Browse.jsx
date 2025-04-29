import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllMovies } from "../redux/slices/movieSlice";
import Header from "./Header";
import PrimaryMovieContainer from "./PrimaryMovieContainer";
import SecondaryMovieContainer from "./SecondoryMovieContainer";

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
