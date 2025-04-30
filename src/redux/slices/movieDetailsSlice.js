import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as movieService from "@services/movieService";

export const fetchMovieDetails = createAsyncThunk(
  "movieDetails/fetchMovieDetails",
  async (movieId, { rejectWithValue }) => {
    try {
      const [details, credits, similar] = await Promise.all([
        movieService.fetchMovieDetails(movieId),
        movieService.fetchMovieCredits(movieId),
        movieService.fetchSimilarMovies(movieId),
      ]);
      return {
        movieId,
        details: details.data,
        credits: credits.data,
        similar: similar.data.results,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    movies: {},
    loading: false,
    error: null,
  },
  reducers: {
    setMovieDetails: (state, action) => {
      const { movieId, movieDetails } = action.payload;
      state.movies[movieId] = movieDetails;
    },
    clearMovieDetails: (state, action) => {
      const movieId = action.payload;
      delete state.movies[movieId];
    },
    clearAllMovieDetails: (state) => {
      state.movies = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        const { movieId, details, credits, similar } = action.payload;
        state.loading = false;
        state.error = null;
        state.movies[movieId] = {
          details,
          credits,
          similar,
        };
      })
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch movie details";
      });
  },
});

export const { setMovieDetails, clearMovieDetails, clearAllMovieDetails } =
  movieDetailsSlice.actions;

export default movieDetailsSlice.reducer;
