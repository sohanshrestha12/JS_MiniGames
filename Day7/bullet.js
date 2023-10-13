class Bullet {
  constructor(x=0,y=0) {
    this.size = {
      width: 32,
      height: 32,
    };
    this.position = {
      x: x,
      y: y,
    };
    this.velocity = {
      x: 0,
      y: -10,
    };
    this.image = new Image();
    this.image.src = './images/bullet.png';
  }
  draw() {
    c.beginPath();
    c.drawImage(this.image,this.position.x, this.position.y, this.size.width, this.size.height);
   
  }
  move() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
  update() {
    this.draw();
    this.move();
  }
}