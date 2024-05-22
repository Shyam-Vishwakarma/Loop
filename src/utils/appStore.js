import userReducer from "./userSlice";
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import MovieDetailsReducer from "./MovieDetailsSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    movieDetails: MovieDetailsReducer,
  },
});
export default appStore;
