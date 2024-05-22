import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "Movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    mainMovieTrailer: null,
    topRatedMovies: null,
    upcomingMovies: null,
  },

  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addMainMovieTrailer: (state, action) => {
      state.mainMovieTrailer = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
  },
});
export const {
  addNowPlayingMovies,
  addMainMovieTrailer,
  addTopRatedMovies,
  addPopularMovies,
  addUpcomingMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
