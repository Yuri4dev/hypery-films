<template>
  <main class="flex flex-col flex-1 w-1/2 py-7 px-4">
    <LoadingSpinner v-if="loading" />

    <div v-else>
      <NavHeader />
      <CarouselTrending />
      <MoviesList />
    </div>
  </main>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { computed, onMounted } from "@vue/runtime-core";
import NavHeader from "./NavHeader.vue";
import CarouselTrending from "./CarouselTrending.vue";
import MoviesList from "./MoviesList.vue";
import LoadingSpinner from "./LoadingSpinner.vue";
import { useStore } from "vuex";

const store = useStore();
const loading = computed(() => {
  return store.state.loading;
});

onMounted(async () => {
  await store.dispatch("getTrending", store.state.time_window);
  await store.dispatch("getMovies", {
    category: store.state.category,
    time_window: store.state.time_window,
    page: store.state.page,
  });
  store.commit("CHANGE_LOADING", false);
});
</script>

<style scoped></style>
