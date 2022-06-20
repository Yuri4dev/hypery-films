import axios from "axios";

export const api_key = "60c2ab071c26547d0901accba8667ecf";
export const image = "https://image.tmdb.org/t/p/w500/";
const baseAPI = axios.create({
  baseURL: `https://api.themoviedb.org/3`,
});
baseAPI.interceptors.request.use((config) => {
  config.params = { ...config.params, api_key: api_key };
  return config;
});

export const getTrendingPreviewMovies = (date) => {
  return baseAPI.get(`/trending/all/${date}`);
};
export const getMovieBySearch = (id) => {
  return baseAPI.get(`/movie`);
};
export const getByCategoryMovies = (param) => {
  return baseAPI.get(
    `/trending/${param.category}/${param.time_window}?page=${param.page}`
  );
};
