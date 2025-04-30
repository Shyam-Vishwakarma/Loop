import { Link } from "react-router-dom";
import Header from "@common/Header";

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center h-screen bg-slate-950 text-white">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl mb-6">Page Not Found</p>
        <p className="text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/browse"
          className="px-4 py-2 bg-red-600 rounded hover:bg-red-700 transition duration-300"
        >
          Back to Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
