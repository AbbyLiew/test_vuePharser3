<template>
  <div
    class="Result"
    :style="`height : ${innerHeight}px; width : ${innerWidth}px;`"
  >
    <video
      autoplay
      playsinline
      id="resultVideo"
      :style="`height : ${innerHeight}px; width : ${innerWidth}px;`"
    >
      <source type="video/mp4" />
    </video>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  props: {
    quationsData: {
      type: Array,
      default: () => [],
    },
    innerWidth: {
      type: Number,
      default: 0,
    },
    innerHeight: {
      type: Number,
      default: 0,
    },
  },

  methods: {},

  watch: {
    quationsData: {
      handler: function (newVal, oldVal) {
        const { quation1, quation2, quation3, quation4, quation5, quation6 } =
          newVal;
        console.log(quation1, quation2, quation3, quation4, quation5, quation6);
        if (quation1) {
          let result =
            quation1 + quation2 + quation3 + quation4 + quation5 + quation6;

          switch (result) {
            case "AAAAAA":
              result = 1;
              break;
            case "BBBBBB":
              result = 2;
              break;
            case "CCCCCC":
              result = 3;
              break;
            case "DDDDDD":
              result = 4;
              break;
            default:
              result = Math.floor(Math.random() * 4) + 1;
              break;
          }

          let video = document.getElementById("resultVideo");
          let container = document.querySelector(".Result");
          switch (result) {
            case 1:
              video.src = `/videos/demo_01.mp4`;
              // check if video is loaded
              video.onloadeddata = function () {
                video.play();
              };
              break;
            case 2:
              video.src = `/videos/demo_02.mp4`;
              // check if video is loaded
              video.onloadeddata = function () {
                video.play();
              };
              break;
            case 3:
              video.src = `/videos/demo_03.mp4`;
              // check if video is loaded
              video.onloadeddata = function () {
                video.play();
              };
              break;
            case 4:
              video.src = `/videos/demo_04.mp4`;
              // check if video is loaded
              video.onloadeddata = function () {
                video.play();
              };
              break;
          }
        }
      },
      deep: true,
    },
  },
  mounted() {},
};
</script>

<style>
.Result {
  position: absolute;
  z-index: -10;
  overflow: hidden;
  opacity: 0;
  transition: all 1s ease-in-out;
}
#resultVideo {
  object-fit: cover;
}
</style>
