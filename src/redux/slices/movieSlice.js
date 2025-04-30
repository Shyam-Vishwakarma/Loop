import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as movieApi from "@services/movieService";

export const fetchNowPlayingMovies = createAsyncThunk(
  "movies/fetchNowPlaying",
  async (_, { rejectWithValue }) => {
    try {
      const response = await movieApi.fetchNowPlayingMovies();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchPopularMovies = createAsyncThunk(
  "movies/fetchPopular",
  async (_, { rejectWithValue }) => {
    try {
      const response = await movieApi.fetchPopularMovies();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchTopRatedMovies = createAsyncThunk(
  "movies/fetchTopRated",
  async (_, { rejectWithValue }) => {
    try {
      const response = await movieApi.fetchTopRatedMovies();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUpcomingMovies = createAsyncThunk(
  "movies/fetchUpcoming",
  async (_, { rejectWithValue }) => {
    try {
      const response = await movieApi.fetchUpcomingMovies();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchMovieTrailer = createAsyncThunk(
  "movies/fetchTrailer",
  async (movieId, { rejectWithValue }) => {
    try {
      const response = await movieApi.fetchMovieTrailer(movieId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchAllMovies = createAsyncThunk(
  "movies/fetchAll",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const [nowPlaying, popular, topRated, upcoming] = await Promise.all([
        movieApi.fetchNowPlayingMovies(),
        movieApi.fetchPopularMovies(),
        movieApi.fetchTopRatedMovies(),
        movieApi.fetchUpcomingMovies(),
      ]);

      return {
        nowPlayingMovies: nowPlaying.data,
        popularMovies: popular.data,
        topRatedMovies: topRated.data,
        upcomingMovies: upcoming.data,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    mainMovieTrailer: null,
    topRatedMovies: null,
    upcomingMovies: null,
    loading: {
      nowPlaying: false,
      popular: false,
      topRated: false,
      upcoming: false,
      trailer: false,
      all: false,
    },
    error: {
      nowPlaying: null,
      popular: null,
      topRated: null,
      upcoming: null,
      trailer: null,
      all: null,
    },
  },
  reducers: {
    clearErrors: (state) => {
      state.error = {
        nowPlaying: null,
        popular: null,
        topRated: null,
        upcoming: null,
        trailer: null,
        all: null,
      };
    },
    clearMovies: (state) => {
      state.nowPlayingMovies = null;
      state.popularMovies = null;
      state.mainMovieTrailer = null;
      state.topRatedMovies = null;
      state.upcomingMovies = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNowPlayingMovies.pending, (state) => {
        state.loading.nowPlaying = true;
        state.error.nowPlaying = null;
      })
      .addCase(fetchNowPlayingMovies.fulfilled, (state, action) => {
        state.loading.nowPlaying = false;
        state.nowPlayingMovies = action.payload;
      })
      .addCase(fetchNowPlayingMovies.rejected, (state, action) => {
        state.loading.nowPlaying = false;
        state.error.nowPlaying = action.payload;
      })
      .addCase(fetchPopularMovies.pending, (state) => {
        state.loading.popular = true;
        state.error.popular = null;
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.loading.popular = false;
        state.popularMovies = action.payload;
      })
      .addCase(fetchPopularMovies.rejected, (state, action) => {
        state.loading.popular = false;
        state.error.popular = action.payload;
      })
      .addCase(fetchTopRatedMovies.pending, (state) => {
        state.loading.topRated = true;
        state.error.topRated = null;
      })
      .addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
        state.loading.topRated = false;
        state.topRatedMovies = action.payload;
      })
      .addCase(fetchTopRatedMovies.rejected, (state, action) => {
        state.loading.topRated = false;
        state.error.topRated = action.payload;
      })
      .addCase(fetchUpcomingMovies.pending, (state) => {
        state.loading.upcoming = true;
        state.error.upcoming = null;
      })
      .addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
        state.loading.upcoming = false;
        state.upcomingMovies = action.payload;
      })
      .addCase(fetchUpcomingMovies.rejected, (state, action) => {
        state.loading.upcoming = false;
        state.error.upcoming = action.payload;
      })
      .addCase(fetchMovieTrailer.pending, (state) => {
        state.loading.trailer = true;
        state.error.trailer = null;
      })
      .addCase(fetchMovieTrailer.fulfilled, (state, action) => {
        state.loading.trailer = false;
        state.mainMovieTrailer = action.payload.trailerKey;
      })
      .addCase(fetchMovieTrailer.rejected, (state, action) => {
        state.loading.trailer = false;
        state.error.trailer = action.payload;
      })
      .addCase(fetchAllMovies.pending, (state) => {
        state.loading.all = true;
        state.error.all = null;
      })
      .addCase(fetchAllMovies.fulfilled, (state, action) => {
        state.loading.all = false;
        state.nowPlayingMovies = action.payload.nowPlayingMovies;
        state.popularMovies = action.payload.popularMovies;
        state.topRatedMovies = action.payload.topRatedMovies;
        state.upcomingMovies = action.payload.upcomingMovies;
      })
      .addCase(fetchAllMovies.rejected, (state, action) => {
        state.loading.all = false;
        state.error.all = action.payload;
      });
  },
});

export const { clearErrors, clearMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
