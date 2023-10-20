class Bird {
  constructor() {
    this.size = 50;
    this.position = {
      x: canvas.width / 2 - this.size,
      y: 0,
    };
    this.velocity = {
      x: 0,
      y: 2,
    };
    this.imageSpeed = 0.1;
    this.i = 1;
    this.acceleration = 0.1;
    this.isAlive = true;
    this.images=[];

    //preload img
    for (let i = 1; i <= 4; i++) {
      const image = new Image(); 
      image.src = `./img/bird/frame-${i}.png`;
      this.images.push(image);
    }
  }
  draw() {
    if (this.i >4) {
      this.i = 1;
    } else {
      if (this.isAlive) {
        this.i += this.imageSpeed;
      }
      this.image=this.images[Math.floor(this.i)-1];
      c.beginPath();
      c.drawImage(
        this.image,
        this.position.x,
        this.position.y,
        this.size,
        this.size
      );
    }
  }

  move() {
    this.velocity.y += this.acceleration;
    this.position.y += this.velocity.y;
  }
  jump() {
    bird.velocity.y = -2;
  }
  borderCollision() {
    if (this.position.y + this.size >= canvas.height) {
      this.isAlive = false;
    }
  }
  update() {
    this.draw();
    if (this.isAlive) {
      this.move();
      this.borderCollision();
    }
  }
}
