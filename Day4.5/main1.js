let canvas = document.getElementById("canvas");
let c = canvas.getContext("2d");
let colors = [
  "red",
  "green",
  "SkyBlue",
  "grey",
  "pink",
  "yellow",
  "blue",
  "orange",
  "lightgreen",
];

class Box {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 100;
    this.x_speed = 0.7;
    this.y_speed = 0.7;
    this.color = Math.ceil(Math.random() * (9 - 0) + 0);
  }
  drawBox() {
    c.beginPath();
    c.rect(this.x, this.y, this.width, this.height);
    c.fillStyle = colors[this.color];
    c.fill();
  }
  move() {
    this.x += this.x_speed;
    this.y += this.y_speed;
  }
  borderCollisionDetection() {
    if (this.x + this.width > canvas.height) {
      this.x_speed = -0.7;
      this.color = Math.ceil(Math.random() * (9 - 0) + 0);
    } else if (this.x < 0) {
      this.x_speed = 0.7;
      this.color = Math.ceil(Math.random() * (9 - 0) + 0);
    } else if (this.y + this.height > canvas.height) {
      this.y_speed = -0.7;
      this.color = Math.ceil(Math.random() * (9 - 0) + 0);
    } else if (this.y < 0) {
      this.y_speed = 0.7;
      this.color = Math.ceil(Math.random() * (9 - 0) + 0);
    }
  }
  boxCollisionDetection(otherBox) {
    if (
      this.x + this.x_speed < otherBox.x + otherBox.width &&
      this.x + this.x_speed + this.width > otherBox.x &&
      this.y < otherBox.y + otherBox.height &&
      this.y + this.height > otherBox.y
    ) {
      console.log("horizontal",this.x,this.y);
      this.x_speed *= -1;
    }

    else if (
      this.x < otherBox.x + otherBox.width &&
      this.x + this.width > otherBox.x &&
      this.y + this.y_speed < otherBox.y + otherBox.height &&
      this.y + this.height + this.y_speed > otherBox.y
    ) {
      console.log("vertical", this.x, this.y);
      this.y_speed *= -1;
    }
  }
  update() {
    this.drawBox();
    this.borderCollisionDetection();
    this.move();
  }
}
const box1 = new Box(300, 300);
const box2 = new Box(50, 100);

const render = () => {
  c.clearRect(0, 0, canvas.width, canvas.height);

  box1.update();
  box1.boxCollisionDetection(box2);
  box2.boxCollisionDetection(box1);
  box2.update();
  // box2.drawBox();
  requestAnimationFrame(render);
};
render();
