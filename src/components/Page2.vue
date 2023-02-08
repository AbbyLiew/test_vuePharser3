<template>
  <div class="page2">
    <!-- <div class="block" :style="`height : ${innerHeight * 0.5}px`" /> -->
    <div v-if="current === 3">
      <transition appear @before-enter="beforeEnter" @enter="enter">
        <div>
          <div
            class="container"
            :style="`height : ${innerHeight * 0.55}px; width : ${
              (innerHeight * 0.55 * 736) / 1103
            }px;`"
            @click="nextPage"
          ></div>
          <div class="block" :style="`height : ${innerHeight * 0.05}px`" />
          <div class="btn-next">
            <h2>
              Tap card to answer <br />
              7 simple questions
            </h2>
          </div>
        </div>
      </transition>
    </div>

    <div v-if="current === 4">
      <transition appear @before-enter="beforeEnter" @enter="enter">
        <div>
          <div
            class="container"
            :style="`height : ${innerHeight * 0.55}px; width : ${
              (innerHeight * 0.55 * 736) / 1103
            }px;`"
          >
            <h2 :style="`text-align : center`">
              My Signature <br />style is...
            </h2>
            <ul>
              <li
                :class="sellected_item === 'A' ? '--active_sellected' : ''"
                @click="sellected_item = 'A'"
                class="--extra_padding"
              >
                <h6 :class="sellected_item === 'A' ? '--color_white' : ''">
                  Bright and bold
                </h6>
              </li>
              <li
                :class="sellected_item === 'B' ? '--active_sellected' : ''"
                @click="sellected_item = 'B'"
                class="--extra_padding"
              >
                <h6 :class="sellected_item === 'B' ? '--color_white' : ''">
                  Comfortable and casual
                </h6>
              </li>
              <li
                :class="sellected_item === 'C' ? '--active_sellected' : ''"
                @click="sellected_item = 'C'"
                class="--extra_padding"
              >
                <h6 :class="sellected_item === 'C' ? '--color_white' : ''">
                  Trendy and chic
                </h6>
              </li>
              <li
                :class="sellected_item === 'D' ? '--active_sellected' : ''"
                @click="sellected_item = 'D'"
                class="--extra_padding"
              >
                <h6 :class="sellected_item === 'D' ? '--color_white' : ''">
                  Moody and nostalgic
                </h6>
              </li>
              <li
                :class="sellected_item === 'E' ? '--active_sellected' : ''"
                @click="sellected_item = 'E'"
                class="--extra_padding"
              >
                <h6 :class="sellected_item === 'E' ? '--color_white' : ''">
                  How I feel when I wake up
                </h6>
              </li>
            </ul>
          </div>
          <div class="block" :style="`height : ${innerHeight * 0.05}px`" />
        </div>
      </transition>
    </div>
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
    setAction: {
      type: Function,
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
    current: {
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
        delay: 4,
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
          this.$emit("setQuaionData", "quation1", "A");
          break;
        case "B":
          this.$emit("setQuaionData", "quation1", "B");
          break;
        case "C":
          this.$emit("setQuaionData", "quation1", "C");
          break;
        case "D":
          this.$emit("setQuaionData", "quation1", "D");
          break;
        case "E":
          this.$emit("setQuaionData", "quation1", "E");
          break;
      }
      this.$emit("next");
    },
  },
};
</script>

<style>
.extra {
  padding-top: 7% !important;
}

.btn-next {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
}

h2 {
  color: #f38a8c;
}
</style>
