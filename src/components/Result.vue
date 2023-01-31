<template>
  <div class="result">
    <button class="btn" id="download" style="display: none">DOWNLOAD</button>
  </div>
</template>
<script>
import { transcode } from "../scripts/transcoder.js";
import DemoVideo01 from "../../public/videos/demo_01.mp4";
import DemoVideo02 from "../../public/videos/demo_02.mp4";
import DemoVideo03 from "../../public/videos/demo_03.mp4";
import DemoVideo04 from "../../public/videos/demo_04.mp4";
import $ from "jquery";
const videos = [DemoVideo01, DemoVideo02, DemoVideo03, DemoVideo04];
export default {
  props: ['quizResult'],
  data() {
    return {
      result: this.quizResult,
    };
  },
  mounted() {
    console.log(this.result)
    const inputVal = this.result
    const backgroundVideo = document.createElement("video");
    backgroundVideo.style.display = "none";
    backgroundVideo.className = "background";
    backgroundVideo.autoplay = true;
    backgroundVideo.muted = true;
    backgroundVideo.playsInline = true;
    backgroundVideo.src = videos[inputVal - 1];
    $(".result").before(backgroundVideo);
    $(backgroundVideo).fadeIn(500, async () => {
      backgroundVideo.play();
      // const blob = await fetch(videos[inputVal - 1]).then((r) => r.blob());
      // transcode(blob, "crop").then((url) => {
      //   $("#app").addClass("download-ready");
      //   const downloadBtn = $("button#download");
      //   downloadBtn.fadeIn(500, () => {
      //     downloadBtn.on("click", async () => {
      //       if (navigator.share) {
      //         //  get the blob from the url
      //         const blob = await fetch(url).then((r) => r.blob());
      //         const files = [new File([blob], "demo-video.mp4", { type: "video/mp4" })];
      //         navigator.share({
      //           title: "Share Video",
      //           text: "Share Video",
      //           files: files,
      //         });
      //       }
      //     });
      //   });
      // });
    });
  },
};
</script>

<style scoped lang="scss">
// @import url(./style.scss);

.result {
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: grid;
  justify-content: center;
  align-items: center;
}

#app {
  max-width: 540px;
  min-height: 100%;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  display: grid;
  justify-content: center;
  align-items: center;

  &.download-ready::before {
    content: "";
  }
}

.btn {
  height: 2rem;
  color: black;
  border: none;
  font-weight: bold;
  border-radius: 10rem;
  background-color: white;

  &:hover {
    color: black;
    cursor: pointer;
  }

  z-index: 1;
}

#input {
  height: 4rem;
  border: none;
  text-align: center;
  font-size: larger;
}

.container {
  display: flex;
  flex-direction: column;
  //   gap: 1rem;
  justify-content: center;
  align-items: center;
  width: 100%;

  &>* {
    width: 100%;
    margin: 1rem;
  }
}

video.background {
  height: 100vh;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>
