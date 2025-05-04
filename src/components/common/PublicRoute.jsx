import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import AuthService from "@services/authService";
import Spinner from "@ui/spinner/Spinner";

const PublicRoute = ({ children }) => {
  const [authChecked, setAuthChecked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = AuthService.subscribeToAuthChanges((user) => {
      setIsAuthenticated(!!user);
      setAuthChecked(true);
    });

    return () => unsubscribe();
  }, []);

  if (!authChecked) {
    return <Spinner />;
  }

  return isAuthenticated ? <Navigate to="/browse" replace /> : <>{children}</>;
};

export default PublicRoute;
