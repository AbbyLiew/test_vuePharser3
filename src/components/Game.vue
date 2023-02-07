<script setup>
import PhaserContainer from "@/components/PhaserContainer";
import PlayScene from "@/game/scenes/PlayScene";
import Page1 from "@/components/Page1";
import Page2 from "@/components/Page2";
import Page3 from "@/components/Page3";
import Page4 from "@/components/Page4";
import Page5 from "@/components/Page5";
import Page6 from "@/components/Page6";
import Page7 from "@/components/Page7";
import Page8 from "@/components/Page8";
import Result from "@/components/Result";
import IceCream from "@/components/svgs/icescream";
import Form from "@/components/Form";
import gsap from "gsap";
</script>

<script>
export default {
  data() {
    return {
      current: 1,
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth,
      quationsData: {
        quation1: null,
        quation2: null,
        quation3: null,
        quation4: null,
        quation5: null,
        quation6: null,
      },
      isloading: 0,
    };
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = "0";
    },
    enter(el) {
      gsap.to(el, {
        duration: 1,
        opacity: 1,
        type: "ease",
        delay: 4,
      });
    },

    setIsloading() {
      this.isloading = 1;
    },

    nextPage() {
      window?.fowardDown();
      this.current++;
    },

    triggerAnimation() {
      window?.startGame();
      window?.triggerAnimation();
      this.current++;
    },
    next() {
      console.log(this.current);
      window.flipCard_empty();
      this.current++;
    },
    back() {
      window.flipCard_empty_reverse();
      this.current--;
    },

    setQuaionData(quationType, answer) {
      this.quationsData[quationType] = answer;
    },
    closeTrriger() {
      // window reload
      window.location.reload();
    },
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.innerHeight = window.innerHeight;
      this.innerWidth = window.innerWidth;
    });
    window.setIsloading = this.setIsloading;
  },
};
</script>

<template>
  <Suspense>
    <section :style="`width : ${innerWidth}px; height : ${innerHeight}px;`">
      <!-- if window resize -->
      <PhaserContainer />
      <section
        class="mainSection"
        :style="`width : ${innerWidth}px; height : ${innerHeight}px;`"
      >
        <div
          class="block centerVertical"
          :style="`height : ${innerHeight * 0.21}px;`"
        >
          <div
            class="svgContainer"
            :style="`height : ${innerHeight * 0.05}px; padding-right : ${
              innerWidth * 0.05
            }px;`"
            v-if="current >= 4"
            @click="closeTrriger"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="#FF99A7"
                d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
              />
            </svg>
          </div>
        </div>
        <div v-if="current === 1" :style="`opacity : ${isloading}`">
          <Page1
            @nextPage="nextPage"
            :innerHeight="innerHeight"
            :innerWidth="innerWidth"
          />
        </div>
        <div v-if="current === 2">
          <Form
            @triggerAnimation="triggerAnimation"
            :innerHeight="innerHeight"
            :innerWidth="innerWidth"
          />
        </div>
        <div v-if="current === 3">
          <Page2
            @next="next"
            @back="back"
            @setQuaionData="setQuaionData"
            :innerHeight="innerHeight"
            :innerWidth="innerWidth"
          />
        </div>
        <div v-if="current === 4">
          <Page3
            @next="next"
            @back="back"
            @setQuaionData="setQuaionData"
            :innerHeight="innerHeight"
            :innerWidth="innerWidth"
          />
        </div>
        <div v-if="current === 5">
          <Page4
            @next="next"
            @back="back"
            @setQuaionData="setQuaionData"
            :innerHeight="innerHeight"
            :innerWidth="innerWidth"
          />
        </div>
        <div v-if="current === 6">
          <Page5
            @next="next"
            @back="back"
            @setQuaionData="setQuaionData"
            :innerHeight="innerHeight"
            :innerWidth="innerWidth"
          />
        </div>
        <div v-if="current === 7">
          <Page6
            @next="next"
            @back="back"
            @setQuaionData="setQuaionData"
            :innerHeight="innerHeight"
            :innerWidth="innerWidth"
          />
        </div>
        <div v-if="current === 8">
          <Page7
            @next="next"
            @back="back"
            @setQuaionData="setQuaionData"
            :innerHeight="innerHeight"
            :innerWidth="innerWidth"
          />
        </div>
        <div v-if="current === 9">
          <Page8
            @next="next"
            @back="back"
            @setQuaionData="setQuaionData"
            :innerHeight="innerHeight"
            :innerWidth="innerWidth"
          />
        </div>
        <Result
          :quationsData="quationsData"
          :innerWidth="innerWidth"
          :innerHeight="innerHeight"
          :current="current"
        />

        <transition
          v-if="current >= 3"
          appear
          @before-enter="beforeEnter"
          @enter="enter"
        >
          <div
            class="line"
            v-if="current >= 2"
            :style="`width : ${innerWidth * 0.85}px; bottom : ${
              innerHeight * 0.06
            }px`"
          >
            <div
              class="line_inner"
              :style="`width : ${((current - 3) / 8) * 100}%;`"
            />
            <div class="block_test">
              <div>
                <IceCream />
              </div>
            </div>

            <div
              class="line_inner"
              :style="`width : ${((10 - current) / 8) * 100}%;`"
            />

            <div class="line_inner_font">
              <h5>{{ current - 2 }} / 8</h5>
            </div>
          </div>
        </transition>
      </section>
    </section>

    <template #fallback>
      <div class="placeholder">Downloading ...</div>
    </template>
  </Suspense>
</template>

<style lang="scss" scoped>
.placeholder {
  font-size: 2rem;
  font-family: "Courier New", Courier, monospace;
}

.line {
  position: absolute;
  height: 2px;
  display: flex;
  align-items: center;
  max-width: 750px;
}
.line_inner {
  background-color: #ff99a7;
  height: 2px;
  border-radius: 50px;
  transition: width 0.5s;
}
.centerVertical {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
}
.block_test {
  width: 7vw;
  max-width: 2rem;
  height: fit-content;
  padding: 4px;
  img {
    width: 100%;
  }
}
.line_inner_font {
  width: 4rem;
  max-width: 4rem;
  padding-left: 0.5rem;
}
.line_inner_font h5 {
  font-size: 1.2rem;
}
</style>
