import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import AuthService from "@services/authService";
import { setUser } from "@slices/userSlice";
import Spinner from "../../ui/spinner/Spinner";

const AuthChecker = () => {
  const [authChecked, setAuthChecked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = AuthService.subscribeToAuthChanges((user) => {
      if (user) {
        setIsAuthenticated(true);
        dispatch(
          setUser({
            displayName: user.displayName,
            uid: user.uid,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
      } else {
        setIsAuthenticated(false);
      }
      setAuthChecked(true);
    });

    return () => unsubscribe();
  }, [dispatch]);

  if (!authChecked) {
    return <Spinner />;
  }

  return isAuthenticated ? (
    <Navigate to="/browse" replace />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default AuthChecker;
