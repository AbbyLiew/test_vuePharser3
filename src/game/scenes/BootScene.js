import { Scene } from "phaser";

import COACHlorry from "@/game/assets/COACHlorry.png";
import Card from "@/game/assets/Card.png";
import startButton from "@/game/assets/Startbutton.png";
export default class BootScene extends Scene {
  constructor() {
    super({ key: "BootScene" });
  }

  preload() {
    this.load.image("lorry", COACHlorry);
    this.load.image("card", Card);
    this.load.image("startButton", startButton);
    // loading progress
    this.load.on("progress", (value) => {
      console.log(value);
    });
  }

  create() {
    this.scene.start("PlayScene");
  }
}
