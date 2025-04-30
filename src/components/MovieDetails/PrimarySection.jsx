import { TMDB_BACKDROP_URL } from "@utils/constants";

const PrimarySection = ({ primaryDetails }) => {
  const {
    backdrop_path,
    title,
    status,
    runtime,
    topCasts,
    genresArray,
    overview,
  } = primaryDetails;

  function convertToHoursMinutes(runtime) {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${String(minutes).padStart(2, "0")}m`;
  }

  const runtimeString = runtime ? convertToHoursMinutes(runtime) : null;
  return (
    <>
      {" "}
      <div className="relative">
        <img
          className="w-screen h-screen absolute"
          alt={title}
          src={TMDB_BACKDROP_URL + backdrop_path}
        />
        <div className="absolute w-1/2 h-screen bg-gradient-to-r from-slate-950 z-5"></div>
        <div
          className="absolute w-1/2 h-screen bg-gradient-to-r from-slate-950 z-12 flex flex-col
    justify-center px-8"
        >
          <div className="w-[24rem] mt-[10rem]">
            <h1 className="text-white font-medium text-2xl">{title}</h1>
            <p className="text-gray-400 text-sm">
              <span>{status} | </span>
              {runtimeString && <span>{runtimeString} | </span>}
              <span>{genresArray?.slice(0, 3).join(", ")}</span>
            </p>
            <p className="text-white text-sm mt-4">{overview}</p>
            <p className="text-white text-sm mt-4">
              <span className="text-gray-400 text-sm ">Starring:</span>{" "}
              {topCasts?.join(", ")}
            </p>
            <button className="text-gray-300 text-xs font-medium mt-4">
              <span>
                <img
                  className="w-4 inline-block mr-1"
                  alt="play"
                  src="https://i.postimg.cc/m2w9qgj4/icons8-play-50.png"
                />
              </span>
              Play Trailer
            </button>
          </div>
        </div>
        <div className="h-screen"></div>
      </div>
    </>
  );
};

export default PrimarySection;
