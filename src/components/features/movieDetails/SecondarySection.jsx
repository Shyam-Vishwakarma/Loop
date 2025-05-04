import MovieCardContainer from "@ui/containers/MovieCardContainer";
import PeopleCard from "@ui/cards/PeopleCard";

const SecondarySection = ({ secondaryDetails }) => {
  const { cast, genresArray, similar } = secondaryDetails;
  return (
    <>
      <div className="w-full bg-black px-2 py-2">
        <h2 className="text-gray-300 text-2xl ml-2">More details:</h2>
        <div className="mt-2">
          <h3 className="text-gray-300 text-xl mt-0 ml-2">Genres</h3>
          <p>
            <span className="text-gray-400 ml-2">
              {genresArray?.join(", ")}
            </span>
          </p>
        </div>
        <div>
          <h3 className="text-gray-300 text-xl mt-2 ml-2">Cast</h3>
          <div className="w-full space-x-2 py-4 px-2 ml-2 flex overflow-x-scroll no-scrollbar">
            {cast.slice(0, 15).map((people) => (
              <PeopleCard key={people.id} people={people} />
            ))}
          </div>
        </div>
        {similar.length !== 0 && (
          <div className="lg:-ml-6 md:-ml-6 sm:mr-8 md:-mr-8 -mr-2">
            <h3 className="text-gray-300 text-xl mt-2 sm:ml-2 ml-2 lg:ml-8 md:ml-8">
              Similar Movies
            </h3>
            <MovieCardContainer title={""} movies={similar} />
          </div>
        )}
      </div>
    </>
  );
};
export default SecondarySection;
