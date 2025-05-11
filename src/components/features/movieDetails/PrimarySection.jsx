import { TMDB_BACKDROP_URL } from "@utils/constants";
import MovieDetailsCard from "../../ui/cards/MovieDetailsCard";
import { useState } from "react";
import Shimmer from "../../ui/shimmer/Shimmer";
import TrailerPlayer from "./TrailerPlayer";

const PrimarySection = ({ primaryDetails, topCasts }) => {
  const {
    backdrop_path,
    title,
    status,
    runtime,
    genresArray,
    overview,
    trailerKey,
  } = primaryDetails;

  const [imageLoaded, setImageLoaded] = useState(false);
  const [isTrailerPlaying, setisTrailerPlaying] = useState(false);

  const handlePlayTrailer = () => {
    setisTrailerPlaying(true);
  };

  const handlePlayTrailerSm = () => {
    setisTrailerPlaying(!isTrailerPlaying);
  };

  const handleCloseTrailer = () => {
    setisTrailerPlaying(false);
  };

  function convertToHoursMinutes(runtime) {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${String(minutes).padStart(2, "0")}m`;
  }

  const runtimeString = runtime ? convertToHoursMinutes(runtime) : null;

  return (
    <>
      <div className="w-full bg-black p-2 h-[30vh] sm:h-[40vh] md:h-[55vh] lg:h-[90vh]">
        {isTrailerPlaying && trailerKey ? (
          <TrailerPlayer
            trailerKey={trailerKey}
            isOpen={isTrailerPlaying}
            onClose={handleCloseTrailer}
          />
        ) : (
          <div className="w-full h-full relative">
            {!imageLoaded && <Shimmer className="w-full h-full" />}
            {backdrop_path && (
              <img
                className={`object-cover h-full w-full rounded-lg ${imageLoaded ? "" : "hidden"}`}
                alt={title}
                src={TMDB_BACKDROP_URL + backdrop_path}
                onLoad={() => setImageLoaded(true)}
              />
            )}
            {!backdrop_path && imageLoaded && (
              <div className="w-full h-full flex items-center justify-center text-gray-500 text-xl rounded-lg bg-gray-900">
                No Backdrop Available
              </div>
            )}
            <div
              className="top-0 h-full pl-8 sm:flex md:flex lg:flex flex-col justify-center lg:pt-40 z-0 bg-gradient-to-r from-black/90 to-transparent
              w-[15rem] sm:w-[25rem] md:w-[30rem] lg:w-[30rem]
              sm:absolute md:absolute lg:absolute
              hidden"
            >
              <div className="lg:mt-[10rem] md:mt-[10rem] sm:mt-[4rem]">
                <MovieDetailsCard
                  movie={{
                    title,
                    status,
                    runtimeString,
                    overview,
                    genresArray,
                    topCasts,
                  }}
                  onPlayTrailer={handlePlayTrailer}
                  isPlaying={isTrailerPlaying}
                />
              </div>
            </div>
          </div>
        )}
      </div>
      // Mobile View
      <div
        className="flex flex-col justify-center bg-black w-full
         px-4 lg:hidden sm:hidden md:hidden mb-2 border-b-2 border-gray-800 pb-4 rounded"
      >
        <MovieDetailsCard
          movie={{
            title,
            status,
            runtimeString,
            overview,
            genresArray,
            topCasts,
          }}
          onPlayTrailer={handlePlayTrailerSm}
          isPlaying={isTrailerPlaying}
        />
      </div>
    </>
  );
};

export default PrimarySection;
