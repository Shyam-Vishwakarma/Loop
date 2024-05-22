import MovieCardContainer from "../MovieCardContainer";
import PeopleCard from "../PeopleCard";

const SecondarySection = ({ secondaryDetails }) => {
  const { cast, genresArray, similar } = secondaryDetails;
  return (
    <>
      <div className="w-full bg-slate-950 px-2 py-2">
        <h2 className="text-gray-300 text-2xl ml-2">More details</h2>
        <div>
          <h3 className="text-gray-300 text-xl mt-4 ml-2">Cast</h3>
          <div className="w-full space-x-2 py-4 px-2 flex overflow-x-scroll scrollbar-hide">
            {cast.slice(0, 15).map((people) => (
              <PeopleCard key={people.id} people={people} />
            ))}
          </div>
        </div>
        <div className="-mt-4">
          <h3 className="text-gray-300 text-xl mt-4 ml-2">Genres</h3>
          <p>
            <span className="text-gray-400 ml-2">
              {genresArray?.join(", ")}
            </span>
          </p>
        </div>
        {similar.length !== 0 && (
          <div className="-ml-6">
            <h3 className="text-gray-300 text-xl mt-4 ml-8">Similar Movies</h3>
            <MovieCardContainer title={""} movies={similar} />
          </div>
        )}
      </div>
    </>
  );
};
export default SecondarySection;
