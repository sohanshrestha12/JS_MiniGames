const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

const player = new Player();
let allBullets = [];
const render = () => {
  c.clearRect(0, 0, canvas.width, canvas.height);
  player.update();

  for(let i =0;i<allBullets.length;i++){
    allBullets[i].update();
  }
  requestAnimationFrame(render);
};
render();

document.addEventListener("keydown", (e) => {
  console.log(e);
  if (e.key === "ArrowUp") player.velocity.y = -5;
  if (e.key === "ArrowDown") player.velocity.y = 5;
  if (e.key === "ArrowLeft") player.velocity.x = -5;
  if (e.key === "ArrowRight") player.velocity.x = 5;
  if (e.key === " ") {allBullets.push(
    new Bullet(player.position.x+player.size.width/5,player.position.y-10)
  );}
});
document.addEventListener("keyup", (e) => {
  console.log(e);
  if (e.key === "ArrowUp") player.velocity.y = 0;
  if (e.key === "ArrowDown") player.velocity.y = 0;
  if (e.key === "ArrowLeft") player.velocity.x = 0;
  if (e.key === "ArrowRight") player.velocity.x = 0;
});
