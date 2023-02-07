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
    this.load.image("logo", "/logo.png");
    this.load.image("blue_bag", "/bag/blue_bag.png");
    this.load.image("pink_bag", "/bag/pink_bag.png");
    this.load.image("white_bag", "/bag/white_bag.png");
    this.load.image("yellow_bag", "/bag/yellow_bag.png");
    this.load.image("purple_bag", "/bag/purple_bag.png");
    this.load.image("minibox", "/box_bottom.jpg");
    this.load.image("minibox_top", "/box_top.png");

    this.load.image("roof", "/roof.png");
    this.load.image("icon_icecream", "/icon-icecream.png");

    for (let i = 0; i <= 70; i++) {
      let asset_name =
        "Card_Flip_Ans_" + "0".repeat(5 - i.toString().length) + i;
      this.load.image(asset_name, "/Card_Flip_Ans_02/" + asset_name + ".png");
    }

    for (let i = 0; i < 5; i++) {
      let asset_name = "bag_" + "0".repeat(5 - i.toString().length) + i;
      this.load.image(asset_name, "/bag/" + asset_name + ".png");
    }

    var progress = this.add.graphics();

    this.load.on("progress", function (value) {
      progress.clear();
      progress.fillStyle(0xffffff, 1);
      progress.fillRect(0, 270, 800 * value, 60);
    });

    this.load.on("complete", function () {
      progress.destroy();
      window.setIsloading();
    });
  }

  create() {
    this.scene.start("PlayScene");
  }
}
