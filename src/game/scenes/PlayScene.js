import { Scene } from "phaser";

export default class PlayScene extends Scene {
  constructor() {
    super({ key: "PlayScene" });
  }

  create() {
    {
      this.roof = this.add.sprite(this.sys.game.config.width / 2, -100, "roof");
      this.roof.setOrigin(0.5, 0);
      this.roof.setScale(this.sys.game.config.width / this.roof.width);
      this.bagGroup = this.add.group();
      let posY = 0;

      if (this.roof.height > this.sys.game.config.height * 0.1) {
        posY -= this.roof.height - this.sys.game.config.height * 0.1;
      }

      this.tweens.add({
        targets: this.roof,
        y: posY,
        duration: 700,
      });
    }

    this.boxGroup = this.add.group();
    this.bagGroup = this.add.group();
    this.minitop = this.add.group();
    {
      for (let i = 0; i < 12; i++) {
        let minibox;
        if (i < 3) {
          minibox = this.add
            .sprite(
              (this.sys.game.config.width * i) / 3,
              this.sys.game.config.height,
              "minibox"
            )
            .setOrigin(0, 1);

          minibox.setScale(this.sys.game.config.width / 3 / minibox.width);

          if (i == 0) {
            minibox.alpha = 0;
            let top = this.add
              .sprite(
                (this.sys.game.config.width * i) / 3,
                this.sys.game.config.height,
                "minibox_top"
              )
              .setOrigin(0, 1);

            let bag = this.add
              .sprite(
                (this.sys.game.config.width * i) / 3,
                this.sys.game.config.height,
                "bag_00004"
              )
              .setOrigin(0, 1);

            top.setScale(this.sys.game.config.width / 3 / minibox.width);
            bag.setScale(this.sys.game.config.width / 3 / minibox.width);

            this.bagGroup.add(bag);
            this.minitop.add(top);
          }
          this.boxGroup.add(minibox);
        }
        if (i < 6 && i >= 3) {
          minibox = this.add
            .sprite(
              (this.sys.game.config.width * (i - 3)) / 3,
              this.sys.game.config.height,
              "minibox"
            )
            .setOrigin(0, 1);
          minibox.setScale(this.sys.game.config.width / 3 / minibox.width);

          minibox.y -= ((this.sys.game.config.width / 3) * 438) / 626;

          if (i == 5) {
            minibox.alpha = 0;
            let top = this.add
              .sprite(
                (this.sys.game.config.width * (i - 3)) / 3,
                this.sys.game.config.height,
                "minibox_top"
              )
              .setOrigin(0, 1);

            let bag = this.add
              .sprite(
                (this.sys.game.config.width * (i - 3)) / 3,
                this.sys.game.config.height,
                "bag_00000"
              )
              .setOrigin(0, 1);

            top.setScale(this.sys.game.config.width / 3 / minibox.width);
            bag.setScale(this.sys.game.config.width / 3 / minibox.width);
            bag.y -= ((this.sys.game.config.width / 3) * 438) / 626;
            top.y -= ((this.sys.game.config.width / 3) * 438) / 626;

            this.bagGroup.add(bag);
            this.minitop.add(top);
          }

          this.boxGroup.add(minibox);
        }
        if (i < 9 && i >= 6) {
          minibox = this.add
            .sprite(
              (this.sys.game.config.width * (i - 6)) / 3,
              this.sys.game.config.height,
              "minibox"
            )
            .setOrigin(0, 1);
          minibox.setScale(this.sys.game.config.width / 3 / minibox.width);

          minibox.y -= (2 * ((this.sys.game.config.width / 3) * 438)) / 626;

          if (i == 7) {
            minibox.alpha = 0;
            let top = this.add
              .sprite(
                (this.sys.game.config.width * (i - 6)) / 3,
                this.sys.game.config.height,
                "minibox_top"
              )
              .setOrigin(0, 1);

            let bag = this.add
              .sprite(
                (this.sys.game.config.width * (i - 6)) / 3,
                this.sys.game.config.height,
                "bag_00003"
              )
              .setOrigin(0, 1);

            top.setScale(this.sys.game.config.width / 3 / minibox.width);
            bag.setScale(this.sys.game.config.width / 3 / minibox.width);
            top.y -= (2 * ((this.sys.game.config.width / 3) * 438)) / 626;
            bag.y -= (2 * ((this.sys.game.config.width / 3) * 438)) / 626;

            this.minitop.add(top);
            this.bagGroup.add(bag);
          }

          this.boxGroup.add(minibox);
        }
        if (i == 11) {
          let top = this.add
            .sprite(
              (this.sys.game.config.width * (i - 9)) / 3,
              this.sys.game.config.height,
              "minibox_top"
            )
            .setOrigin(0, 1);

          let bag = this.add
            .sprite(
              (this.sys.game.config.width * (i - 9)) / 3,
              this.sys.game.config.height,
              "bag_00002"
            )
            .setOrigin(0, 1);

          let top2 = this.add
            .sprite(
              (this.sys.game.config.width * (i - 11)) / 3,
              this.sys.game.config.height,
              "minibox_top"
            )
            .setOrigin(0, 1);

          let bag2 = this.add
            .sprite(
              (this.sys.game.config.width * (i - 11)) / 3,
              this.sys.game.config.height,
              "bag_00002"
            )
            .setOrigin(0, 1);

          top.setScale(this.sys.game.config.width / 3 / bag.width);
          bag.setScale(this.sys.game.config.width / 3 / bag.width);
          top2.setScale(this.sys.game.config.width / 3 / bag.width);
          bag2.setScale(this.sys.game.config.width / 3 / bag.width);
          top.y -= (3 * ((this.sys.game.config.width / 3) * 438)) / 626;
          bag.y -= (3 * ((this.sys.game.config.width / 3) * 438)) / 626;
          top2.y -= (3 * ((this.sys.game.config.width / 3) * 438)) / 626;
          bag2.y -= (3 * ((this.sys.game.config.width / 3) * 438)) / 626;

          window.bag2 = bag2;
          this.bagGroup.add(bag);
          this.bagGroup.add(bag2);

          this.minitop.add(top);
          this.minitop.add(top2);
        }
      }
    }

    this.anims.create({
      key: "play_bag_0",
      frames: [
        { key: "bag_00000" },
        { key: "bag_00004" },
        { key: "bag_00003" },
        { key: "bag_00000" },
        { key: "bag_00002" },
      ],
      frameRate: 1,
      repeat: -1,
    });

    this.anims.create({
      key: "play_bag_1",
      frames: [
        { key: "bag_00001" },
        { key: "bag_00002" },
        { key: "bag_00001" },
        { key: "bag_00004" },
        { key: "bag_00003" },
      ],
      frameRate: 1,
      repeat: -1,
    });

    this.anims.create({
      key: "play_bag_2",
      frames: [
        { key: "bag_00002" },
        { key: "bag_00004" },
        { key: "bag_00003" },
        { key: "bag_00002" },
        { key: "bag_00000" },
      ],
      frameRate: 1,
      repeat: -1,
    });

    this.anims.create({
      key: "play_bag_3",
      frames: [
        { key: "bag_00003" },
        { key: "bag_00001" },
        { key: "bag_00003" },
        { key: "bag_00000" },
        { key: "bag_00002" },
      ],
      frameRate: 1,
      repeat: -1,
    });

    this.anims.create({
      key: "play_bag_4",
      frames: [
        { key: "bag_00004" },
        { key: "bag_00001" },
        { key: "bag_00002" },
        { key: "bag_00004" },
        { key: "bag_00000" },
      ],
      frameRate: 1,
      repeat: -1,
    });

    this.bagGroup.children.iterate((child, index) => {
      this.time.addEvent({
        delay: Math.random() * 1500,
        callback: () => {
          switch (index) {
            case 0:
              child.anims.play("play_bag_0");
              break;
            case 1:
              child.anims.play("play_bag_1");
              break;
            case 2:
              child.anims.play("play_bag_2");
              break;
            case 3:
              child.anims.play("play_bag_3");
              break;
            case 4:
              child.anims.play("play_bag_4");
              break;
            default:
              child.anims.play("play_bag");
              break;
          }
        },
      });
    });

    window.fowardDown = this.fowardDown.bind(this);

    window.startGame = this.startGame.bind(this);
  }

  ArrayFrame(start, end, reverse) {
    if (reverse) {
      let arr = [];
      for (let i = start; i >= end; i--) {
        arr.push({ key: "bag_" + i.toString().padStart(5, "0") });
      }
      return arr;
    } else {
      let arr = [];
      for (let i = start; i <= end; i++) {
        arr.push({ key: "bag_" + i.toString().padStart(5, "0") });
      }
      return arr;
    }
  }

  fowardDown() {
    this.boxGroup.children.iterate((child) => {
      this.tweens.add({
        targets: child,
        alpha: 0,
        duration: 500,
        ease: "Linear",
      });
    });

    this.bagGroup.children.iterate((child) => {
      this.tweens.add({
        targets: child,
        alpha: 0,
        duration: 500,
        ease: "Linear",
      });
    });

    this.minitop.children.iterate((child) => {
      this.tweens.add({
        targets: child,
        alpha: 0,
        duration: 500,
        ease: "Linear",
      });
    });
  }

  startGame() {
    // scene fade in
    this.scene.transition({ target: "CardScene", duration: 100 });
  }

  update() {}
}
