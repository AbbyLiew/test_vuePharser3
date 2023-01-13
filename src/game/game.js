import Phaser from "phaser";
import BootScene from "@/game/scenes/BootScene";
import PlayScene from "@/game/scenes/PlayScene";

function launch(containerId) {
  return new Phaser.Game({
    type: Phaser.AUTO,
    parent: containerId,
    backgroundColor: "#f29799",
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: "#f29799",
    mipmapFilter: "LINEAR_MIPMAP_LINEAR",
    scale: {
      autoCenter: Phaser.Scale.CENTER_BOTH,
      mode: Phaser.Scale.FIT,
    },
    render: { pixelArt: true, antialias: false },
    scene: [BootScene, PlayScene],
  });
  C;
}

export default launch;
export { launch };
