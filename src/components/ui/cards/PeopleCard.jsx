import { TMDB_IMG_URL } from "@utils/constants";
import { useState } from "react";
import Shimmer from "@ui/shimmer/Shimmer";

const PeopleCard = ({ people }) => {
  const { character, name, profile_path } = people;
  const [imageLoaded, setImageLoaded] = useState(false);

  if (!profile_path) return null;
  return (
    <div className="w-[8.2rem] rounded-lg bg-black flex-shrink-0 text-gray-900 border border-gray-700">
      <div className="h-[8rem]">
        {!imageLoaded && <Shimmer className="w-full h-[8rem]" />}
        <img
          className="w-full h-[8rem] rounded-t-lg object-cover"
          alt={name}
          src={TMDB_IMG_URL + profile_path}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <h5 className="text-sm text-center text-gray-300 mt-1 font-medium px-2">
        {name}
      </h5>
      <h6 className="text-sm text-center text-gray-400 font-mono mb-2 px-2">
        {character}
      </h6>
    </div>
  );
};

export default PeopleCard;
