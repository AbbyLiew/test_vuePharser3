<script setup>
import { onMounted, onUnmounted } from "vue";

let gameInstance = null;
const containerId = "game-container";
const game = await import(/* webpackChunkName: "game" */ "@/game/game");
const game_desktop = await import(
  /* webpackChunkName: "game" */ "@/game/game_desktop"
);

onMounted(() => {
  if (window.innerWidth > 768) {
    gameInstance = game_desktop.launch(containerId);
  } else {
    gameInstance = game.launch(containerId);
  }
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
