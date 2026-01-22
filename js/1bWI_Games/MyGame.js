// MyGame - Example implementation of Game interface

class MyGame extends Game {
  rect1 = {
    x: 50,
    y: 250,
    width: 60,
    height: 40,
    vx: 200, // pixels per second
  };

  rectangle = {
    x: 50,
    y: 250,
    width: 60,
    height: 40,
    vx: 200, // pixels per second
  };

  init() {
    console.log("Game started!");
  }

  update(deltaTime) {
    this.rectangle.x += this.rectangle.vx * deltaTime;
    if (this.rectangle.x > 800) {
      this.rectangle.x = -this.rectangle.width;
    }
    this.rectangle.width++;
  }

  render(ctx) {
    // Draw rectangle
    ctx.fillStyle = "#FF66aa";

    ctx.fillRect(
      this.rectangle.x,
      this.rectangle.y,
      this.rectangle.width,
      this.rectangle.height
    );
  }
}

const game = new MyGame();

const framework = new GameFramework(game, 800, 600);
framework.start();