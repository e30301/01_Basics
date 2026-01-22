// MyGame - Example implementation of Game interface

class MyGame extends Game {
  rectangle = {
    x: 50,
    y: 250,
    width: 100,
    height: 100,
  };

  init() {
    console.log("Game started!");
  }

  update(deltaTime) {
    console.log("x: " + this.rectangle.x);
    console.log("y: " + this.rectangle.y);

      if(this.rectangle.y < 401 && this.rectangle.x <= 600) {
        this.rectangle.y += 1
      } else if(this.rectangle.y > 400 && this.rectangle.x <= 600) {
          this.rectangle.x += 1;

      } else if(this.rectangle.x > 600 && this.rectangle.y > 100) {
          this.rectangle.y -= 1;
      }
      
    
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

const game = new MyGame();

const framework = new GameFramework(game, 800, 600);
framework.start();
