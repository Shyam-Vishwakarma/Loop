import { useState, useRef } from "react";
import { BG_IMG_URL } from "../utils/constants";
import Header from "./Header";
import { validateData } from "../utils/validation";

const Login = () => {
  const [isLogIn, setIsLogIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const toggleSignIn = () => {
    setIsLogIn(!isLogIn);
  };
  const email = useRef();
  const password = useRef();
  const handleButtonClick = () => {
    // Validity
    const message = validateData(email.current.value, password.current.value);
    setErrorMessage(message);

    // Authentication
  };
  return (
    <>
      <Header />
      <img className="absolute" src={BG_IMG_URL} alt="background" />

      <form
        className="bg-black bg-opacity-80 p-6 z-20 absolute mx-auto mt-[10rem] right-0 left-0 w-3/12 flex flex-col"
        onSubmit={(e) => e.preventDefault()}
      >
        <h2 className="text-white text-2xl font-medium mb-4">
          {isLogIn ? "Sign In" : "Sign Up"}
        </h2>
        {!isLogIn && (
          <input
            className="bg-black bg-opacity-10 px-4 py-2 h-12 mt-4 rounded border-[1px] border-white text-white"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="bg-black bg-opacity-10 px-4 py-2 h-12 mt-4 rounded border-[1px] border-white text-white"
          type="text"
          placeholder="Email"
        />
        <input
          ref={password}
          className="bg-black bg-opacity-10 px-4 py-2 h-12 mt-4 rounded border-[1px] border-white text-white"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-500 mt-2">{errorMessage}</p>
        <button
          className="bg-red-600 text-white rounded h-10 mt-6"
          onClick={handleButtonClick}
        >
          {isLogIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="mt-2 text-sm">
          <span className="text-gray-300">
            {isLogIn ? "New to Netflix? " : "Already logged in? "}
          </span>
          <span
            className="text-white font-semibold hover:underline cursor-pointer"
            onClick={toggleSignIn}
          >
            {isLogIn ? "Sign up now." : "Sign in now."}
          </span>
        </p>
      </form>
    </>
  );
};
export default Login;
