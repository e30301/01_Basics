// =========================
// Keyboard Input Handling
// =========================
const keys = {};

window.addEventListener("keydown", (e) => {
  keys[e.key.toLowerCase()] = true;
});

window.addEventListener("keyup", (e) => {
  keys[e.key.toLowerCase()] = false;
});


// =========================
// Game Implementation
// =========================
class MyGame extends Game {
  x = 100;
  y = 500;
  width = 50;
  height = 50;
  speed = 2; // pixels per second

  init() {
    console.log("Game started!");
  }

  update(deltaTime) {
    // Convert ms → seconds
    const dt = 0.1;

    if (keys["a"]) this.x -= this.speed;
    if (keys["d"]) this.x += this.speed;
    
    if (keys["w"]) {
      if (this.y > 100) {
        this.y += 2
      }
    }
    if (keys["s"]) this.y += this.speed;

    // Optional: keep player inside canvas (800x600)
    this.x = Math.max(0, Math.min(this.x, 800 - this.width));
    this.y = Math.max(0, Math.min(this.y, 600 - this.height));

    this.y = this.y + 1
  }

  render(ctx) {
    ctx.clearRect(0, 0, 800, 600);

    // Player
    ctx.fillStyle = "#638400ff";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}


// =========================
// Game Startup
// =========================
const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
