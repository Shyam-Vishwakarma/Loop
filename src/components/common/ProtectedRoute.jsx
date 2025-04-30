import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AuthService from "@services/authService";

const ProtectedRoute = () => {
  const [isChecking, setIsChecking] = useState(true);
  const user = useSelector((store) => store.user);

  useEffect(() => {
    if (!user) {
      const unsubscribe = AuthService.subscribeToAuthChanges(() => {
        setIsChecking(false);
      });

      return () => unsubscribe();
    } else {
      setIsChecking(false);
    }
  }, [user]);

  if (isChecking) {
    return (
      <div className="flex justify-center items-center h-screen bg-slate-950">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-300"></div>
      </div>
    );
  }

  return user ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
