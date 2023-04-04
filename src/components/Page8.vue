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
            最後一題，出門一定<br />會帶的東西是什麼？
          </h2>
          <ul>
            <li
              :class="
                quationsData.quation7 === 'A'
                  ? '--active_sellected'
                  : '_before_active_sellect'
              "
              @click="quationsData.quation7 = 'A'"
            >
              <h6 :class="quationsData.quation7 === 'A' ? '--color_white' : ''">
                隨身化妝鏡和比平時<br />更多的自信
              </h6>
            </li>
            <li
              :class="
                quationsData.quation7 === 'B'
                  ? '--active_sellected'
                  : '_before_active_sellect'
              "
              @click="quationsData.quation7 = 'B'"
            >
              <h6 :class="quationsData.quation7 === 'B' ? '--color_white' : ''">
                裝水的瓶子與各種<br />實務的確認
              </h6>
            </li>
            <li
              :class="
                quationsData.quation7 === 'C'
                  ? '--active_sellected'
                  : '_before_active_sellect'
              "
              @click="quationsData.quation7 = 'C'"
            >
              <h6 :class="quationsData.quation7 === 'C' ? '--color_white' : ''">
                一本書以及機智<br />風趣的回歸
              </h6>
            </li>
            <li
              :class="
                quationsData.quation7 === 'D'
                  ? '--active_sellected'
                  : '_before_active_sellect'
              "
              @click="quationsData.quation7 = 'D'"
            >
              <h6 :class="quationsData.quation7 === 'D' ? '--color_white' : ''">
                手工編織的圍巾跟<br />心靈雞湯小語
              </h6>
            </li>
            <li
              :class="
                quationsData.quation7 === 'E'
                  ? '--active_sellected'
                  : '_before_active_sellect'
              "
              @click="quationsData.quation7 = 'E'"
            >
              <h6 :class="quationsData.quation7 === 'E' ? '--color_white' : ''">
                以上皆是！<br />但我忘記帶鑰匙……
              </h6>
            </li>
          </ul>
        </div>
        <div class="block" :style="`height : ${innerHeight * 0.01}px`" />
        <div class="btn-next">
          <button @click="next">返回</button>
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
  padding: 4% 0;
}
.--color_white {
  color: #fff;
}
</style>
