import { createSlice } from "@reduxjs/toolkit";

const MovieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    movies: {},
  },
  reducers: {
    addBasicDetails: (state, action) => {
      const { movieId, details } = action.payload;
      if (!state.movies[movieId]) {
        state.movies[movieId] = {};
      }
      state.movies[movieId].basicDetails = details;
    },
    addCasts: (state, action) => {
      const { movieId, cast } = action.payload;
      if (!state.movies[movieId]) {
        state.movies[movieId] = {};
      }
      state.movies[movieId].cast = cast;
    },
    addSimilar: (state, action) => {
      const { movieId, similar } = action.payload;
      if (!state.movies[movieId]) {
        state.movies[movieId] = {};
      }
      state.movies[movieId].similar = similar;
    },
  },
});
export const { addBasicDetails, addCasts, addSimilar } =
  MovieDetailsSlice.actions;
export default MovieDetailsSlice.reducer;
