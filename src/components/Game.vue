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
        quation7: null,
      },
      isloading: 0,
      drawIceCream: 2091,
      action: "next",
      isActive_video: false,
      name: "",
      email: "",
      phone: "",
    };
  },
  watch: {
    current: {
      handler: function (newVal, oldVal) {
        if (newVal === 11) {
          gsap.to(".line", {
            duration: 1,
            opacity: 0,
            type: "ease",
            delay: 0.5,
          });
        }
      },
      deep: true,
    },
    isloading: {
      handler: function (newVal, oldVal) {
        if (newVal === 1) {
          let current = window.localStorage.getItem("current");
          if (current) {
            setTimeout(() => {
              this.current = 3;
              window.triggerAnimation();
              window.localStorage.removeItem("current");
            }, 20);
          }
        }
      },
      deep: true,
    },
  },
  methods: {
    restart() {
      this.current = 3;
      this.quationsData = {
        quation1: null,
        quation2: null,
        quation3: null,
        quation4: null,
        quation5: null,
        quation6: null,
        quation7: null,
      };
      window?.reStartScene();
    },
    setIsActive() {
      this.isActive_video = true;
    },
    beforeEnter(el) {
      el.style.opacity = "0";
    },
    setNamePhoneEmail(name, phone, email) {
      this.name = name;
      this.phone = phone;
      this.email = email;
    },
    enter(el) {
      gsap.to(el, {
        duration: 1,
        opacity: 1,
        type: "ease",
        delay: 1,
      });
    },

    setAction(action) {
      this.action = action;
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

    setCurrent(num) {
      this.current = num;
    },

    triggerAnimation() {
      window?.startGame();
      window?.triggerAnimation();
      this.current++;
    },
    next() {
      window.flipCard_empty();
      this.current++;
    },
    back() {
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
    window.postfunction = this.postfunction;

    // env file
    window.env = {
      API_URL: process.env,
      API_KEY: process.env.VUE_APP_TITLE,
    };
  },
};
</script>

<template>
  <Suspense>
    <section :style="`width : ${innerWidth}px; height : ${innerHeight}px;`">
      <!-- if window resize -->
      <PhaserContainer :current="current" />
      <section
        class="mainSection"
        :style="`width : ${innerWidth}px; height : ${innerHeight}px;`"
      >
        <div
          class="block centerVertical"
          :style="`height : ${innerHeight * 0.21}px;`"
        />

        <div
          class="icecream"
          :style="`opacity : ${
            1 - isloading
          }; transition : 1s;height : ${innerHeight}px; width : ${innerWidth}px`"
        >
          <div class="block" :style="`height : ${innerHeight * 0.05}px;`"></div>
          <div
            class="imgContainer_logo"
            :style="`height : ${innerHeight * 0.1}px;`"
          >
            <img src="/ca/logo.png" />
          </div>

          <div class="block" :style="`height : ${innerHeight * 0.21}px;`"></div>

          <transition
            @before-enter="beforeEnter_icecream"
            @enter="enter_icecream"
          >
            <div
              class="imgContainer_logo float"
              :style="`height : ${innerHeight * 0.23}px;`"
            >
              <img src="/ca/icon-icecream_darker.png" />
            </div>
          </transition>
        </div>

        <div v-if="current === 1" :style="`opacity : ${isloading}`">
          <Page1
            @nextPage="nextPage"
            :innerHeight="innerHeight"
            :innerWidth="innerWidth"
            :quationsData="quationsData"
            @setAction="setAction"
            :action="action"
            :current="current"
            @back="back"
          />
        </div>
        <div v-if="current === 2">
          <Form
            @triggerAnimation="triggerAnimation"
            :innerHeight="innerHeight"
            :innerWidth="innerWidth"
            :quationsData="quationsData"
            @setAction="setAction"
            :action="action"
            :current="current"
            @back="back"
            @setNamePhoneEmail="setNamePhoneEmail"
          />
        </div>
        <div v-if="current === 3 || current === 4">
          <Page2
            @next="next"
            @back="back"
            @setQuaionData="setQuaionData"
            @nextPage="nextPage"
            :innerHeight="innerHeight"
            :innerWidth="innerWidth"
            :quationsData="quationsData"
            @setAction="setAction"
            :action="action"
            :current="current"
            @setCurrent="setCurrent"
          />
        </div>
        <div v-if="current === 5">
          <Page3
            @next="next"
            @back="back"
            @setQuaionData="setQuaionData"
            @nextPage="nextPage"
            :innerHeight="innerHeight"
            :innerWidth="innerWidth"
            :quationsData="quationsData"
            @setAction="setAction"
            :action="action"
            :current="current"
            @setCurrent="setCurrent"
          />
        </div>
        <div v-if="current === 6">
          <Page4
            @next="next"
            @back="back"
            @setQuaionData="setQuaionData"
            @nextPage="nextPage"
            :innerHeight="innerHeight"
            :innerWidth="innerWidth"
            :quationsData="quationsData"
            @setAction="setAction"
            :action="action"
            :current="current"
            @setCurrent="setCurrent"
          />
        </div>
        <div v-if="current === 7">
          <Page5
            @next="next"
            @back="back"
            @setQuaionData="setQuaionData"
            @nextPage="nextPage"
            :innerHeight="innerHeight"
            :innerWidth="innerWidth"
            :quationsData="quationsData"
            @setAction="setAction"
            :action="action"
            :current="current"
            @setCurrent="setCurrent"
          />
        </div>
        <div v-if="current === 8">
          <Page6
            @next="next"
            @back="back"
            @setQuaionData="setQuaionData"
            @nextPage="nextPage"
            :innerHeight="innerHeight"
            :innerWidth="innerWidth"
            :quationsData="quationsData"
            @setAction="setAction"
            :action="action"
            :current="current"
            @setCurrent="setCurrent"
          />
        </div>
        <div v-if="current === 9">
          <Page7
            @next="next"
            @back="back"
            @setQuaionData="setQuaionData"
            @nextPage="nextPage"
            :innerHeight="innerHeight"
            :innerWidth="innerWidth"
            :quationsData="quationsData"
            @setAction="setAction"
            :action="action"
            :current="current"
            @setCurrent="setCurrent"
          />
        </div>
        <div v-if="current === 10">
          <Page8
            @next="next"
            @back="back"
            @setQuaionData="setQuaionData"
            @nextPage="nextPage"
            :innerHeight="innerHeight"
            :innerWidth="innerWidth"
            :quationsData="quationsData"
            @setAction="setAction"
            :action="action"
            :current="current"
            @setCurrent="setCurrent"
            @setIsActive="setIsActive"
          />
        </div>
        <Result
          :quationsData="quationsData"
          :innerWidth="innerWidth"
          :innerHeight="innerHeight"
          :current="current"
          :isActive_video="isActive_video"
          @restart="restart"
          :name="name"
          :phone="phone"
          :email="email"
        />

        <transition
          v-if="current >= 4"
          appear
          @before-enter="beforeEnter"
          @enter="enter"
        >
          <div
            class="line"
            v-if="current >= 2"
            :style="`width : ${innerWidth * 0.85}px; bottom : ${
              innerHeight * 0.08
            }px`"
          >
            <div
              class="line_inner"
              :style="`width : ${((current - 4) / 7) * 100}%;`"
            />
            <div class="block_test">
              <div>
                <IceCream />
              </div>
            </div>

            <div
              class="line_inner"
              :style="`width : ${
                ((11 - current) / 7) * 100
              }%;background-color : #FF99A7;`"
            />

            <div class="line_inner_font">
              <h5>{{ current - 4 }} / 7</h5>
            </div>
          </div>
        </transition>

        <div class="footer">
          <p
            class="mt-auto"
            :style="`${
              current === 11 ? 'color : transparent;' : ' color: #e87d8c;'
            }}`"
          >
            &#174; ALL RIGHTS RESERVED BY COACH. POWERED BY
            <a
              href="https://conten.tech"
              target="_blank"
              rel="noopener noreferrer"
              :style="`${
                current === 11 ? 'color : transparent;' : ' color: #e87d8c;'
              }}`"
              >CONTEN.T</a
            >
          </p>
        </div>
      </section>
    </section>

    <template #fallback>
      <div class="placeholder"></div>
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
  background-color: #e87d8c;
  height: 2px;
  border-radius: 50px;
  transition: width 0.5s;
}
.centerVertical {
  display: flex;
  align-items: center;
  width: 100vw;
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
.imgContainer_logo img {
  height: 100%;
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
  display: flex;
  flex-direction: column;
  align-content: center;
  background-color: #ffc9d3;
}
.icecream--complete {
  z-index: -1000;
}

.svgContainer_close {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
}

.float {
  animation: floating 3s ease-in-out infinite;
}

@keyframes floating {
  0% {
    transform: translate(0, 0px);
  }
  50% {
    transform: translate(0, 15px);
  }
  100% {
    transform: translate(0, -0px);
  }
}
.footer {
  position: absolute;
  bottom: 0;
  z-index: 100000000000000000;
}
.footer p {
  font-family: HelveticaLTPro-Light;
  color: #e87d8c;
  font-size: 0.7vh !important;
}
.footer a {
  font-family: HelveticaLTPro-Light;
  font-size: 0.7vh;
}
.color_white_font {
  color: white !important;
}
</style>
