console.clear();

import { Scene, Phaser } from "phaser";

export default class PlayScene extends Scene {
  constructor() {
    super({ key: "CardScene" });
    this.current = 0;
  }

  create() {
    this.logo = this.add.image(
      this.sys.game.config.width / 2,
      this.sys.game.config.height * 0.1,
      "logo"
    );

    // create sprite sheet animation
    this.anims.create({
      key: "flip_card",
      frames: this.ArrayFrame(1, 20, false),
      frameRate: 30,
      repeat: 0,
    });

    this.anims.create({
      key: "flip_card_reverse",
      frames: this.ArrayFrame(20, 1, true),
      frameRate: 30,
      repeat: 0,
    });

    this.anims.create({
      key: "empty_card_flip",
      frames: this.ArrayFrame(40, 60, false),
      frameRate: 30,
      repeat: 0,
    });

    this.anims.create({
      key: "empty_card_flip_reverse",
      frames: this.ArrayFrame(40, 60, true),
      frameRate: 30,
      repeat: 0,
    });

    // create sprite
    this.cardGroup = this.add.group();
    //

    // global scope
    window.cardGroup = this.cardGroup;
    window.flipCard = this.flipCard.bind(this);
    window.cardAimationFlow2 = this.cardAimationFlow2.bind(this);
    window.cardaAimationFlow1 = this.cardaAimationFlow1.bind(this);
    window.backToinitPosition = this.backToinitPosition.bind(this);
    window.flipCard_empty = this.flipCard_empty.bind(this);
    window.flipCard_empty_reverse = this.flipCard_empty_reverse.bind(this);
    window.setCurrent = this.setCurrent.bind(this);
    window.triggerAnimation = this.triggerAnimation.bind(this);
  }

  triggerAnimation() {
    var x = this.sys.game.config.width / 2;
    var y = this.sys.game.config.height / 2;

    for (let i = 0; i < 8; i++) {
      this.cardGroup.create(x, y, "Card_Flip_Ans_00000");
      this.cardHeight = (this.cardGroup.children.entries[i].height * 11) / 16;
      let _ratio = (this.sys.game.config.height * 0.3) / this.cardHeight;
      this.cardGroup.children.entries[i].scale = _ratio;
      this.tweens.add({
        targets: this.cardGroup.children.entries[i],
        rotation: -0.4 * (i + 1),
        ease: "Power1",
        duration: 500,
      });

      this.time.addEvent({
        delay: 800,
        callback: () => {
          this.cardaAimationFlow1();
        },
      });

      this.time.addEvent({
        delay: 2500,
        callback: () => {
          this.cardAimationFlow2();
        },
      });
    }
  }

  flipCard() {
    this.cardGroup.children.entries[7].play("flip_card");
  }
  flipCard_empty() {
    this.cardGroup.children.entries[7].play("empty_card_flip");
  }

  flipCard_empty_reverse() {
    this.cardGroup.children.entries[7].play("empty_card_flip_reverse");
  }

  cardaAimationFlow1() {
    this.tweens.add({
      targets: this.logo,
      ease: "Power1",
      y: this.logo.y - 50,
      duration: 1000,
      scale: (this.sys.game.config.height * 0.1) / this.logo.height,
    });

    this.cardGroup.children.entries.forEach((card, index) => {
      let _ratio = (this.sys.game.config.height * 0.14) / this.cardHeight;

      let _x;
      let _y;
      if (index % 2 === 0) {
        _x = this.sys.game.config.width / 2 - (card.width * _ratio * 8) / 11;
        _y =
          this.sys.game.config.height * 0.25 +
          (index * this.cardHeight * _ratio * 10) / 16;
      } else {
        _x = this.sys.game.config.width / 2 + (card.width * _ratio * 8) / 11;
        _y =
          this.sys.game.config.height * 0.25 +
          ((index - 1) * this.cardHeight * _ratio * 10) / 16;
      }

      this.tweens.add({
        targets: card,
        rotation: 0,
        scale: _ratio,
        x: _x,
        y: _y,
        rotate3d: { z: 10 },
        ease: "Power1",
        duration: 1000,
        // onComplete: () => {
        //   this.time.addEvent({
        //     delay: 100 * index,
        //     callback: () => {
        //       card.play("flip_card");
        //       this.time.addEvent({
        //         delay: 2000,
        //         callback: () => {
        //           card.play("flip_card_reverse");
        //         },
        //       });
        //     },
        //   });
        // },
      });
    });
  }

  backToinitPosition() {
    let _ratio = (this.sys.game.config.height * 0.5) / this.cardHeight;

    this.cardGroup.children.entries.forEach((card, index) => {
      this.tweens.add({
        targets: card,
        scale: _ratio,
        x: this.sys.game.config.width / 2,
        y: this.sys.game.config.height * 0.4,
        ease: "Power1",
        duration: 1000,
        onComplete: () => {
          if (index === 7) {
            this.cardGroup.children.entries[7].play("flip_card");
          }
        },
      });
    });
  }

  cardAimationFlow2() {
    this.tweens.add({
      targets: this.logo,
      ease: "Power1",
      y: this.sys.game.config.height * 0.1,
      duration: 1000,
      scale: (this.sys.game.config.height * 0.1) / this.logo.height,
    });

    this.cardGroup.children.entries.forEach((card, index) => {
      let _ratio = (this.sys.game.config.height * 0.55) / this.cardHeight;
      this.tweens.add({
        targets: card,
        rotation: 0,
        scale: _ratio,
        x:
          this.sys.game.config.width / 2 -
          (this.cardGroup.children.entries.length - 1 - index) * 5,
        y:
          this.sys.game.config.height * 0.465 +
          (this.cardGroup.children.entries.length - 1 - index) * 2.5,
        ease: "Power2",
        duration: 1000,
        onComplete: () => {
          this.cardGroup.children.entries[7].play("flip_card");
        },
      });
    });
  }

  ArrayFrame(start, end, reverse) {
    if (reverse) {
      let arr = [];
      for (let i = start; i >= end; i--) {
        arr.push({ key: "Card_Flip_Ans_" + i.toString().padStart(5, "0") });
      }
      return arr;
    } else {
      let arr = [];
      for (let i = start; i <= end; i++) {
        arr.push({ key: "Card_Flip_Ans_" + i.toString().padStart(5, "0") });
      }
      return arr;
    }
  }

  setCurrent(current) {
    this.current = current;
  }

  update() {}
}
