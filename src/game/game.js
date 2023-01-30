import Phaser from "phaser";
import BootScene from "@/game/scenes/BootScene";
import PlayScene from "@/game/scenes/PlayScene";
import CardScene from "@/game/scenes/CardScene";
function launch(containerId) {
  return new Phaser.Game({
    type: Phaser.AUTO,
    parent: containerId,
    backgroundColor: "#f29799",
    width: window.innerWidth * window.devicePixelRatio,
    height: window.innerHeight * window.devicePixelRatio,
    backgroundColor: "#f29799",
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
