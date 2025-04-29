import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userReducer.js";
import moviesReducer from "./slices/movieSlice.js";
import movieDetailsReducer from "./slices/movieDetailsSlice.js";

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    movieDetails: movieDetailsReducer,
  },
});

export default store;
