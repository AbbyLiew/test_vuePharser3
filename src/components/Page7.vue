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
          <h2 :style="`text-align : center`">Your spirit shoe?</h2>
          <ul class="section7_shoeContaienr">
            <li
              :class="sellected_item === 'A' ? '--active_sellected' : ''"
              @click="sellected_item = 'A'"
            >
              <div
                class="imgContainer"
                :style="`height : ${innerHeight * 0.13}px;`"
              >
                <img src="/shoes/01shoes.png" alt="01shoes" />
              </div>
            </li>
            <li
              :class="sellected_item === 'B' ? '--active_sellected' : ''"
              @click="sellected_item = 'B'"
            >
              <div
                class="imgContainer"
                :style="`height : ${innerHeight * 0.13}px;`"
              >
                <img src="/shoes/02shoes.png" alt="02shoes" />
              </div>
            </li>
            <li
              :class="sellected_item === 'C' ? '--active_sellected' : ''"
              @click="sellected_item = 'C'"
            >
              <div
                class="imgContainer"
                :style="`height : ${innerHeight * 0.13}px;`"
              >
                <img src="/shoes/03shoes.png" alt="03shoes" />
              </div>
            </li>
            <li
              :class="sellected_item === 'D' ? '--active_sellected' : ''"
              @click="sellected_item = 'D'"
            >
              <div
                class="imgContainer"
                :style="`height : ${innerHeight * 0.13}px;`"
              >
                <img src="/shoes/04shoes.png" alt="04shoes" />
              </div>
            </li>
            <li
              :class="sellected_item === 'E' ? '--active_sellected' : ''"
              @click="sellected_item = 'E'"
            >
              <div
                class="imgContainer"
                :style="`height : ${innerHeight * 0.13}px;`"
              >
                <img src="/shoes/05shoes.png" alt="05shoes" />
              </div>
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
          this.$emit("setQuaionData", "quation6", "A");
          break;
        case "B":
          this.$emit("setQuaionData", "quation6", "B");
          break;
        case "C":
          this.$emit("setQuaionData", "quation6", "C");
          break;
        case "D":
          this.$emit("setQuaionData", "quation6", "D");
          break;
        case "E":
          this.$emit("setQuaionData", "quation6", "E");
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
.section7_shoeContaienr {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.section7_shoeContaienr img {
  height: 100%;
}
.section7_shoeContaienr li {
  padding: 0 !important;
}
</style>
