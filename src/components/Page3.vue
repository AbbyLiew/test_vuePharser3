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
          <ul class="ul_extra_padding">
            <li
              :class="
                quationsData.quation2 === 'A'
                  ? '--active_sellected'
                  : '_before_active_sellect'
              "
              @click="
                if (quationsData.quation2 === 'A') {
                  this.$emit('next');
                }
                quationsData.quation2 = 'A';
              "
              class="--extra_padding"
            >
              <h6 :class="quationsData.quation2 === 'A' ? '--color_white' : ''">
                The fearless hero
              </h6>
            </li>
            <li
              :class="
                quationsData.quation2 === 'B'
                  ? '--active_sellected'
                  : '_before_active_sellect'
              "
              @click="
                if (quationsData.quation2 === 'B') {
                  this.$emit('next');
                }
                quationsData.quation2 = 'B';
              "
              class="--extra_padding"
            >
              <h6 :class="quationsData.quation2 === 'B' ? '--color_white' : ''">
                The reliable best friend
              </h6>
            </li>
            <li
              :class="
                quationsData.quation2 === 'C'
                  ? '--active_sellected'
                  : '_before_active_sellect'
              "
              @click="
                if (quationsData.quation2 === 'C') {
                  this.$emit('next');
                }
                quationsData.quation2 = 'C';
              "
              class="--extra_padding"
            >
              <h6 :class="quationsData.quation2 === 'C' ? '--color_white' : ''">
                Joy with a good spirit
              </h6>
            </li>
            <li
              :class="
                quationsData.quation2 === 'D'
                  ? '--active_sellected'
                  : '_before_active_sellect'
              "
              @click="
                if (quationsData.quation2 === 'D') {
                  this.$emit('next');
                }
                quationsData.quation2 = 'D';
              "
              class="--extra_padding"
            >
              <h6 :class="quationsData.quation2 === 'D' ? '--color_white' : ''">
                The bleeding heart
              </h6>
            </li>
            <li
              :class="
                quationsData.quation2 === 'E'
                  ? '--active_sellected'
                  : '_before_active_sellect'
              "
              @click="
                if (quationsData.quation2 === 'E') {
                  this.$emit('next');
                }
                quationsData.quation2 = 'E';
              "
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
gsap.registerPlugin();
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

<style></style>
