import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

const ScrollToTopLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return <Outlet />;
};

export default ScrollToTopLayout;
