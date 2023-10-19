const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
const player = new Player();
let allBullets = [];
let enemies = [];
let blast = [];
let score = 0;
let intervalId;
let requestId;
// spawn enemies
const startInterval = () => {
  intervalId = setInterval(() => {
    enemies.push(new Enemy());
    blast.push(new Blast());
  }, 2000);
};
const stopInterval = () => {
  clearInterval(intervalId);
};
startInterval();

const render = () => {
  c.clearRect(0, 0, canvas.width, canvas.height);
  if (!player.isAlive) {
    stopInterval();
  }
  player.update();
  // enemy.collisionWithShip(player)
  // enemy.update();
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].collisionWithShip(player);
    enemies[i].update();
  }
  for (let i = 0; i < allBullets.length; i++) {
    allBullets[i].collisionWithEnemy(enemies);
    allBullets[i].update();
  }
  for (let i = 0; i < blast.length; i++) {
    if (enemies[i].isAlive === false) {
      blast[i].update();
    }
  }
  if (!player.isAlive) {
    c.font = "50px Comic Sans MS";
    c.textAlign = "center";
    c.fillText("Game Over", canvas.width / 2, canvas.height / 2);
    c.font = "30px Comic Sans MS";
    c.textAlign = "center";
    c.fillText(
      `Your score is: ${score}`,
      canvas.width / 2,
      canvas.height / 1.75
    );
    c.font = "20px Comic Sans MS";
    c.fillStyle = "white";
    c.textAlign = "center";
    c.fillText("Press space to restart", canvas.width / 2, canvas.height / 1.6);
  }
  c.font = "30px Comic Sans MS";
  c.fillStyle = "green";
  c.fillText(score, 20, 35);

  requestId = requestAnimationFrame(render);
};
render();

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") player.velocity.y = -5;
  if (e.key === "ArrowDown") player.velocity.y = 5;
  if (e.key === "ArrowLeft") player.velocity.x = -5;
  if (e.key === "ArrowRight") player.velocity.x = 5;
  if (player.isAlive) {
    if (e.key === " ") {
      allBullets.push(
        new Bullet(
          player.position.x + player.size.width / 5,
          player.position.y - 10
        )
      );
    }
  } else if (!player.isAlive) {
    if (e.key === " ") {
      cancelAnimationFrame(requestId);
      c.clearRect(0, 0, canvas.width, canvas.height);
      score = 0;
      startInterval();
      enemies = [];
      allBullets = [];
      blast = [];
      player.isAlive = true;
      render();
    }
  }
});
document.addEventListener("keyup", (e) => {
  if (e.key === "ArrowUp") player.velocity.y = 0;
  if (e.key === "ArrowDown") player.velocity.y = 0;
  if (e.key === "ArrowLeft") player.velocity.x = 0;
  if (e.key === "ArrowRight") player.velocity.x = 0;
});
let offset = canvas.getBoundingClientRect();
canvas.addEventListener("mousemove", (e) => {
  if (player.isAlive) {
    player.position.x = e.clientX - offset.left;
    player.position.y = e.clientY - offset.top;
  }
});
canvas.addEventListener("mouseup", (e) => {
  if (e.button == 0) {
    if (player.isAlive) {
      allBullets.push(
        new Bullet(
          player.position.x + player.size.width / 5,
          player.position.y - 10
        )
      );
    }
  }
});
