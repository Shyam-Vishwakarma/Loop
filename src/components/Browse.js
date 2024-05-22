import useMovies from "../utils/useMovies";
import Header from "./Header";
import PrimaryMovieContainer from "./PrimaryMovieContainer";
import SecondaryMovieContainer from "./SecondoryMovieContainer";

const Browse = () => {
  useMovies();
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
