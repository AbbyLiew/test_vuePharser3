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
      drawIceCream: 2091,
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

    setDrawIceCream(progress) {
      this.drawIceCream = progress;
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
  beforeCreate() {},
  mounted() {
    window.addEventListener("resize", () => {
      this.innerHeight = window.innerHeight;
      this.innerWidth = window.innerWidth;
    });
    window.setIsloading = this.setIsloading;
    window.setDrawIceCream = this.setDrawIceCream;
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
              style="``"
            >
              <path
                fill="#FF99A7"
                stroke-dashoffset:
                d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
              />
            </svg>
          </div>
        </div>

        <div
          class="icecream"
          :style="`opacity : ${1 - isloading}; transition : 1s;`"
        >
          <div :style="`height : ${innerHeight * 0.3}px;`">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_2"
              viewBox="0 0 326.03 720.29"
            >
              <g id="Layer_1-2">
                <g>
                  <path
                    class="cls-1 toOpacity0"
                    d="M243.54,482.14c-11-5.47-18.58-16.83-18.58-29.92l-.12-.59c-.1-.41-.3-.75-.6-1.05-.27-.27-.84-.72-1.64-.72-1.18,0-2.02,.88-2.24,1.75l-.11,.38v58.97c-.01,9.7-3.8,18.83-10.67,25.71-5.49,5.56-12.53,9.11-20.21,10.26l.74,.93,6.59,8.62c1.77,2.3,1.35,5.6-.95,7.37-2.3,1.77-5.6,1.35-7.37-.95l-6.59-8.61-4.69-6.04-29.25,22.59,24.07,31.16,3.74-2.88c2.3-1.77,5.6-1.35,7.37,.95,1.77,2.3,1.35,5.6-.95,7.37l-3.7,2.8-.02,.04v.02l-.02,.02,5.43,6.97c1.77,2.3,1.35,5.6-.95,7.37-2.3,1.77-5.6,1.35-7.37-.95l-5.43-6.97-22.37,17.38,19.32,50.86,76.31-202.08,.11-.32"
                    :style="`stroke-dasharray: 2091; stroke-dashoffset: ${drawIceCream};`"
                  />
                  <polyline
                    class="cls-1 toOpacity0"
                    points="129.12 585.31 129.19 585.48 129.27 585.71 143.67 623.6 163.43 608.19 139.45 577.37 129.12 585.31"
                    :style="`stroke-dasharray: 2091; stroke-dashoffset: ${drawIceCream};`"
                  />
                  <path
                    class="cls-1 toOpacity0"
                    d="M141.38,562.5l25.08-19.58-.08-.06c-4.08-2.24-7.74-5.27-10.78-9-5.22-6.38-8.1-14.52-8.1-22.9v-2.99l-.34,.28-36.54,28.21,.05,.13,14.34,37.78,8.02-5.59-3.58-4.55-6.59-8.62c-1.77-2.3-1.35-5.6,.95-7.37,2.3-1.77,5.6-1.35,7.37,.95l6.59,8.61,3.61,4.71"
                    :style="`stroke-dasharray: 2091; stroke-dashoffset: ${drawIceCream};`"
                  />
                  <path
                    class="cls-1 toOpacity0"
                    d="M98.05,428.99l.29,.37,19.57,25.12,8.62-6.59c2.3-1.77,5.6-1.35,7.37,.95,1.77,2.3,1.35,5.6-.95,7.37l-8.61,6.59,22.92,29.64,.23,.29v-43.5c0-5.4-2.1-10.46-5.92-14.24-3.85-3.89-8.91-6-14.31-6h-29.2"
                    :style="`stroke-dasharray: 2091; stroke-dashoffset: ${drawIceCream};`"
                  />
                  <polygon
                    class="cls-1 toOpacity0"
                    points="140.13 500.37 115.95 469.25 91.99 487.42 106.7 526.17 140.13 500.37"
                    :style="`stroke-dasharray: 2091; stroke-dashoffset: ${drawIceCream};`"
                  />
                  <polyline
                    class="cls-1 toOpacity0"
                    points="69.84 429.06 88.04 477 88.05 477.04 109.38 460.78 84.52 429 71.18 429 69.83 429.03"
                    :style="`stroke-dasharray: 2091; stroke-dashoffset: ${drawIceCream};`"
                  />
                </g>
                <path
                  class="cls-1 toOpacity0"
                  d="M177.2,75.79l4.72-.11c18.44,0,28.59,5.83,36.47,5.83,6.62,0,7.3-3.63,14.62-3.63,6.56,0,10.97,7.68,11.56,12.9,1.39,12.33,1.16,23.8-10.54,24.77-7.81,.65-10.9-4.29-15.3-11.06-4.92-7.57-16.62-12.55-31.26-12.55-24.41,0-38.18,14.19-38.18,33.32,0,24.48,18.26,34.1,37.05,34.1,22.14,0,31.49-9.16,34.03-14.63,2.47-5.31,5.49-10.94,12.95-10.94,10.49,0,12.98,10.34,12.98,20.33,0,8.4-2.67,18.43-11.85,18.43-8.17,0-7.63-4.78-15.57-3.6-4.69,.7-13,3.89-23.54,5.84l-.51,.12c63.84,14.59,111.81,72.05,111.81,140.25,0,10.28-1.07,20.43-3.19,30.28,13.02,8.19,21.07,22.45,21.07,38.25,0,20.39-13.83,38.06-32.78,43.55v24.98c0,8.93-3.47,17.32-9.77,23.62-5.26,5.26-11.81,8.53-19.08,9.48l-.5,1.32-86.22,225.73c-1.48,3.87-5.19,6.43-9.33,6.43s-7.85-2.56-9.33-6.43L49.63,429.03h0l-2.82-.03c-24.98,0-45.31-20.33-45.31-45.31,0-15.8,8.05-30.07,21.07-38.25-2.12-9.85-3.19-20-3.19-30.28,0-74,56.28-135.17,128.27-142.88l-.33-.14c-22.13-5.77-45.25-18.83-45.25-46.89,0-32.56,37.42-44.7,63.16-48.3v-.22c-.83-28.27,11.74-55.88,33.6-73.88,2.56-2.11,6.34-1.74,8.45,.82,.5,.61,.86,1.28,1.08,1.99,.72,2.27,.05,4.85-1.9,6.46-18.87,15.52-29.77,39.28-29.25,63.66"
                  :style="`stroke-dasharray: 2091; stroke-dashoffset: ${drawIceCream};`"
                />
                <path
                  class="cls-1 toOpacity0"
                  d="M284.9,340.84c1.81-8.47,2.63-16.81,2.63-25.68,0-68.66-55.86-124.52-124.52-124.52s-124.52,55.86-124.52,124.52c0,8.42,.76,16.38,2.4,24.45l19.89-.02c4.94,0,8.94,4,8.94,8.94s-4,8.94-8.94,8.94h-11.92c-3.43,0-7.19,.07-10.24,1.33l-1.46,.58c-10.05,3.98-16.55,13.53-16.55,24.31,0,14.44,11.75,26.2,26.2,26.2H127.26c10.55,0,20.44,4.12,27.83,11.6,7.4,7.32,11.52,17.2,11.52,27.75v61.72c0,3.98,1.35,7.82,3.8,10.82,3.34,4.1,8.24,6.44,13.46,6.44,4.64,0,8.95-1.78,12.15-5.03,3.31-3.31,5.11-7.64,5.11-12.23v-58.74c0-1.97,.26-3.84,.77-5.58,2.51-9.37,10.99-15.9,20.7-15.9,5.71,0,11.09,2.24,15.16,6.32,2.65,2.65,4.57,5.96,5.54,9.58,.51,1.74,.77,3.62,.77,5.58,0,7.87,6.41,14.28,14.28,14.28,3.83,0,7.42-1.48,10.11-4.17,2.69-2.69,4.17-6.28,4.17-10.11v-.13l.5-33.26c0-4.66,3.57-8.65,8.22-9.03h.07c13.45-1.1,23.99-12.57,23.99-26.12,0-9.61-5.16-18.24-13.41-22.82l-.18-.13c-3.16-1.3-6.44-1.94-9.88-1.94h-11.92c-4.94,0-8.94-4-8.94-8.94s4-8.94,8.94-8.94h11.92l2.95-.04"
                  :style="`stroke-dasharray: 2091; stroke-dashoffset: ${drawIceCream};`"
                />
                <path
                  class="cls-1 toOpacity0"
                  d="M187.76,216.26c-3.96-1.14-6.25-5.27-5.12-9.23,1.14-3.96,5.26-6.26,9.23-5.12,33.82,9.69,61.81,35.01,74.88,67.72,1.53,3.83-.34,8.17-4.16,9.7-.91,.36-1.85,.53-2.77,.53-2.96,0-5.76-1.78-6.93-4.7-11.36-28.44-35.68-50.45-65.07-58.9"
                  :style="`stroke-dasharray: 2091; stroke-dashoffset: ${drawIceCream};`"
                />
                <path
                  class="cls-1 toOpacity0"
                  d="M268.94,287.23c-4.88,0-8.85,3.96-8.85,8.85s3.96,8.85,8.85,8.85,8.85-3.96,8.85-8.85-3.92-8.81-8.78-8.84"
                  :style="`stroke-dasharray: 2091; stroke-dashoffset: ${drawIceCream};`"
                />
              </g>
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
.icecream .cls-1 {
  fill: none;
  stroke: #e87d8c;
  stroke-miterlimit: 10;
  stroke-width: 8px;
}

.icecream svg {
  height: 100%;
}
.icecream {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffc9d3;
}
.icecream--complete {
  z-index: -1000;
}
</style>
