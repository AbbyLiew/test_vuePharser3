<script setup>
import { onMounted, onUnmounted } from "vue";

let gameInstance = null;
const containerId = "game-container";
const game = await import(/* webpackChunkName: "game" */ "@/game/game");

onMounted(() => {
  gameInstance = game.launch(containerId);
});

onUnmounted(() => {
  gameInstance.destroy(false);
});
</script>

<script>
export default {
  name: "PhaserContainer",
  data: () => ({
    innerHeight: window.innerHeight,
  }),
};
</script>

<template>
  <div :style="`height : ${innerHeight}px;`">
    <div :id="containerId"></div>
  </div>
</template>

<style></style>
