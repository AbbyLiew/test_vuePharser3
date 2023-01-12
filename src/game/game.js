import Phaser from "phaser";
import BootScene from "@/game/scenes/BootScene";
import PlayScene from "@/game/scenes/PlayScene";

function launch(containerId) {
  return new Phaser.Game({
    type: Phaser.AUTO,
    parent: containerId,
    width: 900,
    height: 1600,
    mipmapFilter: "LINEAR_MIPMAP_LINEAR",
    scale: {
      autoCenter: Phaser.Scale.CENTER_BOTH,
      mode: Phaser.Scale.FIT,
    },
    render: { pixelArt: true, antialias: false },
    scene: [BootScene, PlayScene],
  });
}

export default launch;
export { launch };
