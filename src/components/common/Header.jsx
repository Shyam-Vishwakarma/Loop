import { useDispatch, useSelector } from "react-redux";
import { LOGO_URL } from "@utils/constants";
import { clearUser } from "@slices/userSlice";
import { useNavigate } from "react-router-dom";
import AuthService from "@services/authService";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    AuthService.logOut()
      .then(() => {
        dispatch(clearUser());
        navigate("/");
      })
      .catch((err) => {
        console.error("Sign out error:", err);
      });
  };

  const user = useSelector((store) => store.user);

  const navigateToHome = () => {
    user ? navigate("/browse") : navigate("/");
  };

  return (
    <div className="flex relative items-center justify-between md:py-8 bg-black md:bg-black w-full h-[3.32rem] md:px-24 px-4 z-10">
      <img
        className="ml-2 md:ml-6 w-[8rem] md:w-[10rem] z-10 cursor-pointer"
        src={LOGO_URL}
        alt="logo"
        onClick={navigateToHome}
      />
      {user && (
        <div className="flex mr-2 md:mr-6 justify-between items-center z-10">
          <p className="md:text-lg text-xs text-white">{user.displayName}</p>
          <button
            className="md:ml-4 ml-2 px-2 md:px-4 py-1 md:py-2 bg-slate-950 bg-opacity-40 border border-gray-400 rounded md:text-sm text-xs text-center items-center text-white md:font-medium font-normal md:shadow hover:bg-slate-900 hover:bg-opacity-50 hover:cursor-pointer"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
