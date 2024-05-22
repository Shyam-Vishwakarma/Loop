import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import MovieDetails from "./MovieDetails";
const Body = () => {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browse", element: <Browse /> },
    { path: "/browse/:movieId", element: <MovieDetails /> },
  ]);

  return (
    <div className="scroll-smooth">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
