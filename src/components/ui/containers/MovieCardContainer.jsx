import MovieCard from "@ui/cards/MovieCard";

const MovieCardContainer = ({ title, movies }) => {
  if (!movies) return null;
  return (
    <>
      <div className="scroll-smooth">
        <div className="relative">
          {title && (
            <h2 className="md:text-2xl text-lg md:mt-4 mt-2 ml-4 md:ml-8 font-medium text-gray-200 z-14">
              {title}
            </h2>
          )}
          <div className="flex overflow-x-auto mt-4 md:mx-8 mx-2 space-x-2 md:space-x-4 no-scrollbar pb-2">
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
