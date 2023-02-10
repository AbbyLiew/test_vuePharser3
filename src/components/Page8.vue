<template>
  <div class="page8">
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
            And finally, I <br />never leave home<br />
            without…
          </h2>
          <ul>
            <li
              :class="quationsData.quation7 === 'A' ? '--active_sellected' : ''"
              @click="quationsData.quation7 = 'A'"
            >
              <h6 :class="quationsData.quation7 === 'A' ? '--color_white' : ''">
                A compact mirror and an <br />extra dose of confidence.
              </h6>
            </li>
            <li
              :class="quationsData.quation7 === 'B' ? '--active_sellected' : ''"
              @click="quationsData.quation7 = 'B'"
            >
              <h6 :class="quationsData.quation7 === 'B' ? '--color_white' : ''">
                A water bottle and <br />a reality check.
              </h6>
            </li>
            <li
              :class="quationsData.quation7 === 'C' ? '--active_sellected' : ''"
              @click="quationsData.quation7 = 'C'"
            >
              <h6 :class="quationsData.quation7 === 'C' ? '--color_white' : ''">
                A book and a witty<br />
                comeback.
              </h6>
            </li>
            <li
              :class="quationsData.quation7 === 'D' ? '--active_sellected' : ''"
              @click="quationsData.quation7 = 'D'"
            >
              <h6 :class="quationsData.quation7 === 'D' ? '--color_white' : ''">
                A handknit scarf and <br />some warm words.
              </h6>
            </li>
            <li
              :class="quationsData.quation7 === 'E' ? '--active_sellected' : ''"
              @click="quationsData.quation7 = 'E'"
            >
              <h6 :class="quationsData.quation7 === 'E' ? '--color_white' : ''">
                All the above!<br />
                But I forgot my keys…
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
    setIsActive: {
      type: Function,
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
        if (val.quation3 !== null) {
          this.sellected_item = val.quation3;
        }
      },
      deep: true,
    },
    sellected_item: {
      handler: function (val) {
        if (val !== null) {
          setTimeout(() => {
            // this.$emit("setAction", "next");
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
