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

    this.btn = this.add.image(
      this.sys.game.config.width / 2,
      this.sys.game.config.height / 2,
      "startButton"
    );
    this.btn.scale = 0.4;
    this.btn.alpha = 0;

    this.btn.setInteractive();
    this.btn.on("pointerdown", () => {
      this.startGame();
    });

    this.lorry.setOrigin(1, 1);

    this.tweens.add({
      targets: this.lorry,
      x: (this.sys.game.config.width / 12) * 11.9,
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
  }

  startGame() {
    this._circle = this.add.circle(
      this.sys.game.config.width / 2,
      this.sys.game.config.height / 2,
      50
    );

    // border
    this._circle.setStrokeStyle(10, 0xffffff);
    this.tweens.add({
      targets: this._circle,
      radius: this.sys.game.config.height,
      ease: "fadeIn",
      duration: 900,
      onComplete: () => {
        this._circle.destroy();
      },
    });
    this.scene.transition({ target: "CardScene", duration: 260 });
  }

  update() {}
}
