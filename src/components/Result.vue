<template>
  <div class="Result">
    <video id="video" src="" />
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
  },

  methods: {},

  watch: {
    quationsData: {
      handler: function (newVal, oldVal) {
        const { quation1, quation2, quation3, quation4, quation5, quation6 } =
          newVal;
        if (
          quation1 &&
          quation2 &&
          quation3 &&
          quation4 &&
          quation5 &&
          quation6
        ) {
          let result =
            quation1 + quation2 + quation3 + quation4 + quation5 + quation6;

          let video = document.getElementById("video");
          switch (1) {
            case 1:
              video.src = `/videos/demo_01.mp4`;
              // check if video is loaded
              video.onloadeddata = function () {
                video.play();
              };
              break;
            case 2:
              window?.result2();
              break;
            case 3:
              window?.result3();
              break;
            case 4:
              window?.result4();
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

<style></style>
