<template>
  <div class="page2">
    <!-- <div class="block" :style="`height : ${innerHeight * 0.5}px`" /> -->
    <div v-if="current === 3">
      <transition appear @before-enter="beforeEnter" @enter="enter">
        <div>
          <div
            class="container"
            id="start_quiz_button"
            :style="`height : ${innerHeight * 0.6}px; width : ${
              (innerHeight * 0.6 * 588) / 782
            }px;`"
            @click="triggerFilpcard"
          ></div>
          <div class="block" :style="`height : ${innerHeight * 0.05}px`" />
          <div class="btn-next" style="margin-top: -10%">
            <h2>
              點擊卡片來回答<br />7個簡單的問題
              <br />
            </h2>
          </div>
        </div>
      </transition>
    </div>

    <div v-if="current === 4">
      <transition appear @before-enter="beforeEnter1" @enter="enter1">
        <div>
          <div
            class="container"
            :style="`height : ${innerHeight * 0.6}px; width : ${
              (innerHeight * 0.6 * 588) / 782
            }px;`"
          >
            <h2 :style="`text-align : center`">我的代表 <br />風格是……</h2>
            <ul class="ul_extra_padding">
              <li
                :class="
                  quationsData.quation1 === 'A'
                    ? '--active_sellected'
                    : '_before_active_sellect'
                "
                @click="
                  if (quationsData.quation1 === 'A') {
                    this.$emit('next');
                  }
                  quationsData.quation1 = 'A';
                "
                class="--extra_padding"
              >
                <h6
                  :class="quationsData.quation1 === 'A' ? '--color_white' : ''"
                >
                  搶眼大膽
                </h6>
              </li>
              <li
                :class="
                  quationsData.quation1 === 'B'
                    ? '--active_sellected'
                    : '_before_active_sellect'
                "
                @click="
                  if (quationsData.quation1 === 'B') {
                    this.$emit('next');
                  }
                  quationsData.quation1 = 'B';
                "
                class="--extra_padding"
              >
                <h6
                  :class="quationsData.quation1 === 'B' ? '--color_white' : ''"
                >
                  舒適休閒
                </h6>
              </li>
              <li
                :class="
                  quationsData.quation1 === 'C'
                    ? '--active_sellected'
                    : '_before_active_sellect'
                "
                @click="
                  if (quationsData.quation1 === 'C') {
                    this.$emit('next');
                  }
                  quationsData.quation1 = 'C';
                "
                class="--extra_padding"
              >
                <h6
                  :class="quationsData.quation1 === 'C' ? '--color_white' : ''"
                >
                  時髦有型
                </h6>
              </li>
              <li
                :class="
                  quationsData.quation1 === 'D'
                    ? '--active_sellected'
                    : '_before_active_sellect'
                "
                @click="
                  if (quationsData.quation1 === 'D') {
                    this.$emit('next');
                  }
                  quationsData.quation1 = 'D';
                "
                class="--extra_padding"
              >
                <h6
                  :class="quationsData.quation1 === 'D' ? '--color_white' : ''"
                >
                  懷舊復古
                </h6>
              </li>
              <li
                :class="
                  quationsData.quation1 === 'E'
                    ? '--active_sellected'
                    : '_before_active_sellect'
                "
                @click="
                  if (quationsData.quation1 === 'E') {
                    this.$emit('next');
                  }
                  quationsData.quation1 = 'E';
                "
                class="--extra_padding"
              >
                <h6
                  :class="quationsData.quation1 === 'E' ? '--color_white' : ''"
                >
                  依照每天起床時<br />的心情而定
                </h6>
              </li>
            </ul>
          </div>
          <div class="block" :style="`height : ${innerHeight * 0.03}px`" />
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
      el.style.pointerEvents = "none";
    },
    // where the animation will end up
    enter(el) {
      gsap.to(el, {
        duration: 0.5,
        y: 0,
        opacity: 1,
        type: "ease",
        pointerEvents: "auto",
        delay: 2.5,
      });
    },
    beforeEnter1(el) {
      el.style.opacity = "0";
    },
    // where the animation will end up
    enter1(el) {
      gsap.to(el, {
        duration: 1,
        y: 0,
        opacity: 1,
        delay: 1,
        type: "ease",
      });
    },
    triggerFilpcard() {
      this.$emit("setCurrent", 4);
      window.triggerFlipCard();
    },
    next() {},
  },
  watch: {
    quationsData: {
      handler: function (val) {
        if (val.quation1 !== null) {
          this.sellected_item = val.quation1;
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
/* .extra {
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
} */
</style>
