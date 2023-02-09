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
              :class="quationsData.quation4 === 'A' ? '--active_sellected' : ''"
              @click="quationsData.quation4 = 'A'"
              class="--extra_padding"
            >
              <h6 :class="quationsData.quation4 === 'A' ? '--color_white' : ''">
                Living Rent Free (in your <br />
                head). OR Its Giving.
              </h6>
            </li>
            <li
              :class="quationsData.quation4 === 'B' ? '--active_sellected' : ''"
              @click="quationsData.quation4 = 'B'"
              class="--extra_padding"
            >
              <h6 :class="quationsData.quation4 === 'B' ? '--color_white' : ''">
                Periodt
              </h6>
            </li>
            <li
              :class="quationsData.quation4 === 'C' ? '--active_sellected' : ''"
              @click="quationsData.quation4 = 'C'"
              class="--extra_padding"
            >
              <h6 :class="quationsData.quation4 === 'C' ? '--color_white' : ''">
                Understood the Assignment
              </h6>
            </li>
            <li
              :class="quationsData.quation4 === 'D' ? '--active_sellected' : ''"
              @click="quationsData.quation4 = 'D'"
              class="--extra_padding"
            >
              <h6 :class="quationsData.quation4 === 'D' ? '--color_white' : ''">
                Issa Vibe
              </h6>
            </li>

            <li
              :class="quationsData.quation4 === 'E' ? '--active_sellected' : ''"
              @click="quationsData.quation4 = 'E'"
              class="--extra_padding"
            >
              <h6 :class="quationsData.quation4 === 'E' ? '--color_white' : ''">
                We Outside
              </h6>
            </li>
          </ul>
        </div>
        <div class="block" :style="`height : ${innerHeight * 0.05}px`" />
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
        if (val.quation4 !== null) {
          this.sellected_item = val.quation4;
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
