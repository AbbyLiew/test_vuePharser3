import { Scene } from "phaser";

export default class PlayScene extends Scene {
  constructor() {
    super({ key: "PlayScene" });
    this.book = null;
  }

  bookZoomIn() {
    this.book.play(false, 0, 2);
  }

  openBook_signIn() {
    this.book.play(false, 2, 5);
  }

  create() {
    this.book = this.add.video(450, 800, "book");
    // let book to be global , interact with the window console
    window.bookZoomIn = () => {
      this.book.play(false, 0, 2);
    };

    window.addEventListener("click", () => {
      this.openBook_signIn();
    });
  }

  update() {}
}
