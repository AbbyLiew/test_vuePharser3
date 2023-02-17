import Phaser from "phaser";
import BootScene from "@/game/scenes/BootScene";
import PlayScene from "@/game/scenes/PlayScene";
import CardScene from "@/game/scenes/CardScene";
import PinkScene from "@/game/scenes/PinkScene";
import YellowScene from "@/game/scenes/YellowScene";
import PurpleScene from "@/game/scenes/PurpleScene";
import GreenScene from "@/game/scenes/GreenScene";
import ChalkScene from "@/game/scenes/ChalkScene";

function launch(containerId) {
  return new Phaser.Game({
    type: Phaser.AUTO,
    parent: containerId,
    backgroundColor: "#FEDDE0",
    width: 900,
    height: window.innerHeight * window.devicePixelRatio,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    // auto resize
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    mipmapFilter: "NEAREST_MIPMAP_LINEAR",
    pixelArt: false,
    scale: {
      autoCenter: Phaser.Scale.CENTER_BOTH,
      mode: Phaser.Scale.FIT,
    },
    render: { pixelArt: false, antialias: false },
    scene: [
      BootScene,
      PurpleScene,
      YellowScene,
      PlayScene,
      CardScene,
      PinkScene,
      GreenScene,
      ChalkScene,
    ],
  });
}

export default launch;
export { launch };
