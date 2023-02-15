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
  preload() {}

  vidioFadeIn() {
    this.tweens.add({
      targets: this.video,
      alpha: 1,
      duration: 1000,
      ease: "Linear",
      delay: 500,
      onComplete: () => {
        this.video.play(false, 0, 9);
        // play end
        this.video.on("complete", () => {
          this.video.on("dragend", (e) => {
            if (e.downX > e.x) {
              this.video.setDepth(1);
              this.video_reverse.setDepth(0);
              this.video.play(false, 8, 9);

              console.log(this.acc);
              this.acc++;
              if (this.acc > 16) {
                gsap.to("#game-container", {
                  zIndex: -10,
                });
                gsap.to(".Result", {
                  zIndex: 10,
                  opacity: 1,
                  duration: 1,
                });
              }
            } else if (e.downX < e.x) {
              this.video.setDepth(0);
              this.video_reverse.setDepth(1);
              this.video_reverse.play(false, 1.5, 2);
            }
          });
          this.video_reverse.on("dragend", (e) => {
            if (e.downX > e.x) {
              this.video.setDepth(1);
              this.video_reverse.setDepth(0);
              this.video.play(false, 8, 9);
            } else if (e.downX < e.x) {
              this.video_reverse.setDepth(1);
              this.video.setDepth(0);
              this.video_reverse.play(false, 1.5, 2);
            }
          });
        });
      },
    });
    this.tweens.add({
      targets: this.video_reverse,
      alpha: 1,
      duration: 1000,
      ease: "Linear",
      delay: 500,
    });
  }
  create() {
    this.load.video(
      "pink",
      "/videos/previewPink.mp4",
      "loadeddata",
      false,
      true
    );
    this.load.video(
      "pink_reverse",
      "/videos/previewPink_reverse.mp4",
      "loadeddata",
      false,
      true
    );

    // loading assets after preload
    this.load.on("complete", () => {
      this.video = this.add.video(0, 0, "pink");
      this.video_reverse = this.add.video(0, 0, "pink_reverse");
      this.video_reverse.setAlpha(0);
      this.video.setAlpha(0);

      this.video.setDisplaySize(
        window.innerHeight * devicePixelRatio,
        window.innerHeight * devicePixelRatio
      );
      this.video.setPosition(
        this.sys.game.config.width / 2,
        this.sys.game.config.height / 2
      );
      this.video_reverse.setDisplaySize(
        window.innerHeight * devicePixelRatio,
        window.innerHeight * devicePixelRatio
      );
      this.video_reverse.setPosition(
        this.sys.game.config.width / 2,
        this.sys.game.config.height / 2
      );
      this.video.setDepth(1);
      this.video_reverse.setDepth(0);
      this.video.alpha = 0;
      this.video_reverse.alpha = 0;

      this.video.setInteractive({ draggable: true });
      this.video_reverse.setInteractive({ draggable: true });
    });
    this.load.start();
  }
}
