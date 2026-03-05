// MyGame - Example implementation of Game interface

class MyGame extends Game {
  rectangle = {
    x: 50,
    y: 50,
    width: 100,
    height: 100,
  };

  init() {
    console.log("Game started!");
  }

  update(deltaTime) {
    console.log("x: " + this.rectangle.x);
    console.log("y: " + this.rectangle.y);

      if(this.rectangle.y == 50 && this.rectangle.x == 50) {
        dir = 3;
      } else if (this.rectangle.y == 450 && this.rectangle.x == 50) {
        dir = 2;
      } else if (this.rectangle.y == 450 && this.rectangle.x == 650) {
        dir = 1;
      } else if (this.rectangle.y == 50 && this.rectangle.x == 650) {
        dir = 4;
      }

    if(dir == 1) {
      this.rectangle.y -= 2;
      this.rectangle.x;
    } else if(dir == 2) {
      this.rectangle.y;
      this.rectangle.x += 2;
    } else if(dir == 3) {
      this.rectangle.y += 2;
      this.rectangle.x;
    } else if(dir == 4) {
      this.rectangle.y;
      this.rectangle.x -= 2;
    }

    console.log(dir);
  }
  render(ctx) {
    // Draw rectangle
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#ffffff";

    ctx.strokeRect(
      this.rectangle.x,
      this.rectangle.y,
      this.rectangle.width,
      this.rectangle.height
    );

    ctx.font = "16px monospace";
    ctx.fillText("Hello You!", 50, 50);
  }
} // ← missing brace fixed here
let dir = 1;
const game = new MyGame();

const framework = new GameFramework(game, 800, 600);
framework.start();
