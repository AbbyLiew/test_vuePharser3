<template>
  <div class="page3">
    <!-- <div class="block" :style="`height : ${innerHeight * 0.5}px`" /> -->
    <transition appear @before-enter="beforeEnter" @enter="enter">
      <div>
        <div
          class="container"
          :style="`height : ${innerHeight * 0.55}px; width : ${
            (innerHeight * 0.55 * 736) / 1103
          }px;`"
        >
          <h2 :style="`text-align : center`">
            What main <br />character energy <br />are you serving?
          </h2>
          <ul>
            <li
              :class="sellected_item === 'A' ? '--active_sellected' : ''"
              @click="sellected_item = 'A'"
              class="--extra_padding"
            >
              <h6 :class="sellected_item === 'A' ? '--color_white' : ''">
                The fearless hero
              </h6>
            </li>
            <li
              :class="sellected_item === 'B' ? '--active_sellected' : ''"
              @click="sellected_item = 'B'"
              class="--extra_padding"
            >
              <h6 :class="sellected_item === 'B' ? '--color_white' : ''">
                The reliable best friend
              </h6>
            </li>
            <li
              :class="sellected_item === 'C' ? '--active_sellected' : ''"
              @click="sellected_item = 'C'"
              class="--extra_padding"
            >
              <h6 :class="sellected_item === 'C' ? '--color_white' : ''">
                The sassy frenemy
              </h6>
            </li>
            <li
              :class="sellected_item === 'D' ? '--active_sellected' : ''"
              @click="sellected_item = 'D'"
              class="--extra_padding"
            >
              <h6 :class="sellected_item === 'D' ? '--color_white' : ''">
                The bleeding heart
              </h6>
            </li>
            <li
              :class="sellected_item === 'E' ? '--active_sellected' : ''"
              @click="sellected_item = 'E'"
              class="--extra_padding"
            >
              <h6 :class="sellected_item === 'E' ? '--color_white' : ''">
                The wild card
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
      if (this.sellected_item === null) {
        alert("Please select one of the options");
        return;
      }
      switch (this.sellected_item) {
        case "A":
          this.$emit("setQuaionData", "quation2", "A");
          break;
        case "B":
          this.$emit("setQuaionData", "quation2", "B");
          break;
        case "C":
          this.$emit("setQuaionData", "quation2", "C");
          break;
        case "D":
          this.$emit("setQuaionData", "quation2", "D");
          break;
        case "E":
          this.$emit("setQuaionData", "quation2", "E");
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
  padding-top: 12%;
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
