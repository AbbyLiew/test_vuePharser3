<template>
  <div class="page5">
    <!-- <div class="block" :style="`height : ${innerHeight * 0.5}px`" /> -->
    <transition appear @before-enter="beforeEnter" @enter="enter">
      <div
        class="containerSlider"
        :style="`height : ${innerHeight * 0.6}px; width : ${innerWidth}px;`"
      >
        <h2 :style="`text-align : center;`">Name your <br />memoir.</h2>
        <Carousel :items-to-show="2.5" :wrap-around="true">
          <Slide v-for="slide in 4" :key="slide">
            <div class="carousel__item">{{ slide }}</div>
          </Slide>

          <template>
            <Navigation />
          </template>
        </Carousel>

        <div :style="'width : 100%; display : flex'">
          <button
            :style="'max-width : 200px; margin : 10px auto;'"
            @click="next"
          >
            next
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import gsap from "gsap";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

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
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
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

    next() {
      this.$emit("next");
    },
  },
};
</script>

<style>
.carousel__item {
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  text-align: center;
  width: 200px;
  height: 200px;
  margin: 0 10px;
  color: black;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

h2 {
  color: #f38a8c;
}
.carousel__slide--active {
  background-color: #f38a8c;
}
.containerSlider {
  padding: 10% 0;
  box-sizing: border-box;
}
</style>
