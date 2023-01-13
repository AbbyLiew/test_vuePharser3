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

<template>
  <div style="height: 100vh">
    <div :id="containerId"></div>
  </div>
</template>
