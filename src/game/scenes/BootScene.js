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
    this.load.image("minibox", "/box_bottom.jpg");
    this.load.image("minibox_top", "/box_top.png");

    this.load.image("roof", "/roof.png");
    this.load.image("icon_icecream", "/icon-icecream.png");

    for (let i = 0; i <= 70; i++) {
      let asset_name =
        "Tabby_Card_Flip_Anim_" + "0".repeat(5 - i.toString().length) + i;
      console.log(asset_name);
      this.load.image(asset_name, "/Card_Flip/" + asset_name + ".png");
    }

    for (let i = 0; i < 5; i++) {
      let asset_name = "bag_" + "0".repeat(5 - i.toString().length) + i;
      this.load.image(asset_name, "/bag/" + asset_name + ".png");
    }

    this.load.on("complete", function () {
      window.setIsloading();

      let icecream_preloading = document.querySelector(".icecream");

      setTimeout(() => {
        icecream_preloading?.classList.add("icecream--complete");
      }, 1000);
    });
  }

  create() {
    this.scene.start("PlayScene");
  }
}
