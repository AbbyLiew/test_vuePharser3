<template>
  <div class="page5">
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
            Qui ou quoi vous aide<br />
            à surmonter les <br />obstacles?
          </h2>
          <ul class="ul_extra_padding">
            <li
              :class="
                quationsData.quation5 === 'A'
                  ? '--active_sellected'
                  : '_before_active_sellect'
              "
              @click="
                if (quationsData.quation5 === 'A') {
                  this.$emit('next');
                }
                quationsData.quation5 = 'A';
              "
              class="--extra_padding"
            >
              <h6 :class="quationsData.quation5 === 'A' ? '--color_white' : ''">
                Mes chansons <br />branchées.
              </h6>
            </li>
            <li
              :class="
                quationsData.quation5 === 'B'
                  ? '--active_sellected'
                  : '_before_active_sellect'
              "
              @click="
                if (quationsData.quation5 === 'B') {
                  this.$emit('next');
                }
                quationsData.quation5 = 'B';
              "
              class="--extra_padding"
            >
              <h6 :class="quationsData.quation5 === 'B' ? '--color_white' : ''">
                Écouter Netflix <br />et relaxer.
              </h6>
            </li>
            <li
              :class="
                quationsData.quation5 === 'C'
                  ? '--active_sellected'
                  : '_before_active_sellect'
              "
              @click="
                if (quationsData.quation5 === 'C') {
                  this.$emit('next');
                }
                quationsData.quation5 = 'C';
              "
              class="--extra_padding"
            >
              <h6 :class="quationsData.quation5 === 'C' ? '--color_white' : ''">
                Une thérapie <br />(par le magasinage).
              </h6>
            </li>
            <li
              :class="
                quationsData.quation5 === 'D'
                  ? '--active_sellected'
                  : '_before_active_sellect'
              "
              @click="
                if (quationsData.quation5 === 'D') {
                  this.$emit('next');
                }
                quationsData.quation5 = 'D';
              "
              class="--extra_padding"
            >
              <h6 :class="quationsData.quation5 === 'D' ? '--color_white' : ''">
                Une pinte de crème glacée.
              </h6>
            </li>
            <li
              :class="
                quationsData.quation5 === 'E'
                  ? '--active_sellected'
                  : '_before_active_sellect'
              "
              @click="
                if (quationsData.quation5 === 'E') {
                  this.$emit('next');
                }
                quationsData.quation5 = 'E';
              "
              class="--extra_padding"
            >
              <h6 :class="quationsData.quation5 === 'E' ? '--color_white' : ''">
                Le weekend.
              </h6>
            </li>
          </ul>
        </div>
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
  padding: 4% 0;
}
.--color_white {
  color: #fff;
}
</style>
