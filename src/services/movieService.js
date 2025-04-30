import axios from "axios";
import { BACKEND_URL } from "@utils/constants";
const api = axios.create({ baseURL: BACKEND_URL });

export const fetchNowPlayingMovies = () => api.get("/movies/now_playing");

export const fetchPopularMovies = () => api.get("/movies/popular");

export const fetchTopRatedMovies = () => api.get("/movies/top_rated");

export const fetchUpcomingMovies = () => api.get("/movies/upcoming");

export const fetchMovieTrailer = (movieId) =>
  api.get(`/movie/${movieId}/trailerkey`);

export const fetchMovieDetails = (movieId) => api.get(`/movie/${movieId}`);

export const fetchMovieCredits = (movieId) =>
  api.get(`/movie/${movieId}/credits`);

export const fetchSimilarMovies = (movieId) =>
  api.get(`/movie/${movieId}/similar`);
