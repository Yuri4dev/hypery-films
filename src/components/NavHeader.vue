<template>
  <header>
    <nav class="flex justify-between gap-10">
      <SearchMovieInput />

      <ul class="flex gap-5 mr-40 mt-2">
        <li
          class="cursor-pointer text-sm"
          :class="[categoryName === 'Todos' ? '' : 'text-gray-600']"
          @click="updateMovieListByCategory"
        >
          Todos
        </li>
        <li
          class="cursor-pointer text-sm"
          :class="[categoryName === 'Filmes' ? '' : 'text-gray-600']"
          @click="updateMovieListByCategory"
        >
          Filmes
        </li>
        <li
          class="cursor-pointer text-sm"
          :class="[categoryName === 'Séries' ? '' : 'text-gray-600']"
          @click="updateMovieListByCategory"
        >
          Séries
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import SearchMovieInput from "./SearchMovieInput.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

const store = useStore();
const router = useRouter();
const categoryName = ref("Todos");

onMounted(() => {
  router.push({ query: {} });
});

const updateMovieListByCategory = (event) => {
  categoryName.value = event.target.innerText;
  const category = {
    Todos: "all",
    Filmes: "movie",
    Séries: "tv",
  };
  store.dispatch("getMovies", category[categoryName.value]);
};
</script>

<style scoped></style>
