<template>
  <canvas id="canvas">
    <h1>Votes</h1>
  </canvas>
</template>

<script setup>
defineProps({
  votes: {
    type: String,
    required: true,
  },
});
</script>

<style></style>
