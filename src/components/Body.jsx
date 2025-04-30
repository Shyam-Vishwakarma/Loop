import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "@pages/Login";
import Browse from "@pages/Browse";
import MovieDetails from "@pages/MovieDetails";
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
