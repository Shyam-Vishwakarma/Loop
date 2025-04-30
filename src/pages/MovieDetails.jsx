import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails } from "@slices/movieDetailsSlice";
import Header from "@common/Header";
import PrimarySection from "@features/movieDetails/PrimarySection";
import SecondarySection from "@features/movieDetails/SecondarySection";

const MovieDetails = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  // Access the loading and error states as well
  const {
    movies,
    loading: isLoading,
    error,
  } = useSelector((store) => store.movieDetails);

  useEffect(() => {
    // Dispatch the action to fetch movie details
    dispatch(fetchMovieDetails(movieId));

    // Set a timeout to handle potential loading state
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [dispatch, movieId]);

  // Display a loading state
  if (isLoading || (loading && !movies[movieId])) {
    return (
      <>
        <Header />
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-300"></div>
        </div>
      </>
    );
  }

  // Display an error state
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

  // Check if movie data is available
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

  // Extract movie data
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
      <PrimarySection primaryDetails={basicDetails} />
      <SecondarySection secondaryDetails={secondaryDetails} />
    </>
  );
};

export default MovieDetails;
