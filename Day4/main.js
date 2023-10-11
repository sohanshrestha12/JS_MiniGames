let canvas = document.getElementById("canvas");
let c = canvas.getContext("2d");
let totalParticles = 50;
let colors = ['green','SkyBlue','yellow','red','pink','purple','LightGreen','grey'];

class Particles {
  constructor() {
    this.x = Math.random() * (canvas.width - 0) + 0;
    this.y = Math.random() * (canvas.height - 0) + 0;
    this.r = Math.random() * (50 - 10) + 10;
    this.color = Math.floor(Math.random() * (8 - 0) + 0);
  }
  drawParticles() {
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    c.fillStyle =colors[this.color];
    console.log(this.color);
    c.fill();
  }
  moveParticles() {
    this.x += Math.random() * (1 - -1) + -1;
  }
}
let particleArr = [];
for (let i = 0; i < totalParticles; i++) {
  const particle = new Particles();
  particleArr.push(particle);
}

const render = () => {
  c.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < particleArr.length; i++) {
    particleArr[i].drawParticles();
    particleArr[i].moveParticles();
  }

  requestAnimationFrame(render);
};
render();
