import { useState, useRef } from "react";
import Header from "@common/Header";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@slices/userSlice";
import { useNavigate } from "react-router-dom";
import AuthService from "@services/authService";
import { errorMessages } from "@utils/constants";

const Login = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const displayName = useRef();
  const email = useRef();
  const password = useRef();
  const errorBox = useRef();
  const [isLogIn, setIsLogIn] = useState(true);
  const [btnText, setBtnText] = useState("Sign In");
  const [errMessage, setErrMessage] = useState(null);

  const hideErrorBox = () => {
    errorBox.current.classList.add("hidden");
  };

  const toggleSignIn = () => {
    setIsLogIn(!isLogIn);
    hideErrorBox();
    if (isLogIn) setBtnText("Sign In");
    else setBtnText("Sign up");
  };

  const handleButtonClick = async () => {
    try {
      if (!isLogIn) {
        if (!displayName.current.value) {
          const error = new Error("Username is required for sign up.");
          error.code = "auth/missing-display-name";
          throw error;
        }
        setBtnText("Signing up...");
        const user = await AuthService.signUp(
          displayName.current.value,
          email.current.value,
          password.current.value
        );
        dispatch(
          setUser({
            displayName: user.displayName,
            uid: user.uid,
            email: user.email,
          })
        );
        navigate("/browse");
      } else {
        setBtnText("Signing in...");
        const user = await AuthService.signIn(
          email.current.value,
          password.current.value
        );
        dispatch(
          setUser({
            displayName: user.displayName,
            uid: user.uid,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
        navigate("/browse");
      }
    } catch (error) {
      if (isLogIn) setBtnText("Sign In");
      else setBtnText("Sign up");
      const errorMessage =
        errorMessages[error.code] || "An unexpected error occurred.";
      setErrMessage(errorMessage);
      errorBox.current.classList.remove("hidden");
    }
  };

  if (user) navigate("/browse");

  return (
    !user && (
      <>
        <Header />
        <style>
          {`input:-webkit-autofill,
              input:-webkit-autofill:hover,
              input:-webkit-autofill:focus,
              input:-webkit-autofill:active {
                -webkit-box-shadow: 0 0 0px 1000px #020617 inset !important;
                box-shadow: 0 0 0px 1000px #020617 inset !important;
                -webkit-text-fill-color: #e5e7eb !important;
                caret-color: #e5e7eb !important; /* Ensure cursor color is white */
              }`}
        </style>
        <div className=" bg-slate-950 w-full h-screen flex flex-col justify-center">
          <div
            ref={errorBox}
            className="hidden text-red-400  px-2 text-xs md:w-[20rem] w-[18rem] mx-auto left-0 bg-red-300 border border-red-500 bg-opacity-10 mb-[26rem] rounded flex justify-between"
          >
            <p className="py-[10px]">{errMessage}</p>
            <button className="mr-2" onClick={hideErrorBox}>
              x
            </button>
          </div>
          <form
            className="bg-gray-900 bg-opacity-60 border border-gray-300 p-6 z-20 absolute mx-auto right-0 left-0 md:w-[20rem] w-[17rem] flex flex-col rounded-md"
            onSubmit={(e) => e.preventDefault()}
          >
            <h2 className="text-gray-200 text-xl font-medium mb-2">
              {isLogIn ? "Sign In" : "Sign Up"}
            </h2>
            {!isLogIn && (
              <input
                ref={displayName}
                className="bg-slate-950 px-4 py-2 md:h-10 h-8 mt-4 md:text-sm text-xs rounded border border-gray-300 outline-none text-gray-300 focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-300"
                type="text"
                placeholder="Username"
              />
            )}
            <input
              ref={email}
              className="bg-slate-950 px-4 py-2 md:h-10 h-8 mt-4 md:text-sm text-xs  rounded border border-gray-300 outline-none text-gray-300 focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-300"
              type="email"
              placeholder="Email"
            />
            <input
              ref={password}
              className="bg-slate-950 px-4 py-2 md:h-10 h-8 mt-4 md:text-sm text-xs  rounded border border-gray-300 outline-none text-gray-300 focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-300"
              type="password"
              placeholder="Password"
            />
            <button
              className="md:py-2 py-1 px-5 me-2 w-full mt-4 text-gray-300 bg-gray-800 rounded border border-gray-300 hover:bg-gray-700 hover:text-gray-200"
              onClick={handleButtonClick}
            >
              {btnText}
            </button>
            <p className="mt-2 text-xs">
              <span className="text-gray-300 text-xs">
                {isLogIn ? "New to LOOP? " : "Already logged in? "}
              </span>
              <span
                className="text-blue-500 font-semibold hover:underline cursor-pointer"
                onClick={toggleSignIn}
              >
                {isLogIn ? "Sign up now." : "Sign in now."}
              </span>
            </p>
          </form>
        </div>
      </>
    )
  );
};

export default Login;
