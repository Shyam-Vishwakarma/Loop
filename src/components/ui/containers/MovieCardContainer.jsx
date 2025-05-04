import MovieCard from "@ui/cards/MovieCard";

const MovieCardContainer = ({ title, movies }) => {
  if (!movies) return null;
  return (
    <>
      <div className="scroll-smooth">
        <div className="relative">
          {title && (
            <h2 className="md:text-2xl text-xl md:mt-4 mt-3 ml-4 md:ml-8 font-medium text-gray-200 z-14">
              {title}
            </h2>
          )}
          <div className="flex flex-wrap gap-x-8 gap-y-4 md:flex-nowrap md:space-x-4 mt-4 md:mx-8 mx-4 pb-2 overflow-x-auto no-scrollbar">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCardContainer;
