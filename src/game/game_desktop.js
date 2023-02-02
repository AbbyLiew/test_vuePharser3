import Phaser from "phaser";
import BootScene from "@/game/scenes/BootScene";
import PlayScene from "@/game/scenes/PlayScene";
import CardScene from "@/game/scenes/CardScene";
function launch(containerId) {
  return new Phaser.Game({
    type: Phaser.AUTO,
    parent: containerId,
    backgroundColor: "#FEDDE0",
    width: 750,
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
    scene: [BootScene, PlayScene, CardScene],
  });
}

export default launch;
export { launch };
