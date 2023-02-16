import { Scene, Phaser } from "phaser";
import gsap from "gsap";
export default class PinkScene extends Scene {
  constructor() {
    super({ key: "PinkScene" });
    this.acc = 0;
    this.video = null;

    this.playedCard1 = false;
    this.playedCard2 = false;
    this.playedCard3 = false;
  }
  preload() {
    for (let i = 300; i < 420; i++) {
      this.load.image(
        "pinkset_" + i,
        "/videos/sequance_pink/" + "pinkset_" + i + ".jpg"
      );
    }
    this.load.video("pink", "/videos/Pink_01.mp4", "loadeddata", false, true);
    this.load.image("hand", "/icon/pink.png");
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
          this.tweens.timeline({
            targets: this.hand,
            ease: "Power4",
            loop: -1,
            tweens: [
              {
                x: this.sys.game.config.width * 0.42,
                duration: 2000,
              },
              {
                x: this.sys.game.config.width * 0.63,
                duration: 1000,
              },
            ],
          });
        });
      },
    });
  }

  ArrayFrame(start, end, reverse) {
    if (reverse) {
      let arr = [];
      for (let i = start; i >= end; i--) {
        arr.push({ key: "pinkset_" + i });
      }
      return arr;
    } else {
      let arr = [];
      for (let i = start; i <= end; i++) {
        arr.push({ key: "pinkset_" + i });
      }
      return arr;
    }
  }
  create() {
    this.addSprite();
    this.hand = this.add.image(0, 0, "hand");
    this.hand.setDisplaySize(
      window.innerHeight * devicePixelRatio * 0.09,
      window.innerHeight * devicePixelRatio * 0.09
    );
    this.hand.setPosition(
      this.sys.game.config.width * 0.58,
      this.sys.game.config.height * 0.7
    );

    this.hand.setDepth(3);
    this.hand.setAlpha(0);

    window.hand = this.hand;

    this.video = this.add.video(0, 0, "pink");
    this.video.setAlpha(0);

    window.video = this.video;
    window.video_reverse = this.video_reverse;
    this.video.setDisplaySize(
      window.innerHeight * devicePixelRatio,
      window.innerHeight * devicePixelRatio
    );
    this.video.setPosition(
      this.sys.game.config.width / 2,
      this.sys.game.config.height / 2
    );

    this.video.setDepth(1);
    this.video.setAlpha(0);

    // loading assets after preload
    // this.load.on("complete", () => {
  }

  addSprite() {
    this.anims.create({
      key: "play_card1",
      frames: this.ArrayFrame(328, 350, false),
      frameRate: 30,
      repeat: 0,
    });

    this.anims.create({
      key: "play_card1_reverse",
      frames: this.ArrayFrame(342, 310, true),
      frameRate: 30,
      repeat: 0,
    });

    this.anims.create({
      key: "play_card2",
      frames: this.ArrayFrame(365, 383, false),
      frameRate: 45,
      repeat: 0,
    });

    this.anims.create({
      key: "play_card2_reverse",
      frames: this.ArrayFrame(383, 352, true),
      frameRate: 45,
      repeat: 0,
    });

    this.sprite = this.add.sprite(0, 0, "pinkset_300");

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
        if (this.hand.alpha === 1) {
          this.hand.setAlpha(0);
        }

        if (this.playedCard1 === false) {
          this.sprite.anims.play("play_card1");
          this.playedCard1 = true;
        } else if (this.playedCard2 === false) {
          this.sprite.anims.play("play_card2");
          this.playedCard2 = true;
        } else if (this.playedCard3 === false) {
          gsap.to("#game-container", {
            zIndex: -10,
          });
          gsap.to(".Result", {
            zIndex: 10,
            opacity: 1,
            duration: 0.5,
          });
        }
      } else if (e.downX < e.x) {
        if (this.playedCard2 === true) {
          this.sprite.anims.play("play_card2_reverse");
          console.log("play_card2_reverse");
          this.playedCard2 = false;
        } else if (this.playedCard1 === true) {
          this.sprite.anims.play("play_card1_reverse");
          this.playedCard1 = false;
          console.log("play_card1_reverse");
        }
      }
    });
  }
}
