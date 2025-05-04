import { TMDB_BACKDROP_URL } from "@utils/constants";
import MovieDetailsCard from "../../ui/cards/MovieDetailsCard";

const PrimarySection = ({ primaryDetails, topCasts }) => {
  const { backdrop_path, title, status, runtime, genresArray, overview } =
    primaryDetails;

  function convertToHoursMinutes(runtime) {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${String(minutes).padStart(2, "0")}m`;
  }

  const runtimeString = runtime ? convertToHoursMinutes(runtime) : null;
  return (
    <>
      <div
        className="w-full bg-black p-2
      h-[30vh] sm:h-[40vh] md:h-[55vh] lg:h-[90vh]
      "
      >
        <div className="w-full h-full relative">
          <img
            className="object-cover h-full w-full rounded-lg"
            alt={title}
            src={TMDB_BACKDROP_URL + backdrop_path}
          />
          <div
            className="top-0 h-full pl-8 sm:flex md:flex lg:flex flex-col justify-center lg:pt-40 z-0 bg-gradient-to-r from-black/90 to-transparent
          w-[15rem] sm:w-[25rem] md:w-[30rem] lg:w-[30rem]
          sm:absolute md:absolute lg:absolute
          hidden
          "
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
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col justify-center bg-black w-full
         px-4 lg:hidden sm:hidden md:hidden"
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
        />
      </div>
    </>
  );
};

export default PrimarySection;
