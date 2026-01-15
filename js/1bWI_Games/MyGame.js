// MyGame - Example implementation of Game interface

class MyGame extends Game {
  x = 1;
  y = 500;
  speed = 0.00001

  init() {
    console.log("Game started!");
  }

  update(deltaTime) {
    this.x = (Math.random() * 10)
    
    console.log(this.x)
  }

  render(ctx) {

    ctx.fillStyle = "#638400ff";
    ctx.fillRect(this.x, this.y, 50, 50);
    ctx.fillStyle = "#000000ff"
    ctx.fillRect(0, 550, 1000, 50)
  }
}

const game = new MyGame();

const framework = new GameFramework(game, 800, 600);
framework.start();