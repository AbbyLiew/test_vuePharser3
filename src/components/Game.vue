<script setup>
import PhaserContainer from "@/components/PhaserContainer";
import PlayScene from "@/game/scenes/PlayScene";
import Page1 from "@/components/Page1";
import Page2 from "@/components/Page2";
import Page3 from "@/components/Page3";
import Page4 from "@/components/Page4";
import Page5 from "@/components/Page5";
import Page6 from "@/components/Page6";
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
        quation1: "",
        quation2: "",
        quation3: "",
        quation4: "",
        quation5: "",
        quation6: "",
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

    setQuaionData(quation, quationNumber) {
      this.quationsData[quationNumber] = quation;
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
    <section>
      <!-- if window resize -->
      <PhaserContainer />
      <section
        class="mainSection"
        style="width: 100%; height: 100%; position: absolute; top: 0; left: 0"
      >
        <div v-if="current === 1">
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
      </section>
      <Result :quationsData="quationsData" />
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
</style>
