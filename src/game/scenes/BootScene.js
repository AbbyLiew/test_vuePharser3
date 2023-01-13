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
    // loading progress
    this.load.on("progress", (value) => {
      console.log(value);
    });
  }

  create() {
    this.scene.start("PlayScene");
  }
}
