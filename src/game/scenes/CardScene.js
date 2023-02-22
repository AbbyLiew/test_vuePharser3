import { Scene, Phaser } from "phaser";

export default class PlayScene extends Scene {
  constructor() {
    super({ key: "CardScene" });
    this.current = 0;
    this.currentSellected = "";
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
      frames: this.ArrayFrame(60, 40, true),
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
    window.triggerFlipCard = this.triggerFlipCard.bind(this);
    window.reStartScene = this.reStartScene.bind(this);

    // scene switch
    window.startPinkScene = this.startPinkScene.bind(this);
    window.startYellowScene = this.startYellowScene.bind(this);
    window.startPurpleScene = this.startPurpleScene.bind(this);
    window.startChalkScene = this.startChalkScene.bind(this);
    window.startGreenScene = this.startGreenScene.bind(this);

    window.switchScene = this.switchScene.bind(this);
  }
  startPinkScene() {
    this.scene.launch("PinkScene");
    this.scene.bringToTop("PinkScene");
    // destroy the scene when it's not active
    this.scene.sleep("YellowScene");
    this.scene.sleep("PurpleScene");
    this.scene.sleep("ChalkScene");
    this.scene.sleep("GreenScene");

    this.currentSellected = "PinkScene";
  }

  startYellowScene() {
    this.scene.launch("YellowScene");
    this.scene.bringToTop("YellowScene");

    this.scene.sleep("PinkScene");
    this.scene.sleep("PurpleScene");
    this.scene.sleep("ChalkScene");
    this.scene.sleep("GreenScene");

    this.currentSellected = "YellowScene";
  }
  startPurpleScene() {
    this.scene.launch("PurpleScene");
    this.scene.bringToTop("PurpleScene");

    this.scene.sleep("PinkScene");
    this.scene.sleep("YellowScene");
    this.scene.sleep("ChalkScene");
    this.scene.sleep("GreenScene");

    this.currentSellected = "PurpleScene";
  }
  startChalkScene() {
    this.scene.launch("ChalkScene");
    this.scene.bringToTop("ChalkScene");

    this.scene.sleep("PinkScene");
    this.scene.sleep("YellowScene");
    this.scene.sleep("PurpleScene");
    this.scene.sleep("GreenScene");

    this.currentSellected = "ChalkScene";
  }
  startGreenScene() {
    this.scene.launch("GreenScene");
    this.scene.bringToTop("GreenScene");

    this.scene.sleep("PinkScene");
    this.scene.sleep("YellowScene");
    this.scene.sleep("PurpleScene");
    this.scene.sleep("ChalkScene");

    this.currentSellected = "GreenScene";
  }

  reStartScene() {
    // destroy the scene
    switch (this.currentSellected) {
      case "PinkScene":
        this.scene.get("PinkScene").resetScene();
        this.scene.stop("PinkScene");
        break;
      case "YellowScene":
        console.log("YellowScene reset");
        this.scene.get("YellowScene").resetScene();
        this.scene.stop("YellowScene");
        break;
      case "PurpleScene":
        this.scene.get("PurpleScene").resetScene();
        this.scene.stop("PurpleScene");
        break;
      case "ChalkScene":
        this.scene.get("ChalkScene").resetScene();
        this.scene.stop("ChalkScene");
        break;
      case "GreenScene":
        this.scene.get("GreenScene").resetScene();
        this.scene.stop("GreenScene");
        break;
    }
    this.scene.sleep("PinkScene");
    this.scene.sleep("YellowScene");
    this.scene.sleep("PurpleScene");
    this.scene.sleep("ChalkScene");
    this.scene.sleep("GreenScene");

    this.currentSellected = "";
    this.cardGroup.clear(true, true);

    this.triggerAnimation();
  }

  switchScene() {
    switch (this.currentSellected) {
      case "PinkScene":
        const PinkScene = this.scene.get("PinkScene");
        PinkScene.vidioFadeIn();
        break;
      case "YellowScene":
        const YellowScene = this.scene.get("YellowScene");
        YellowScene.vidioFadeIn();
        break;
      case "PurpleScene":
        const PurpleScene = this.scene.get("PurpleScene");
        PurpleScene.vidioFadeIn();
        break;
      case "ChalkScene":
        const ChalkScene = this.scene.get("ChalkScene");
        ChalkScene.vidioFadeIn();
        break;
      case "GreenScene":
        const GreenScene = this.scene.get("GreenScene");
        GreenScene.vidioFadeIn();
        break;
    }
  }

  triggerAnimation() {
    var x = this.sys.game.config.width / 2;
    var y = this.sys.game.config.height * 0.465;

    for (let i = 0; i < 8; i++) {
      this.cardGroup.create(x, y, "Tabby_Card_Flip_Anim_00000");
      this.cardHeight = (this.cardGroup.children.entries[i].height * 11) / 16;
      let _ratio = (this.sys.game.config.height * 0.45) / this.cardHeight;
      this.cardGroup.children.entries[i].scale = _ratio;
      this.cardGroup.children.entries[i].rotation = (7 - i) * -0.21;
    }

    this.cardGroup.children.entries.forEach((card, index) => {
      this.tweens.add({
        targets: card,
        ease: "Power1",
        rotation: 0,
        duration: 1000,
        delay: 750,
      });
    });
    this.cardGroup.children.entries.forEach((card, index) => {
      this.tweens.add({
        targets: card,
        ease: "Power1",
        scale: (this.sys.game.config.height * 0.6) / this.cardHeight,
        delay: 1750,
      });
    });
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
      let _ratio = (this.sys.game.config.height * 0.16) / this.cardHeight;

      let _x;
      let _y;
      if (index % 2 === 0) {
        _x = this.sys.game.config.width / 2 - (card.width * _ratio * 5) / 11;
        _y =
          this.sys.game.config.height * 0.25 +
          (index * this.cardHeight * _ratio * 10) / 16;
      } else {
        _x = this.sys.game.config.width / 2 + (card.width * _ratio * 5) / 11;
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
    // this.tweens.add({
    //   targets: this.logo,
    //   ease: "Power1",
    //   y: this.sys.game.config.height * 0.1,
    //   duration: 1000,
    //   scale: (this.sys.game.config.height * 0.1) / this.logo.height,
    // });

    this.cardGroup.children.entries.forEach((card, index) => {
      let _ratio = (this.sys.game.config.height * 0.6) / this.cardHeight;
      this.tweens.add({
        targets: card,
        rotation: 0,
        scale: _ratio,
        x: this.sys.game.config.width / 2,
        y: this.sys.game.config.height * 0.465,
        ease: "Power2",
        duration: 1000,
      });
    });
  }

  triggerFlipCard() {
    this.cardGroup.children.entries.forEach((card, index) => {
      let _ratio = (this.sys.game.config.height * 0.6) / this.cardHeight;
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
        duration: 500,
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
        arr.push({
          key: "Tabby_Card_Flip_Anim_" + i.toString().padStart(5, "0"),
        });
      }
      return arr;
    } else {
      let arr = [];
      for (let i = start; i <= end; i++) {
        arr.push({
          key: "Tabby_Card_Flip_Anim_" + i.toString().padStart(5, "0"),
        });
      }
      return arr;
    }
  }

  setCurrent(current) {
    this.current = current;
  }

  update() {}
}
