import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "@pages/Login";
import Browse from "@pages/Browse";
import MovieDetails from "@pages/MovieDetails";
import NotFound from "@pages/NotFound";
import ProtectedRoute from "@common/ProtectedRoute";
import PublicRoute from "./common/PublicRoute";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/login",
      element: (
        <PublicRoute>
          <Login />
        </PublicRoute>
      ),
    },
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "browse",
          element: <Browse />,
        },
        {
          path: "browse/:movieId",
          element: <MovieDetails />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <div className="scroll-smooth">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
