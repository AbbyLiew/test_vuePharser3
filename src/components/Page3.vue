<template>
  <div class="page3">
    <!-- <div class="block" :style="`height : ${innerHeight * 0.5}px`" /> -->
    <transition appear @before-enter="beforeEnter" @enter="enter">
      <div
        class="container"
        :style="`height : ${innerHeight * 0.6}px; width : ${
          (innerHeight * 0.6 * 736) / 1103
        }px;`"
      >
        <h2 :style="`text-align : center`">
          What main <br />character energy <br />are you serving ?
        </h2>
        <ul>
          <li>
            <button @click="$emit('setQuaionData', 'quation2', 'A')">
              Nike
            </button>
          </li>
          <li>
            <button @click="$emit('setQuaionData', 'quation2', 'B')">
              Adidas
            </button>
          </li>
          <li>
            <button @click="$emit('setQuaionData', 'quation2', 'C')">
              Puma
            </button>
          </li>
          <li>
            <button @click="$emit('setQuaionData', 'quation2', 'D')">
              Converse
            </button>
          </li>
          <li>
            <button @click="next">Vans</button>
          </li>
        </ul>
        <button @click="$emit('back')">Back</button>
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
  },

  methods: {
    beforeEnter(el) {
      el.style.opacity = "0";
    },
    // where the animation will end up
    enter(el) {
      gsap.to(el, {
        duration: 1,
        y: 0,
        opacity: 1,
        delay: 1,
        type: "ease",
      });
    },
  },
};
</script>

<style>
h2 {
  line-height: 1;
}
</style>
