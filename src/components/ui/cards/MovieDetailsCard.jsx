const MovieDetailsCard = ({ movie }) => {
  const { title, status, runtimeString, genresArray, topCasts, overview } =
    movie;
  return (
    <>
      <div className="w-full">
        <h1 className="text-white font-medium md:text-4xl text-3xl">{title}</h1>
        <p className="text-gray-300 lg:text-xl text-md">
          <span>{status} | </span>
          {runtimeString && <span>{runtimeString} | </span>}
          <span>{genresArray?.slice(0, 3).join(", ")}</span>
        </p>
        <p className="text-white lg:text-lg text-md mt-4">{overview}</p>
        <p className="text-white mt-4">
          <span className="text-gray-300">Starring:</span>{" "}
          {topCasts?.slice(0, 3).join(", ")}
        </p>
        <button className="text-gray-300 text-lg font-medium lg:mt-4 mt-2 cursor-pointer">
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
    </>
  );
};

export default MovieDetailsCard;
