import Button from "@ui/common/Button";
import React from "react";
import { Play } from "lucide-react";
import { Pause } from "lucide-react";

const MovieDetailsCard = ({ movie, onPlayTrailer, isPlaying }) => {
  const { title, status, runtimeString, genresArray, topCasts, overview } =
    movie;
  return (
    <>
      <div className="w-full">
        <h1 className="text-white font-medium md:text-4xl text-2xl">{title}</h1>
        <p className="text-gray-300 lg:text-xl text-sm">
          <span>{status} | </span>
          {runtimeString && <span>{runtimeString} | </span>}
          <span>{genresArray?.slice(0, 3).join(", ")}</span>
        </p>
        <p className="text-white lg:text-lg text-sm mt-4">{overview}</p>
        <p className="text-white mt-4 lg:text-lg text-sm">
          <span className="text-gray-300">Starring:</span>{" "}
          {topCasts?.slice(0, 3).join(", ")}
        </p>
        <Button onClick={onPlayTrailer} className="mt-4 lg:inline-block">
          {isPlaying ? (
            <>
              <Pause className="w-5 h-5 mr-2 inline fill-current" />
              Pause Trailer
            </>
          ) : (
            <>
              <Play className="w-5 h-5 mr-2 inline fill-current" />
              Play Trailer
            </>
          )}
        </Button>
      </div>
    </>
  );
};

export default MovieDetailsCard;
