<script setup>
import Game from "@/components/Game";
import { Data } from "phaser";
</script>

<template>
  <section>
    <Game />
  </section>
</template>

<!-- hooks for get window dimension -->
<script>
import { onMounted, onUnmounted, ref } from "vue";
// import phaser function
const width = ref(window.innerWidth);
const height = ref(window.innerHeight);
const resize = () => {
  width.value = window.innerWidth;
  height.value = window.innerHeight;
};
onMounted(() => {
  window.addEventListener("resize", resize);
});
onUnmounted(() => {
  window.removeEventListener("resize", resize);
});
</script>

<style lang="scss">
body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}
.mainSection {
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
