import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";

const ScrollToTopLayout = () => {
  const location = useLocation();
  const visitedRoutes = useRef(new Set());

  useEffect(() => {
    const path = location.pathname;

    if (!visitedRoutes.current.has(path)) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      visitedRoutes.current.add(path);
    }
  }, [location.pathname]);

  return <Outlet />;
};

export default ScrollToTopLayout;
