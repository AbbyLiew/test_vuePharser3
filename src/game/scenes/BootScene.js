console.clear();
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
    this.load.image("startButton", startButton);
    this.load.image("logo", "/logo.png");
    for (let i = 0; i <= 100; i++) {
      let asset_name = "Card_Flip_" + "0".repeat(5 - i.toString().length) + i;
      this.load.image(asset_name, "/Card_Flip/" + asset_name + ".png");
    }
  }

  create() {
    this.scene.start("PlayScene");
  }
}
