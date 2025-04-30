import { useDispatch, useSelector } from "react-redux";
import { LOGO_URL, SEARCH_PLACEHOLDER } from "@utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@utils/firebase";
import { useEffect } from "react";
import { setUser, clearUser } from "@slices/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(clearUser());
        navigate("/");
      })
      .catch((err) => {});
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, uid, photoURL, email } = user;
        dispatch(
          setUser({
            displayName: displayName,
            uid: uid,
            photoURL: photoURL,
            email: email,
          })
        );
        // navigate("/browse");
      } else {
        // User is signed out
        dispatch(clearUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const user = useSelector((store) => store.user);

  const navigateToHome = () => {
    user ? navigate("/browse") : navigate("/");
  };
  return (
    <div className="flex absolute items-center justify-between md:py-8 bg-black md:bg-transparent w-full h-[3.32rem]">
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
            className="md:ml-4 ml-2 px-2 md:px-4 py-1 md:py-2 bg-slate-950 bg-opacity-40 border border-gray-400 rounded md:text-sm text-xs text-center items-center text-white md:font-medium font-normal md:shadow "
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
