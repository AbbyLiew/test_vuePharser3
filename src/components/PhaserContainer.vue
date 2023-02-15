<script setup>
import { onMounted, onUnmounted } from "vue";
import gsap from "gsap";
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
  props: {
    current: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    innerHeight: window.innerHeight,
  }),
  watch: {
    current: function (val) {
      if (val === 11) {
        gsap.to("#game-container", {
          zIndex: 100000000,
          position: "absolute",
          delay: 1.5,
        });
      }
    },
  },
};
</script>

<template>
  <div :style="`height : ${innerHeight}px;`">
    <div
      :id="containerId"
      :class="current === 11 ? 'game_container' : ''"
    ></div>
  </div>
</template>

<style>
/* #game-container {
  position: absolute;
  z-index: 100000000;
} */
</style>
