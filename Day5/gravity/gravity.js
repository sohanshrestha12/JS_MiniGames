let canvas = document.getElementById("canvas");
let c = canvas.getContext("2d");
class Box {
  constructor() {
    this.size = {
      width: 70,
      height: 70,
    };
    this.position = {
      x: 100,
      y: 100,
    };
    this.velocity = {
      x: 1,
      y: 1,
    };
    this.acceleration = 0.2;
  }
  draw() {
    c.beginPath();
    c.rect(this.position.x, this.position.y, this.size.width, this.size.height);
    c.fillStyle = "black";
    c.fill();
  }
  checkBorderCollision() {
    if (this.position.y + this.size.height >= canvas.height) {
        // console.log(this.position.y,this.velocity.y)
        this.position.y = canvas.height - this.size.height;
        this.velocity.y *= -0.8;
    }
}
move() {
    // console.log(this.position.y)
    this.velocity.y += this.acceleration;
    this.position.y += this.velocity.y;
  }
  update() {
    this.draw();
    this.move();
    this.checkBorderCollision();
  }
}
const b = new Box();
const render = () => {
  c.clearRect(0, 0, canvas.width, canvas.height);
  b.update();
  requestAnimationFrame(render);
};
render();
