const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
const player = new Player();
let allBullets = [];
let enemies = [];
const blast = [];
c.font = "30px Comic Sans MS";

// spawn enemies
const intervalId = setInterval(() => {
  enemies.push(new Enemy());
  blast.push(new Blast());
}, 2000);

const render = () => {
  c.clearRect(0, 0, canvas.width, canvas.height);
  if (!player.isAlive) {
    clearInterval(intervalId);
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
    c.textAlign = "center";
    c.fillText("Game Over", canvas.width / 2, canvas.height / 2);
  }

  requestAnimationFrame(render);
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
  }
});
document.addEventListener("keyup", (e) => {
  if (e.key === "ArrowUp") player.velocity.y = 0;
  if (e.key === "ArrowDown") player.velocity.y = 0;
  if (e.key === "ArrowLeft") player.velocity.x = 0;
  if (e.key === "ArrowRight") player.velocity.x = 0;
});
