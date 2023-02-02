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
import Result from "@/components/Result";
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
    };
  },
  methods: {
    nextPage() {
      window?.startGame();
      this.current++;
    },
    next() {
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
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.innerHeight = window.innerHeight;
      this.innerWidth = window.innerWidth;
    });
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
        <div v-if="current === 1">
          <h1>{{ preload_progress }}</h1>
          <Page1
            @nextPage="nextPage"
            :innerHeight="innerHeight"
            :innerWidth="innerWidth"
          />
        </div>
        <div v-if="current === 2">
          <Page2
            @next="next"
            @back="back"
            @setQuaionData="setQuaionData"
            :innerHeight="innerHeight"
            :innerWidth="innerWidth"
          />
        </div>
        <div v-if="current === 3">
          <Page3
            @next="next"
            @back="back"
            @setQuaionData="setQuaionData"
            :innerHeight="innerHeight"
            :innerWidth="innerWidth"
          />
        </div>
        <div v-if="current === 4">
          <Page4
            @next="next"
            @back="back"
            @setQuaionData="setQuaionData"
            :innerHeight="innerHeight"
            :innerWidth="innerWidth"
          />
        </div>
        <div v-if="current === 5">
          <Page5
            @next="next"
            @back="back"
            @setQuaionData="setQuaionData"
            :innerHeight="innerHeight"
            :innerWidth="innerWidth"
          />
        </div>
        <div v-if="current === 6">
          <Page6
            @next="next"
            @back="back"
            @setQuaionData="setQuaionData"
            :innerHeight="innerHeight"
            :innerWidth="innerWidth"
          />
        </div>
        <div v-if="current === 7">
          <Page7
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
        />

        <div
          class="line"
          v-if="current >= 2"
          :style="`width : ${innerWidth * 0.85}px; bottom : ${
            innerHeight * 0.05
          }px`"
        >
          <div
            class="line_inner"
            :style="`width : ${((current - 1) / 8) * 100}%;`"
          />
          <div class="block_test">
            <img src="/IceCreamIcon.png" alt="" />
          </div>
        </div>
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
  height: 3px;
  display: flex;
  align-items: center;
}
.line_inner {
  background-color: #e76163;
  height: 4px;
  transition: width 0.5s;
}
.block_test {
  width: 20px;
  height: fit-content;
  img {
    width: 100%;
  }
}
</style>
