<template>
  <div class="flex gap-10 mt-10 ml-1 pl-10 mb-4">
    <h1 class="text-2xl font-semibold">Tendências</h1>
    <ul class="flex items-center mt-2 gap-5">
      <li
        class="text-sm cursor-pointer"
        :class="[timeWindowName === 'Hoje' ? '' : 'text-gray-600']"
        @click="updateMovieListByTimeWindow"
      >
        Hoje
      </li>
      <li
        class="text-sm cursor-pointer"
        :class="[timeWindowName === 'Nesta semana' ? '' : 'text-gray-600']"
        @click="updateMovieListByTimeWindow"
      >
        Nesta semana
      </li>
    </ul>
  </div>

  <section
    class="gap-5 px-10 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 h-auto w-full rounded-xl mt-2"
  >
    <div v-for="movie in moviesList" class="w-40 h-56" :key="movie.id">
      <router-link to="/">
        <img
          :src="image + movie.poster_path"
          class="w-full h-full rounded-xl"
        />
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import { image } from "../services/api";
import { useStore } from "vuex";

const store = useStore();
const timeWindowName = ref("Hoje");

const moviesList = computed(() => {
  return store.state.movies;
});
const updateMovieListByTimeWindow = async (event) => {
  timeWindowName.value = event.target.innerText;
  const timeWindow = {
    Hoje: "day",
    "Nesta semana": "week",
  };
  store.commit("CHANGE_TIME_WINDOW", timeWindow[timeWindowName.value]);
  await store.dispatch("getMovies", {
    category: store.state.category,
    time_window: store.state.time_window,
    page: store.state.page,
  });
};

const addPage = async () => {
  await store.dispatch("getMovies", {
    category: store.state.category,
    time_window: store.state.time_window,
    page: store.state.page++,
  });
};
</script>

<style scoped></style>
