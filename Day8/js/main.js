let canvas = document.getElementById("canvas");
let c = canvas.getContext("2d");
const bird = new Bird();
const background = new Background();
const background2 = new Background(canvas.width, 0);
const pipe = new Pipe();
let intervalId;
let score = 0;
const stopInterval = () => {
  clearInterval(intervalId);
};
const startInterval = () => {
  intervalId = setInterval(() => {
    ++score;
  }, 1000);
};
if (bird.isAlive) {
  startInterval();
}

const gameRestart = () => {
  c.clearRect(0, 0, canvas.width, canvas.height);
  bird.isAlive = true;
  startInterval();
  bird.position.y = 0;
  pipe.position.x = canvas.width;
  pipe.position.y = Math.random() * (0 - -200) + -200;
  render();
  score = 0;
  // render();
};
const gameOver = () => {
  c.font = "30px Arial";
  c.fillStyle = "red";
  c.textAlign = "center";
  c.fillText(score, canvas.width / 2, canvas.height / 2.4);
  c.fillText("Game Over!!!", canvas.width / 2, canvas.height / 2);
  c.fillText("Press Space to restart.", canvas.width / 2, canvas.height / 1.7);
};

render = () => {
  c.clearRect(0, 0, canvas.width, canvas.height);

  background.update();
  background2.update();
  pipe.update();
  bird.update();
  if (bird.isAlive) {
    c.font = "30px Arial";
    c.fillStyle = "white";
    c.fillText(score, 20, 40);
  }
  if (!bird.isAlive) {
    stopInterval();
    gameOver();
    return;
  }

  requestAnimationFrame(render);
};
render();

document.addEventListener("keyup", (e) => {
  if (e.key === " ") {
    bird.jump();
  }
  if (!bird.isAlive) {
    gameRestart();
  }
});
