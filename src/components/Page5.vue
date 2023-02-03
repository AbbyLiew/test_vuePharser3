<template>
  <div class="page5">
    <!-- <div class="block" :style="`height : ${innerHeight * 0.5}px`" /> -->
    <transition appear @before-enter="beforeEnter" @enter="enter">
      <div>
        <div
          class="container"
          :style="`height : ${innerHeight * 0.55}px; width : ${
            (innerHeight * 0.55 * 736) / 1103
          }px;`"
        >
          <h2 :style="`text-align : center`">Name your <br />memoir.</h2>
          <ul>
            <li
              :class="sellected_item === 'A' ? '--active_sellected' : ''"
              @click="sellected_item = 'A'"
              class="--extra_padding"
            >
              <h6 :class="sellected_item === 'A' ? '--color_white' : ''">
                IDGAF.
              </h6>
            </li>
            <li
              :class="sellected_item === 'B' ? '--active_sellected' : ''"
              @click="sellected_item = 'B'"
              class="--extra_padding"
            >
              <h6 :class="sellected_item === 'B' ? '--color_white' : ''">
                NGL…
              </h6>
            </li>
            <li
              :class="sellected_item === 'C' ? '--active_sellected' : ''"
              @click="sellected_item = 'C'"
              class="--extra_padding"
            >
              <h6 :class="sellected_item === 'C' ? '--color_white' : ''">
                FOMO
              </h6>
            </li>
            <li
              :class="sellected_item === 'D' ? '--active_sellected' : ''"
              @click="sellected_item = 'D'"
              class="--extra_padding"
            >
              <h6 :class="sellected_item === 'D' ? '--color_white' : ''">
                TFW…
              </h6>
            </li>
          </ul>
        </div>
        <div class="block" :style="`height : ${innerHeight * 0.05}px`" />
        <div class="btn-next">
          <button @click="next">next</button>
        </div>
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
  data() {
    return {
      sellected_item: null,
    };
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
        delay: 0.8,
        type: "ease",
      });
    },
    next() {
      switch (this.sellected_item) {
        case "A":
          this.$emit("setQuaionData", "quation4", "A");
          break;
        case "B":
          this.$emit("setQuaionData", "quation4", "B");
          break;
        case "C":
          this.$emit("setQuaionData", "quation4", "C");
          break;
        case "D":
          this.$emit("setQuaionData", "quation4", "D");
          break;
      }
      this.$emit("next");
    },
  },
};
</script>

<style>
.--active_sellected {
  background-color: #e87d8c;
}

.--extra_padding {
  padding: 5% 0;
}
.--color_white {
  color: #fff;
}
</style>
