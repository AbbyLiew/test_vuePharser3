<template>
  <div class="page2">
    <!-- <div class="block" :style="`height : ${innerHeight * 0.5}px`" /> -->
    <transition appear @before-enter="beforeEnter" @enter="enter">
      <div
        class="container"
        :style="`height : ${innerHeight * 0.6}px; width : ${
          (innerHeight * 0.6 * 736) / 1103
        }px;`"
      >
        <h2 :style="`text-align : center`">Your spirit shoe?</h2>
        <ul>
          <li>
            <button @click="$emit('setQuaionData', 'quation1', 'A')">
              Nike
            </button>
          </li>
          <li>
            <button @click="$emit('setQuaionData', 'quation1', 'B')">
              Adidas
            </button>
          </li>
          <li>
            <button @click="$emit('setQuaionData', 'quation1', 'C')">
              Puma
            </button>
          </li>
          <li>
            <button @click="$emit('setQuaionData', 'quation1', 'D')">
              Converse
            </button>
          </li>
        </ul>

        <button @click="$emit('next')">next</button>
      </div>
    </transition>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  props: {
    next: {
      type: Function,
      required: true,
    },
    back: {
      type: Function,
      required: true,
    },
    innerHeight: {
      type: Number,
      required: true,
    },
    innerWidth: {
      type: Number,
      required: true,
    },
    setQuaionData: {
      type: Function,
      required: true,
    },
  },

  methods: {
    doSomething() {
      this.$emit("setQuaionData", "quation1", "A");
    },
    beforeEnter(el) {
      el.style.opacity = "0";
    },
    // where the animation will end up
    enter(el) {
      gsap.to(el, {
        duration: 1,
        y: 0,
        opacity: 1,
        delay: 7,
        type: "ease",
      });
    },
  },
};
</script>

<style>
.container {
  border-radius: 30px;
  box-sizing: border-box;
  padding: 10%;
}
</style>
