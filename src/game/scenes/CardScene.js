import { Scene, Phaser } from "phaser";

export default class PlayScene extends Scene {
  constructor() {
    super({ key: "CardScene" });
  }

  create() {
    var x = this.sys.game.config.width / 2;
    var y = this.sys.game.config.height / 2;

    this.cardgroup = this.add.group();
    for (var i = 0; i < 8; i++) {
      this.cardgroup.create(x, y, "card");
    }
    this.cardgroup.children.iterate((child, index) => {
      child.rotation = index * -0.1;
      child.setOrigin(0.5);
      child.setInteractive();
      child.on("pointerdown", () => {
        this.rotateOriposition();
      });
    });

    this._circle = this.add
      .circle(
        this.sys.game.config.width / 2,
        this.sys.game.config.height / 2,
        50
      )
      .setDepth(-1);

    // border
    this._circle.setStrokeStyle(5, 0xffffff);
    this._circle.blendMode = "DIFFERENCE";

    // box-shadow
    this.tweens.add({
      targets: this._circle,
      radius: this.sys.game.config.height,
      ease: "fadeIn",
      duration: 900,
    });

    window.shaferCard = this.shaferCard.bind(this);
    window.rotateOriposition = this.rotateOriposition.bind(this);
    window.cardgroup = this.cardgroup;
    window.clearTween = this.clearTween.bind(this);
  }

  rotateOriposition() {
    this.cardgroup.children.iterate((child, index) => {
      this.tweens.add({
        targets: child,
        rotation: 0,
        ease: "Linear",
        duration: 700,
      });
    });

    this.shaferCard();
  }

  clearTween() {
    this.tweens.killAll();
  }

  shaferCard() {
    this.cardgroup.children.iterate((child, index) => {
      if (index % 2 == 0) {
        this.tweens.add({
          targets: child,
          y:
            this.sys.game.config.height * 0.125 * (index !== 0 ? index + 1 : 1),
          x: this.sys.game.config.width * 0.25,
          scale: 0.6,
          delay: 1000,
          onComplete: () => {
            this.tweens.add({
              targets: child,
              ease: "Linear",
              onComplete: () => {
                this.tweens.add({
                  targets: child,
                  x: this.sys.game.config.width * 0.5,
                  y: this.sys.game.config.height * 0.5,
                  rotation: -0.5,
                  scale: 1.7,
                  ease: "Linear",
                  onComplete: () => {
                    this.tweens.add({
                      targets: child,
                      rotation: 0,
                      ease: "Linear",
                      duration: 50,
                    });
                  },
                });
              },
            });
          },
        });
      } else {
        this.tweens.add({
          targets: child,
          y: this.sys.game.config.height * 0.125 * (index !== 0 ? index : 1),
          x: this.sys.game.config.width * 0.75,
          scale: 0.6,
          delay: 1000,
          onComplete: () => {
            this.tweens.add({
              targets: child,
              ease: "Linear",
              delay: 500,
              onComplete: () => {
                this.tweens.add({
                  targets: child,
                  x: this.sys.game.config.width * 0.5,
                  y: this.sys.game.config.height * 0.5,
                  rotation: 0.5,
                  scale: 1.7,
                  ease: "Linear",
                  onComplete: () => {
                    this.tweens.add({
                      targets: child,
                      rotation: 0,
                      ease: "Linear",
                      duration: 50,
                    });
                  },
                });
              },
            });
          },
        });
      }
    });
  }

  update() {}
}
