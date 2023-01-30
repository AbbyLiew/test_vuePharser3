console.clear();

import { Scene } from "phaser";

export default class PlayScene extends Scene {
  constructor() {
    super({ key: "PlayScene" });
    this.lorry = null;
    // get the width and height of the game
    // this.width = this.sys.game.config.width;
    // this.height = this.sys.game.config.height;
  }

  create() {
    this.lorry = this.add.image(
      this.sys.game.config.width + 300,
      (this.sys.game.config.height / 4) * 3.8,
      "lorry"
    );

    this.lorry.setOrigin(1, 1);
    this.lorry.scale = (this.sys.game.config.height * 0.4) / this.lorry.height;

    this.tweens.add({
      targets: this.lorry,
      x: (this.sys.game.config.width / 12) * 11,
      ease: "Linear",
      duration: 1000,
    });

    this.tweens.add({
      targets: this.btn,
      alpha: 1,
      ease: "Linear",
    });
    this._rectangle = this.add.rectangle({
      x: this.sys.game.config.width / 2,
      y: this.sys.game.config.height / 2,
      width: this.sys.game.config.width,
      height: this.sys.game.config.height,
      fillStyle: {
        color: 0xffb6be,
      },
    });

    // create a broad
    this.broad = this.add.rectangle(
      this.sys.game.config.width / 2,
      (this.sys.game.config.height / 5) * 4,
      this.sys.game.config.width,
      this.sys.game.config.height * 0.2,
      0xffb6be
    );
    this.broad.setOrigin(0.5, 0);
    this.broad.setDepth(-1);

    window.startGame = this.startGame.bind(this);

    this.lorry.setInteractive();
    this.lorry.on("pointerdown", () => {
      this.startGame();
    });
  }

  startGame() {
    // scene fade in
    this.scene.transition({ target: "CardScene", duration: 100 });
  }

  update() {}
}
