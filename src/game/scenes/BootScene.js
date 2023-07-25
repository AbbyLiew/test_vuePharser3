import { Scene } from "phaser";
export default class BootScene extends Scene {
  constructor() {
    super({ key: "BootScene" });
  }

  preload() {
    this.load.image("logo", "/outlet/logo.png");
    this.load.image("minibox", "/outlet/box_bottom.jpg");
    this.load.image("minibox_top", "/outlet/box_top.png");

    this.load.image("roof", "/outlet/roof.png");
    this.load.image("icon_icecream", "/outlet/icon-icecream.png");

    for (let i = 0; i <= 60; i++) {
      let asset_name =
        "Tabby_Card_Flip_Anim_" + "0".repeat(5 - i.toString().length) + i;
      this.load.image(asset_name, "/outlet/Card_Flip/" + asset_name + ".png");
    }

    for (let i = 0; i < 5; i++) {
      let asset_name = "bag_" + "0".repeat(5 - i.toString().length) + i;
      this.load.image(asset_name, "/outlet/bag/" + asset_name + ".png");
    }

    this.load.on("complete", function () {
      window.setIsloading();
      let icecream_preloading = document.querySelector(".icecream");

      setTimeout(() => {
        icecream_preloading?.classList.add("icecream--complete");
      }, 1000);
    });
  }

  startCardScene() {
    this.scene.start("CardScene");
  }

  create() {
    if (window.localStorage.getItem("current")) {
      this.scene.start("CardScene");
    } else {
      this.scene.start("PlayScene");
    }
  }
}
