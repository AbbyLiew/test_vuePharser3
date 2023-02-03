<template>
  <div class="page3">
    <!-- <div class="block" :style="`height : ${innerHeight * 0.5}px`" /> -->
    <transition appear @before-enter="beforeEnter" @enter="enter">
      <div>
        <div
          class="container extra"
          :style="`height : ${innerHeight * 0.55}px; width : ${innerWidth}px;`"
        >
          <h2 :style="`text-align : center`">
            What main <br />
            character energy <br />are you serving?
          </h2>
          <Carousel :items-to-show="1.5" :wrap-around="true">
            <Slide :key="slide_A">
              <div
                class="carousel__item"
                :style="`height : ${innerHeight * 0.6 * 0.45}px;`"
                key="slide_A"
              >
                <img src="/character01.png" />
              </div>
            </Slide>
            <Slide :key="slide_B">
              <div
                class="carousel__item"
                :style="`height : ${innerHeight * 0.6 * 0.45}px;`"
                key="slide_B"
              >
                <img src="/character02.png" />
              </div>
            </Slide>
            <Slide :key="slide_C">
              <div
                class="carousel__item"
                :style="`height : ${innerHeight * 0.6 * 0.45}px;`"
                key="slide_C"
              >
                <img src="/character03.png" />
              </div>
            </Slide>

            <template #addons>
              <Pagination />
            </template>
          </Carousel>
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
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

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

  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
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
        delay: 0.8,
        type: "ease",
      });
    },
    next() {
      let sellected = document.querySelector(".carousel__slide--active");
      let base_url = window.location.origin;
      let result = sellected.childNodes[0].childNodes[0].src;

      // get base url
      switch (result) {
        case base_url + "/character01.png":
          this.$emit("setQuaionData", "quation2", "A");
          break;
        case base_url + "/character02.png":
          this.$emit("setQuaionData", "quation2", "B");
          break;
        case base_url + "/character03.png":
          this.$emit("setQuaionData", "quation2", "C");
          break;
      }
      this.$emit("next");
    },
  },
};
</script>

<style>
.container {
  border-radius: 30px;
  box-sizing: border-box;
  padding-top: 10%;
  display: flex;
  flex-direction: column;
  padding-bottom: 10%;
}
.carousel__item {
  text-align: center;
  margin: 0 10px;
  color: black;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.carousel__item img {
  height: 100%;
}

.carousel__slide--active {
  background-color: transparent;
}
.containerSlider {
  box-sizing: border-box;
}
.carousel__pagination {
  padding: 0;
}
.carousel__pagination-button::after {
  display: block;
  content: "";
  width: 10px;
  height: 10px;
  border-radius: var(--vc-pgn-border-radius);
  background-color: #ffc9d3;
  border-radius: 50%;
}
.carousel__pagination-button--active::after {
  background-color: #e87d8c;
}

.btn-next button {
  width: fit-content;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  background-color: #ff99a7;
  border: none;
  color: white;
  border-radius: 20px;
}

h2 {
  color: #f38a8c;
}
</style>
