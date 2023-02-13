<template>
  <div class="page3">
    <!-- <div class="block" :style="`height : ${innerHeight * 0.5}px`" /> -->
    <transition appear @before-enter="beforeEnter" @enter="enter">
      <div>
        <div
          class="container"
          :style="`height : ${innerHeight * 0.6}px; width : ${
            (innerHeight * 0.6 * 588) / 782
          }px;`"
        >
          <h2 :style="`text-align : center`">
            What main <br />character energy <br />are you serving?
          </h2>
          <ul>
            <li
              :class="quationsData.quation2 === 'A' ? '--active_sellected' : ''"
              @click="quationsData.quation2 = 'A'"
              class="--extra_padding"
            >
              <h6 :class="quationsData.quation2 === 'A' ? '--color_white' : ''">
                The fearless hero
              </h6>
            </li>
            <li
              :class="quationsData.quation2 === 'B' ? '--active_sellected' : ''"
              @click="quationsData.quation2 = 'B'"
              class="--extra_padding"
            >
              <h6 :class="quationsData.quation2 === 'B' ? '--color_white' : ''">
                The reliable best friend
              </h6>
            </li>
            <li
              :class="quationsData.quation2 === 'C' ? '--active_sellected' : ''"
              @click="quationsData.quation2 = 'C'"
              class="--extra_padding"
            >
              <h6 :class="quationsData.quation2 === 'C' ? '--color_white' : ''">
                The sassy frenemy
              </h6>
            </li>
            <li
              :class="quationsData.quation2 === 'D' ? '--active_sellected' : ''"
              @click="quationsData.quation2 = 'D'"
              class="--extra_padding"
            >
              <h6 :class="quationsData.quation2 === 'D' ? '--color_white' : ''">
                The bleeding heart
              </h6>
            </li>
            <li
              :class="quationsData.quation2 === 'E' ? '--active_sellected' : ''"
              @click="quationsData.quation2 = 'E'"
              class="--extra_padding"
            >
              <h6 :class="quationsData.quation2 === 'E' ? '--color_white' : ''">
                The wild card
              </h6>
            </li>
          </ul>
        </div>
        <div class="block" :style="`height : ${innerHeight * 0.01}px`" />
        <div class="btn-next">
          <button @click="next">back</button>
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
    quationsData: {
      type: Object,
      required: true,
    },

    current: {
      type: Number,
      required: true,
    },
    nextPage: {
      type: Function,
      required: true,
    },
    setCurrent: {
      type: Function,
      required: true,
    },
    setAction: {
      type: Function,
      required: true,
    },
    action: {
      type: String,
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
      window.flipCard_empty_reverse();
      this.$emit("setAction", "back");
      this.$emit("back");
    },
  },
  watch: {
    quationsData: {
      handler: function (val) {
        if (val.quation2 !== null) {
          this.sellected_item = val.quation2;
        }
      },
      deep: true,
    },
    sellected_item: {
      handler: function (val) {
        if (val !== null) {
          setTimeout(() => {
            this.$emit("setAction", "next");
            this.$emit("next");
          }, 700);
        }
      },
      deep: true,
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
