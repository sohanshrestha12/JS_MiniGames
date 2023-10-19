const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
// const enemy = new Enemy();
const player = new Player();
let allBullets = [];
let enemies = [];

// spawn enemies
const intervalId = setInterval(()=>{
  enemies.push(new Enemy());
},2000)


const render = () => {
  
  c.clearRect(0, 0, canvas.width, canvas.height);
  if(!player.isAlive){
    clearInterval(intervalId);
  }
  player.update();
  
  // enemy.collisionWithShip(player)
  // enemy.update();
  for(let i = 0 ;i < enemies.length;i++){
    enemies[i].collisionWithShip(player);
    enemies[i].update();
  }
  for (let i = 0; i < allBullets.length; i++) {
    allBullets[i].collisionWithEnemy(enemies);
    allBullets[i].update();
  }
  
  requestAnimationFrame(render);
};
render();

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") player.velocity.y = -5;
  if (e.key === "ArrowDown") player.velocity.y = 5;
  if (e.key === "ArrowLeft") player.velocity.x = -5;
  if (e.key === "ArrowRight") player.velocity.x = 5;
  if(player.isAlive){
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
