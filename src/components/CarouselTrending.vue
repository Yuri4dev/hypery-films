<template>
  <div class="flex items-center mb-4 ml-1 gap-5">
    <h1 class="text-2xl font-semibold mr-10">Os mais populares</h1>
  </div>

  <main class="relative">
    <section id="posters" class="flex gap-4 overflow-x-auto h-72 rounded-xl">
      <button class="prev absolute" @click.stop="prevPoster">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <div v-for="(poster, index) in posters" class="min-w-max" :key="index">
        <router-link to="/">
          <img
            :src="image + poster"
            class="w-auto h-72 snap-start rounded-xl"
          />
        </router-link>
      </div>

      <button class="next absolute" @click.stop="nextPoster">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </section>
  </main>
</template>

<script setup>
import { image } from "../services/api";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";

const store = useStore();

const posters = computed(() => {
  return store.state.trendings
    .map((trending) => trending.poster_path)
    .sort(() => Math.random() - 0.5);
});

const nextPoster = () => {
  const posters = document.getElementById("posters");
  posters.scrollBy({ left: 300, behavior: "smooth" });
};
const prevPoster = () => {
  const posters = document.getElementById("posters");
  posters.scrollBy({ left: -300, behavior: "smooth" });
};
</script>

<style scoped>
section {
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}
section::-webkit-scrollbar {
  display: none;
}
.prev {
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(20, 20, 20, 0.6),
    rgba(20, 20, 20, 0.2)
  );
}
.next {
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(20, 20, 20, 0.6),
    rgba(20, 20, 20, 0.2)
  );
}
.votes {
  transform: translate(25%, -50%);
}
</style>
