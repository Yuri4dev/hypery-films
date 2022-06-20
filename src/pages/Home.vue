<template>
  <main class="flex">
    <SideNavLeft />
    <FeedMovies />
  </main>
  <MobileHeader />
</template>

<script setup>
import SideNavLeft from "../components/SideNavLeft.vue";
import FeedMovies from "../components/FeedMovies.vue";
import MobileHeader from "../components/MobileHeader.vue";
</script>

<style scoped></style>
