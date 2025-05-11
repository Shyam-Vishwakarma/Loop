import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails } from "@slices/movieDetailsSlice";
import Header from "@common/Header";
import PrimarySection from "@features/movieDetails/PrimarySection";
import SecondarySection from "@features/movieDetails/SecondarySection";
import Spinner from "../components/ui/spinner/Spinner";

const MovieDetails = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const {
    movies,
    loading: isLoading,
    error,
  } = useSelector((store) => store.movieDetails);

  useEffect(() => {
    dispatch(fetchMovieDetails(movieId));

    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [dispatch, movieId]);

  if (isLoading || (loading && !movies[movieId])) {
    return (
      <>
        <Header />
        <Spinner />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <div className="flex justify-center items-center h-screen">
          <div className="text-red-500">Error: {error}</div>
        </div>
      </>
    );
  }

  const isMoviePresent = movies && movies[movieId];
  if (!isMoviePresent) {
    return (
      <>
        <Header />
        <div className="flex justify-center items-center h-screen">
          <div className="text-white">No movie details found</div>
        </div>
      </>
    );
  }

  const basicDetails = movies[movieId]?.details || {};
  const cast = movies[movieId]?.credits?.cast || [];
  const topCasts = cast?.slice(0, 5).map((c) => c.name);
  const similar = movies[movieId]?.similar || [];

  const { genres } = basicDetails;
  const genresArray = genres?.map((genre) => genre.name);
  const secondaryDetails = {
    cast,
    genresArray,
    similar,
  };

  return (
    <>
      <Header />
      <div className="w-full h-full bg-black lg:px-[6rem] px-2">
        <PrimarySection primaryDetails={basicDetails} topCasts={topCasts} />
        <SecondarySection secondaryDetails={secondaryDetails} />
      </div>
    </>
  );
};

export default MovieDetails;
