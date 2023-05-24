<script setup>
import Game from "@/components/Game";
import DesktopBlock from "./components/DesktopBlock";
import "./index.css";
</script>

<template>
  <div id="app">
    <div v-if="$isMobile()">
      <Game />
    </div>
    <div v-else>
      <DesktopBlock />
    </div>
  </div>
</template>
<!--  -->

<!-- hooks for get window dimension -->
<script>
import { onMounted, onUnmounted, ref } from "vue";
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
  align-items: center;
}
.rooftop {
  position: absolute;
  width: 100%;
  top: -15%;
}
.rooftop img {
  width: 100%;
}
.leftbag {
  position: absolute;
  width: 25vw;
  bottom: 0;
  left: 0;
}
.rightbag {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 25vw;
}
.leftbag img {
  width: 100%;
}
.rightbag img {
  width: 100%;
}
.imggcontainer img {
  width: 100%;
}

.footerrrr {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.footerrrr {
  p {
    font-family: "Cream-Bold";
    font-size: 0.7rem;
  }
}
</style>
