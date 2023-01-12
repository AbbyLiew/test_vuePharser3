import { Scene } from "phaser";
import sky from "@/game/assets/sky.png";
import bomb from "@/game/assets/bomb.png";
import thudMp3 from "@/game/assets/thud.mp3";
import thudOgg from "@/game/assets/thud.ogg";
import book from "@/game/assets/book.mp4";
export default class BootScene extends Scene {
  constructor() {
    super({ key: "BootScene" });
  }

  preload() {
    this.load.image("sky", sky);
    this.load.image("bomb", bomb);
    this.load.audio("thud", [thudMp3, thudOgg]);
    this.load.video("book", book);

    // loading progress
    this.load.on("progress", (value) => {
      console.log(value);
    });
    // assets is loaded
    this.load.on("complete", () => {
      // delay 1 second to show the loading progress
      setTimeout(() => {
        window.bookZoomIn();
      }, 1000);
    });
  }

  create() {
    this.scene.start("PlayScene");
  }
}
