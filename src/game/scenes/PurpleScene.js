import { Scene, Phaser } from "phaser";
import gsap from "gsap";
export default class PurpleScene extends Scene {
  constructor() {
    super({ key: "PurpleScene" });
    this.acc = 0;
    this.video = null;

    this.playedCard1 = false;
    this.playedCard2 = false;
    this.playedCard3 = false;
  }
  resetScene() {
    this.playedCard1 = false;
    this.playedCard2 = false;
    this.playedCard3 = false;

    this.hand.setAlpha(0);
    this.hand_white.setAlpha(0);
    this.video.setAlpha(0);
    this.sprite.setAlpha(0);
  }
  preload() {
    for (let i = 23; i < 84; i++) {
      let assetname = "PurpleSET26_" + i.toString().padStart(3, "0");

      this.load.image(
        "PurpleSet_" + i,
        "/pop-up/videos/sequance_purple/" + assetname + ".jpg"
      );
    }
    this.load.video(
      "purple",
      "/pop-up/videos/purple_01.mp4",
      "loadeddata",
      false,
      true
    );
    this.load.image("hand_violet", "/pop-up/icon/lightviolet.png");
    this.load.image("hand_white", "/pop-up/icon/white.png");
  }

  horizontalMove(target) {
    this.tweens.add({
      targets: target,
      ease: "Linear",
      loop: -1,
      yoyo: true,
      x: this.sys.game.config.width * 0.44,
    });
  }

  vidioFadeIn() {
    this.tweens.add({
      targets: this.video,
      alpha: 1,
      duration: 1000,
      ease: "Linear",
      delay: 500,
      onComplete: () => {
        this.video.play(false, 0, 10);

        this.video.on("complete", () => {
          this.sprite.setAlpha(1);
          this.sprite.setDepth(2);

          this.hand.setDepth(3);
          this.hand.setAlpha(1);

          this.horizontalMove(this.hand);
        });
      },
    });
  }

  ArrayFrame(start, end, reverse) {
    if (reverse) {
      let arr = [];
      for (let i = start; i >= end; i--) {
        arr.push({ key: "PurpleSet_" + i });
      }
      return arr;
    } else {
      let arr = [];
      for (let i = start; i <= end; i++) {
        arr.push({ key: "PurpleSet_" + i });
      }
      return arr;
    }
  }
  create() {
    this.addSprite();
    this.hand = this.add.image(0, 0, "hand_violet");
    this.hand.setScale((this.sys.game.config.height * 0.08) / this.hand.height);
    this.hand.setPosition(
      this.sys.game.config.width * 0.6,
      this.sys.game.config.height * 0.68
    );

    this.hand_white = this.add.image(0, 0, "hand_white");
    this.hand_white.setScale(
      (this.sys.game.config.height * 0.08) / this.hand_white.height
    );
    this.hand_white.setPosition(
      this.sys.game.config.width * 0.6,
      this.sys.game.config.height * 0.68
    );
    this.hand_white.setAlpha(0);
    this.hand_white.setDepth(3);

    this.hand_white2 = this.add.image(0, 0, "hand_white");
    this.hand_white2.setScale(
      (this.sys.game.config.height * 0.08) / this.hand_white2.height
    );
    this.hand_white2.setPosition(
      this.sys.game.config.width * 0.6,
      this.sys.game.config.height * 0.68
    );
    this.hand_white2.setAlpha(0);
    this.hand_white2.setDepth(3);

    this.hand.setDepth(3);
    this.hand.setAlpha(0);

    this.video = this.add.video(0, 0, "purple");
    this.video.setAlpha(1);

    this.video.setDisplaySize(
      this.sys.game.config.height,
      this.sys.game.config.height
    );
    this.video.setPosition(
      this.sys.game.config.width / 2,
      this.sys.game.config.height / 2
    );

    this.video.setDepth(1);
    this.video.setAlpha(0);
    this.video.stop();

    // loading assets after preload
    // this.load.on("complete", () => {
  }

  addSprite() {
    this.anims.create({
      key: "play_card1_purple",
      frames: this.ArrayFrame(23, 50, false),
      frameRate: 30,
      repeat: 0,
    });

    this.anims.create({
      key: "play_card1_reverse_purple",
      frames: this.ArrayFrame(42, 23, false),

      frameRate: 30,
      repeat: 0,
    });

    this.anims.create({
      key: "play_card2_purple",
      frames: this.ArrayFrame(65, 83, false),
      frameRate: 45,
      repeat: 0,
    });

    this.anims.create({
      key: "play_card2_reverse_purple",
      frames: this.ArrayFrame(83, 52, true),
      frameRate: 45,
      repeat: 0,
    });

    this.sprite = this.add.sprite(0, 0, "PurpleSet_23");

    this.sprite.setDisplaySize(
      window.innerHeight * devicePixelRatio,
      window.innerHeight * devicePixelRatio
    );

    this.sprite.setPosition(
      this.sys.game.config.width / 2,
      this.sys.game.config.height / 2
    );

    this.sprite.setDepth(-1);
    this.sprite.alpha = 0;
    window.sprite = this.sprite;

    this.sprite.setInteractive({
      draggable: true,
    });

    this.sprite.on("dragend", (e) => {
      // check sprite is playing
      if (this.sprite.anims.isPlaying) {
        return;
      }
      if (e.downX >= e.x) {
        if (this.playedCard1 === false) {
          this.sprite.anims.play("play_card1_purple");
          this.playedCard1 = true;
          this.hand.destroy();
          this.sprite.on("animationcomplete", () => {
            this.hand_white.setAlpha(0);
            this.horizontalMove(this.hand_white);
          });
        } else if (this.playedCard2 === false) {
          this.sprite.anims.play("play_card2_purple");
          this.hand_white.destroy();
          this.playedCard2 = true;
          this.sprite.on("animationcomplete", () => {
            this.hand_white2.setAlpha(0);
            this.horizontalMove(this.hand_white2);
          });
        } else if (this.playedCard3 === false) {
          this.hand_white2.destroy();
          gsap.to("#game-container", {
            zIndex: -10,
          });
          gsap.to(".Result", {
            zIndex: 10,
            opacity: 1,
            duration: 0.5,
          });
          // gsap.to(".popupModal", {
          //   opacity: 1,
          //   delay: 2.5,
          // });
        }
      } else if (e.downX < e.x) {
        if (this.playedCard2 === true) {
          this.sprite.anims.play("play_card2_reverse_purple");
          console.log("play_card2_reverse");
          this.playedCard2 = false;
          this.hand_white2.destroy();

          this.hand.setAlpha(0);
        } else if (this.playedCard1 === true) {
          this.sprite.anims.play("play_card1_reverse_purple");
          this.playedCard1 = false;
          this.hand_white.destroy();

          this.hand.setAlpha(0);
          console.log("play_card1_reverse");
        }
      }
    });
  }
}
