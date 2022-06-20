import { createStore } from "vuex";
import {
  getTrendingPreviewMovies,
  getByCategoryMovies,
  getMovieBySearch,
} from "../services/api";

export const store = createStore({
  state() {
    return {
      trendings: [],
      movies: [],
      category: "day",
      loading: true,
      time_window: "day",
      page: 1,
    };
  },
  getters: {},
  mutations: {
    SET_MOVIES_TRENDING: (state, payload) => {
      state.trendings = payload;
    },
    SET_MOVIES: (state, payload) => {
      state.movies = payload;
    },
    CHANGE_CATEGORY: (state, payload) => {
      state.category = payload;
    },
    CHANGE_LOADING: (state, payload) => {
      state.loading = payload;
    },
    CHANGE_TIME_WINDOW: (state, payload) => {
      state.time_window = payload;
    },
  },
  actions: {
    async getTrending(context, payload) {
      const response = await getTrendingPreviewMovies(payload);
      context.commit("SET_MOVIES_TRENDING", response.data.results);
      return response.data.results;
    },
    async getMovies(context, payload) {
      const response = await getByCategoryMovies(payload);
      context.commit("SET_MOVIES", response.data.results);
      return response.data.results;
    },
    async getMoviesBySearch(context, payload) {
      const response = await getMovieBySearch(payload);
      context.commit("SET_MOVIES", response.data.results);
      return response.data.results;
    },
  },
});
